#!/usr/bin/env node
// Import a lightweight regional HydroRIVERS v1 reach subset from extracted official shapefiles.
// The source shapefiles are not bundled; this tool writes only the clipped, simplified map subset.
import fs from 'node:fs';
import path from 'node:path';

const BOX=[44,4.5,100.5,39.5], TOLERANCE=0.025;
let MIN_ORDER=5;
const args=process.argv.slice(2), inputDirs=[];
for(let i=0;i<args.length;i++){
  if(args[i]==='--source')inputDirs.push(args[++i]);
  else if(args[i]==='--order')MIN_ORDER=+args[++i];
  else throw new Error(`Unknown argument: ${args[i]}`);
}
if(!inputDirs.length)throw new Error('Usage: node tools/import-hydrorivers.mjs --source <extracted-region-folder> [--source <another-folder>]');
const OUT=path.resolve('src/data/hydrorivers.js');

function dbfLayout(buf){
  const count=buf.readUInt32LE(4),header=buf.readUInt16LE(8),record=buf.readUInt16LE(10),fields=[];let p=32,offset=1;
  while(buf[p]!==0x0d){const d=buf.subarray(p,p+32),name=d.subarray(0,11).toString('ascii').split('\0')[0],len=d[16];fields.push({name,offset,length:len});offset+=len;p+=32;}
  return {count,header,record,fields:Object.fromEntries(fields.map(f=>[f.name,f]))};
}
function dbfNumber(buf,layout,index,name){const f=layout.fields[name],p=layout.header+index*layout.record+f.offset,s=buf.subarray(p,p+f.length).toString('ascii').trim();return s?Number(s):0;}
function clip(a,b){
  let t0=0,t1=1,dx=b[0]-a[0],dy=b[1]-a[1];
  for(const [p,q] of [[-dx,a[0]-BOX[0]],[dx,BOX[2]-a[0]],[-dy,a[1]-BOX[1]],[dy,BOX[3]-a[1]]]){
    if(p===0){if(q<0)return null;continue;}const t=q/p;
    if(p<0){if(t>t1)return null;if(t>t0)t0=t;}else{if(t<t0)return null;if(t<t1)t1=t;}
  }
  return [[a[0]+t0*dx,a[1]+t0*dy],[a[0]+t1*dx,a[1]+t1*dy]];
}
function clippedParts(points,parts){
  const out=[];
  for(let part=0;part<parts.length;part++){
    const start=parts[part],end=parts[part+1]??points.length;let line=[];
    const flush=()=>{if(line.length>1)out.push(line);line=[];};
    for(let i=start+1;i<end;i++){
      const c=clip(points[i-1],points[i]);if(!c){flush();continue;}
      if(!line.length)line=[c[0],c[1]];
      else if(Math.abs(line.at(-1)[0]-c[0][0])<1e-7&&Math.abs(line.at(-1)[1]-c[0][1])<1e-7)line.push(c[1]);
      else{flush();line=[c[0],c[1]];}
    }
    flush();
  }
  return out;
}
function simplify(points,tol=TOLERANCE){
  if(points.length<=2)return points;
  const sqtol=tol*tol,keep=new Uint8Array(points.length);keep[0]=keep[points.length-1]=1;const stack=[[0,points.length-1]];
  while(stack.length){const [first,last]=stack.pop(),a=points[first],b=points[last],dx=b[0]-a[0],dy=b[1]-a[1],den=dx*dx+dy*dy;let max=sqtol,index=-1;
    for(let i=first+1;i<last;i++){const p=points[i],t=den?Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/den)):0,x=a[0]+t*dx,y=a[1]+t*dy,d=(p[0]-x)**2+(p[1]-y)**2;if(d>max){max=d;index=i;}}
    if(index>=0){keep[index]=1;stack.push([first,index],[index,last]);}
  }
  return points.filter((_,i)=>keep[i]);
}
function encodePolyline(points){
  let out='',lastLat=0,lastLon=0;
  const enc=n=>{let v=n<0?~(n<<1):(n<<1);while(v>=0x20){out+=String.fromCharCode((0x20|(v&0x1f))+63);v>>=5;}out+=String.fromCharCode(v+63);};
  for(const [lon,lat] of points){const y=Math.round(lat*1e4),x=Math.round(lon*1e4);enc(y-lastLat);enc(x-lastLon);lastLat=y;lastLon=x;}
  return out;
}
function readShape(shp,index,offsetWords,contentWords){
  const pos=offsetWords*2+8,type=shp.readUInt32LE(pos);if(type===0)return null;
  if(type!==3&&type!==13&&type!==23)throw new Error(`Unexpected shape type ${type} at record ${index}`);
  const nParts=shp.readUInt32LE(pos+36),nPoints=shp.readUInt32LE(pos+40),partPos=pos+44,pointPos=partPos+nParts*4,parts=[],points=[];
  for(let i=0;i<nParts;i++)parts.push(shp.readUInt32LE(partPos+i*4));
  for(let i=0;i<nPoints;i++)points.push([shp.readDoubleLE(pointPos+i*16),shp.readDoubleLE(pointPos+i*16+8)]);
  return clippedParts(points,parts).map(line=>simplify(line)).filter(line=>line.length>1);
}
const seen=new Set(),features=[];let sourceRecordCount=0,spatialCount=0,filteredCount=0,pointCount=0;
for(const folderArg of inputDirs){
  const folder=path.resolve(folderArg),files=fs.readdirSync(folder),shpPath=path.join(folder,files.find(f=>f.endsWith('.shp'))||''),base=shpPath.slice(0,-4),shp=fs.readFileSync(shpPath),shx=fs.readFileSync(base+'.shx'),dbf=fs.readFileSync(base+'.dbf'),layout=dbfLayout(dbf);
  if(!shpPath.endsWith('.shp')||layout.count!==(shx.length-100)/8)throw new Error(`Invalid/mismatched HydroRIVERS shapefile files in ${folder}`);
  sourceRecordCount+=layout.count;
  for(let i=0;i<layout.count;i++){
    const id=dbfNumber(dbf,layout,i,'HYRIV_ID');if(seen.has(id))continue;
    const record=100+i*8,offsetWords=shx.readUInt32BE(record),contentWords=shx.readUInt32BE(record+4),pos=offsetWords*2+8;
    const type=shp.readUInt32LE(pos);if(!type)continue;
    const xmin=shp.readDoubleLE(pos+4),ymin=shp.readDoubleLE(pos+12),xmax=shp.readDoubleLE(pos+20),ymax=shp.readDoubleLE(pos+28);
    if(xmax<BOX[0]||xmin>BOX[2]||ymax<BOX[1]||ymin>BOX[3])continue;
    spatialCount++;
    const order=dbfNumber(dbf,layout,i,'ORD_STRA'),discharge=dbfNumber(dbf,layout,i,'DIS_AV_CMS');if(order<MIN_ORDER)continue;
    const paths=readShape(shp,i,offsetWords,contentWords);if(!paths.length)continue;seen.add(id);filteredCount++;
    const compact=paths.map(line=>line.map(([lon,lat])=>[+lon.toFixed(4),+lat.toFixed(4)]));pointCount+=compact.reduce((n,l)=>n+l.length,0);
    // Google-style polyline encoding at 1e-4 degrees keeps the runtime dataset compact.
    // `!` is outside the encoding alphabet and separates disconnected shape parts.
    features.push([dbfNumber(dbf,layout,i,'MAIN_RIV'),order,compact.map(encodePolyline).join('!')]);
  }
}
features.sort((a,b)=>a.id-b.id);
const sourceArchives=inputDirs.map(p=>{const n=path.basename(path.resolve(p));if(n.includes('_as_shp'))return {region:'Asia',url:'https://data.hydrosheds.org/file/HydroRIVERS/HydroRIVERS_v10_as_shp.zip',sha256:'29780b0a75f90024f22e7e2029e5e3045f7325cda0528db65c5cc4c864b98525'};if(n.includes('_eu_shp'))return {region:'Europe and Middle East',url:'https://data.hydrosheds.org/file/HydroRIVERS/HydroRIVERS_v10_eu_shp.zip',sha256:'500da7d36ceee0aa4c82dd625f5c53d80ba2f7ac14ad022cd3a6601bf55068e5'};return {region:n,url:null,sha256:null};});
const meta={product:'HydroRIVERS v1.0',provider:'HydroSHEDS',retrieved:'2026-11-01',sourceRegions:inputDirs.map(p=>path.basename(path.resolve(p))),sourceArchives,sourceRecordCount,sourceFeaturesIntersectingExtent:spatialCount,retainedFeatures:features.length,retainedVertices:pointCount,extent:BOX,minimumStrahlerOrder:MIN_ORDER,simplificationToleranceDegrees:TOLERANCE,coordinatePrecisionDegrees:0.0001,geometryEncoding:'Google encoded polyline, precision 1e-4 degrees; ! separates disconnected parts',verticalOrHistoricalClaim:'Modern generalized hydrography; not a dated historical channel/ford dataset',attribution:'Lehner, B., Grill G. (2013). Global river hydrography and network routing: baseline data and new approaches to study the world’s large river systems. Hydrological Processes, 27(15): 2171–2186. HydroRIVERS v1.0, HydroSHEDS; https://www.hydrosheds.org/products/hydrorivers. Licence: https://www.hydrosheds.org/faq'};
fs.writeFileSync(OUT,`// Generated by tools/import-hydrorivers.mjs. See HYDRORIVERS_META for provenance and limits.\nexport const HYDRORIVERS_META=${JSON.stringify(meta)};\n// Entries are [MAIN_RIV, Strahler order, encoded path(s)].\nexport const HYDRO_RIVERS=${JSON.stringify(features)};\nexport function decodeHydroPolyline(encoded){let i=0,lat=0,lon=0,out=[];while(i<encoded.length){let result=0,shift=0,b;do{b=encoded.charCodeAt(i++)-63;result|=(b&31)<<shift;shift+=5;}while(b>=32);lat+=(result&1)?~(result>>1):(result>>1);result=0;shift=0;do{b=encoded.charCodeAt(i++)-63;result|=(b&31)<<shift;shift+=5;}while(b>=32);lon+=(result&1)?~(result>>1):(result>>1);out.push([lon/1e4,lat/1e4]);}return out;}\n`);
console.log(JSON.stringify({...meta,output:OUT,outputBytes:fs.statSync(OUT).size},null,2));
