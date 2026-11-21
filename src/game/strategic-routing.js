import {strategicTerrainAt,strategicElevationSource} from './strategic-terrain.js';
import {decodeHydroPolyline} from '../data/hydrorivers.js';

// Coarse movement graph for the continuous campaign layer. 0.25° cells are a logistics scale,
// not tactical hexes. Rivers are treated as crossing friction, not impassable borders.
const BOX = [44, 4.5, 100.5, 39.5], DX = .25, DY = .25;
const SPEED = {highlands: 6, arid: 22, plain: 28, plateau: 21, escarpment: 9, uplands: 13, coast: 22, island: 20, hills: 12, alborz: 6, zagros: 8, 'iran-plateau': 15, 'caspian-lowland': 23, khuzestan: 22, sea: 55};
const rad = x => x * Math.PI / 180;
function km(a, b) {
  const lat = rad((a.lat + b.lat) / 2), dx = (b.lon - a.lon) * 111.32 * Math.cos(lat), dy = (b.lat - a.lat) * 111.32;
  return Math.hypot(dx, dy);
}
function inside(lon, lat, ring) {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function intersects(a, b, c, d) {
  const cross = (p, q, r) => (q.lon-p.lon)*(r.lat-p.lat)-(q.lat-p.lat)*(r.lon-p.lon);
  const x1=cross(a,b,c), x2=cross(a,b,d), x3=cross(c,d,a), x4=cross(c,d,b);
  // Exclude shared endpoints: a road cell merely touching a river vertex is not a crossing.
  return x1*x2 < 0 && x3*x4 < 0;
}
class Heap {
  constructor(){this.a=[];}
  push(v){const a=this.a;a.push(v);let i=a.length-1;while(i){const p=(i-1)>>1;if(a[p][0]<=v[0])break;a[i]=a[p];i=p;}a[i]=v;}
  pop(){const a=this.a;if(!a.length)return null;const root=a[0],v=a.pop();if(a.length){let i=0;while(true){let c=i*2+1;if(c>=a.length)break;if(c+1<a.length&&a[c+1][0]<a[c][0])c++;if(a[c][0]>=v[0])break;a[i]=a[c];i=c;}a[i]=v;}return root;}
}

export class StrategicRouter {
  constructor(countries, rivers, hydroRivers = []) {
    this.xn = Math.ceil((BOX[2]-BOX[0])/DX); this.yn = Math.ceil((BOX[3]-BOX[1])/DY); this.cells = new Array(this.xn*this.yn); this.riverSegments = new Map(); this.hasHydroRivers=hydroRivers.length>0;
    const regions = new Set(['IND','PAK','AFG','BGD','NPL','BTN','LKA','MMR','CHN','IRN']);
    const land = countries.filter(c=>regions.has(c.iso));
    for(let y=0;y<this.yn;y++) for(let x=0;x<this.xn;x++) {
      const lon=BOX[0]+(x+.5)*DX, lat=BOX[1]+(y+.5)*DY, id=y*this.xn+x;
      const isLand=land.some(c=>c.rings.some(r=>inside(lon,lat,r)));
      const terrain=isLand?strategicTerrainAt(lon,lat):null;
      this.cells[id]={id,x,y,lon,lat,water:!isLand,terrain:terrain?.id||'sea',elevation:terrain?.elevationMeters||0};
    }
    // Index generalized Natural Earth river segments to the grid cells they cross, so each
    // movement edge checks only nearby watercourses rather than the full river network.
    for(const river of rivers) for(let i=1;i<river.pts.length;i++) {
      const p=river.pts[i-1],q=river.pts[i], seg={name:river.name,a:{lon:p[0],lat:p[1]},b:{lon:q[0],lat:q[1]}};
      const x0=Math.max(0,Math.floor((Math.min(p[0],q[0])-BOX[0])/DX)), x1=Math.min(this.xn-1,Math.floor((Math.max(p[0],q[0])-BOX[0])/DX));
      const y0=Math.max(0,Math.floor((Math.min(p[1],q[1])-BOX[1])/DY)), y1=Math.min(this.yn-1,Math.floor((Math.max(p[1],q[1])-BOX[1])/DY));
      for(let y=y0;y<=y1;y++) for(let x=x0;x<=x1;x++){const id=y*this.xn+x, arr=this.riverSegments.get(id)||[];arr.push(seg);this.riverSegments.set(id,arr);}
    }
    // HydroRIVERS is stored compactly as [MAIN_RIV, Strahler order, encoded parts].
    // Indexing only its order-5+ subset keeps edge checks local to the regional network.
    for(const [main,order,encoded] of hydroRivers) for(const part of encoded.split('!')) {
      const points=decodeHydroPolyline(part);
      for(let i=1;i<points.length;i++) {
        const p=points[i-1],q=points[i],seg={name:`HydroRIVERS main ${main}`,main,order,a:{lon:p[0],lat:p[1]},b:{lon:q[0],lat:q[1]}};
        const x0=Math.max(0,Math.floor((Math.min(p[0],q[0])-BOX[0])/DX)),x1=Math.min(this.xn-1,Math.floor((Math.max(p[0],q[0])-BOX[0])/DX));
        const y0=Math.max(0,Math.floor((Math.min(p[1],q[1])-BOX[1])/DY)),y1=Math.min(this.yn-1,Math.floor((Math.max(p[1],q[1])-BOX[1])/DY));
        for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){const id=y*this.xn+x,arr=this.riverSegments.get(id)||[];arr.push(seg);this.riverSegments.set(id,arr);}
      }
    }
  }
  route(start, end, month=1, allowSea=false) {
    const inBounds=p=>p.lon>=BOX[0]&&p.lon<=BOX[2]&&p.lat>=BOX[1]&&p.lat<=BOX[3];
    if(!inBounds(start)||!inBounds(end))return null;
    const nearest=(p)=>{let best=-1,bd=Infinity;for(const c of this.cells)if(c&&(!c.water||allowSea)){const d=km(p,c);if(d<bd){best=c.id;bd=d;}}return best;};
    const si=nearest(start), ti=nearest(end); if(si<0||ti<0)return null;
    const s=this.cells[si], t=this.cells[ti], g=new Float64Array(this.cells.length);g.fill(Infinity);g[si]=0;
    const prev=new Int32Array(this.cells.length);prev.fill(-1);const closed=new Uint8Array(this.cells.length), heap=new Heap();heap.push([km(s,t)/28,si]);
    const dirs=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]], wet=(month>=6&&month<=9);
    while(heap.a.length){const [,id]=heap.pop();if(closed[id])continue;if(id===ti)break;closed[id]=1;const a=this.cells[id];
      for(const [ox,oy] of dirs){const nx=a.x+ox,ny=a.y+oy;if(nx<0||nx>=this.xn||ny<0||ny>=this.yn)continue;const ni=ny*this.xn+nx,b=this.cells[ni];if(!b||closed[ni])continue;
        if(b.water&&!allowSea)continue;
        const dist=km(a,b),grade=Math.abs(b.elevation-a.elevation)/(dist*1000),slope=1+Math.min(1.5,grade*8),base=dist*slope/(SPEED[b.terrain]*(wet&&['escarpment','uplands','hills'].includes(b.terrain)?0.68:1))+(a.water!==b.water?1.5:0);
        const crossed=new Map(),segs=[...(this.riverSegments.get(id)||[]),...(this.riverSegments.get(ni)||[])];for(const seg of segs){if(intersects(a,b,seg.a,seg.b)){const key=seg.main==null?seg.name:`H${seg.main}`;crossed.set(key,Math.max(crossed.get(key)||0,seg.order||0));}}
        // Seasonal crossing friction is an explicit gameplay rule, not a claim about
        // a river's exact historical discharge or fordability.
        const crossingDays=this.hasHydroRivers?[...crossed.values()].reduce((sum,order)=>sum+(wet?0.12:0.04)*order,0):crossed.size*(wet?0.75:0.3),nd=g[id]+base+crossingDays;if(nd<g[ni]){g[ni]=nd;prev[ni]=id;heap.push([nd+km(b,t)/28,ni]);}
      }
    }
    if(si!==ti&&prev[ti]<0)return null;
    const ids=[];for(let id=ti;id>=0;id=prev[id]){ids.push(id);if(id===si)break;}ids.reverse();
    const startCellDays=km(start,s)/SPEED[s.terrain],endCellDays=km(t,end)/SPEED[t.terrain],estimatedDays=startCellDays+g[ti]+endCellDays;
    const path=[],pathDays=[],seaFlags=[],crossings=new Set(),hydroCrossings=new Map();
    const append=(p,d,sea)=>{const last=path.length-1;if(last>=0&&km({lon:path[last][0],lat:path[last][1]},{lon:p[0],lat:p[1]})<.1){pathDays[last]=d;seaFlags[last]=sea;}else{path.push(p);pathDays.push(d);seaFlags.push(sea);}};
    append([start.lon,start.lat],0,s.water);
    let riverCrossingDays=0;
    for(let i=1;i<ids.length;i++){const a=this.cells[ids[i-1]],b=this.cells[ids[i]],segs=[...(this.riverSegments.get(a.id)||[]),...(this.riverSegments.get(b.id)||[])],edgeCrossings=new Map();for(const seg of segs)if(intersects(a,b,seg.a,seg.b)){if(seg.main==null){crossings.add(seg.name);edgeCrossings.set(seg.name,0);}else{hydroCrossings.set(seg.main,Math.max(hydroCrossings.get(seg.main)||0,seg.order));edgeCrossings.set(`H${seg.main}`,Math.max(edgeCrossings.get(`H${seg.main}`)||0,seg.order));}}riverCrossingDays+=this.hasHydroRivers?[...edgeCrossings.values()].reduce((sum,order)=>sum+(wet?0.12:0.04)*order,0):edgeCrossings.size*(wet?0.75:0.3);}
    for(const id of ids){const c=this.cells[id];append([c.lon,c.lat],startCellDays+g[id],c.water);}
    append([end.lon,end.lat],estimatedDays,t.water);
    let distanceKm=0,seaKm=0;for(let i=1;i<path.length;i++){const d=km({lon:path[i-1][0],lat:path[i-1][1]},{lon:path[i][0],lat:path[i][1]});distanceKm+=d;if(seaFlags[i-1]||seaFlags[i])seaKm+=d;}
    return {path,pathDays,distanceKm,estimatedDays,seaKm,riverCrossings:[...crossings].sort(),hydroRiverCrossings:[...hydroCrossings].map(([main,order])=>({main,order})).sort((a,b)=>a.main-b.main),riverCrossingDays,seasonProfile:wet?'monsoon friction':'dry-season friction',cellKm:Math.round(Math.sqrt((DX*111*Math.cos(rad((s.lat+t.lat)/2)))*(DY*111))),riverSource:this.hasHydroRivers?'HydroRIVERS v1.0 order-5+ modern reaches (crossing delays are gameplay rules)':'Natural Earth generalized modern river lines',terrainSource:strategicElevationSource()};
  }
}
