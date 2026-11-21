// Integrity and regional coverage audit for the compact HydroRIVERS runtime subset.
import {HYDRORIVERS_META as meta, HYDRO_RIVERS as rivers, decodeHydroPolyline} from '../src/data/hydrorivers.js';

const orderCounts=new Map(),mainIds=new Set();let vertices=0,minLon=Infinity,maxLon=-Infinity,minLat=Infinity,maxLat=-Infinity;
for(const [main,order,encoded] of rivers){
  if(!Number.isInteger(main)||!Number.isInteger(order)||order<meta.minimumStrahlerOrder||!encoded)throw new Error(`Invalid HydroRIVERS record: ${main}/${order}`);
  mainIds.add(main);orderCounts.set(order,(orderCounts.get(order)||0)+1);
  for(const part of encoded.split('!')){
    const points=decodeHydroPolyline(part);if(points.length<2)throw new Error(`Degenerate geometry for main river ${main}`);
    vertices+=points.length;
    for(const [lon,lat] of points){
      if(!Number.isFinite(lon)||!Number.isFinite(lat)||lon<meta.extent[0]-.0002||lon>meta.extent[2]+.0002||lat<meta.extent[1]-.0002||lat>meta.extent[3]+.0002)throw new Error(`HydroRIVERS coordinate outside extent: ${lon},${lat}`);
      minLon=Math.min(minLon,lon);maxLon=Math.max(maxLon,lon);minLat=Math.min(minLat,lat);maxLat=Math.max(maxLat,lat);
    }
  }
}
if(rivers.length!==meta.retainedFeatures||vertices!==meta.retainedVertices)throw new Error(`Metadata mismatch: features ${rivers.length}/${meta.retainedFeatures}, vertices ${vertices}/${meta.retainedVertices}`);
if(meta.product!=='HydroRIVERS v1.0'||meta.sourceRecordCount<2_000_000||meta.minimumStrahlerOrder<1)throw new Error('Unexpected product/source metadata.');
if(meta.sourceArchives?.length!==meta.sourceRegions.length||meta.sourceArchives.some(a=>!a.url||!/^[a-f0-9]{64}$/.test(a.sha256||'')))throw new Error('Missing official source archive URL or SHA-256 provenance.');

const samples=[
  ['Indus–Punjab',71.8,31.7],['Helmand basin',64.2,31.1],['Kabul basin',71.2,34.4],['Ganga plain',82.2,25.5],
  ['Brahmaputra valley',91.7,26.0],['Narmada basin',76.2,22.5],['Krishna delta',80.7,16.5],['Karun–Khuzestan',48.8,31.3],
];
function approximateKm(a,b){const lat=(a[1]+b[1])/2,dx=(a[0]-b[0])*111.32*Math.cos(lat*Math.PI/180),dy=(a[1]-b[1])*111.32;return Math.hypot(dx,dy);}
const coverage=[];
for(const [label,lon,lat] of samples){let nearest=Infinity,order=0;for(const [main,rank,encoded] of rivers)for(const part of encoded.split('!'))for(const p of decodeHydroPolyline(part)){const d=approximateKm([lon,lat],p);if(d<nearest){nearest=d;order=rank;}}coverage.push({label,nearestKm:+nearest.toFixed(1),order});}
console.log(JSON.stringify({product:meta.product,sourceRegions:meta.sourceRegions,extent:meta.extent,minimumOrder:meta.minimumStrahlerOrder,features:rivers.length,mainRiverGroups:mainIds.size,vertices,orderCounts:Object.fromEntries([...orderCounts].sort((a,b)=>a[0]-b[0])),coordinateBounds:[minLon,minLat,maxLon,maxLat],runtimeBytes:(await import('node:fs')).statSync(new URL('../src/data/hydrorivers.js',import.meta.url)).size,coverage},null,2));
if(coverage.some(x=>x.nearestKm>45))throw new Error('One or more representative major-river corridor checks are over 45 km from the retained order-5+ network.');
console.log('PASS · encoded geometry, metadata, regional extent and representative major-river coverage.');
