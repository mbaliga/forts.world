// Deterministic, low-resolution strategic terrain for the South Asia campaign board.
// Survey of India, Physical Map of India (2019, 1:4,000,000) is a comparison
// reference for broad landform classes; its raster has not been digitized into this
// model. Meter values
// and local variation below are generated gameplay estimates, not measured elevation
// or historical land cover. See docs/research/geographic-views-between-forts.md.
import { STRATEGIC_DEM } from '../data/strategic-dem-grid.js';
export { STRATEGIC_DEM };
export const STRATEGIC_TERRAINS = [
  ['Himalayan highlands', '#8b8c70'], ['arid northwest', '#c9a76c'], ['river plain', '#b4b47b'],
  ['plateau', '#a68e65'], ['western escarpment', '#66836d'], ['eastern uplands', '#788b69'],
  ['coastal lowland', '#9da977'], ['island upland', '#85936a'], ['wooded hills', '#71856a'],
  ['Alborz highlands', '#85866e'], ['Zagros highlands', '#8f846f'], ['Iranian plateau', '#b19a78'],
  ['Caspian lowland', '#8fa98b'], ['Khuzestan lowland', '#b2b17e'],
];
const TERRAIN_INDEX = {highlands:0,arid:1,plain:2,plateau:3,escarpment:4,uplands:5,coast:6,island:7,hills:8,alborz:9,zagros:10,'iran-plateau':11,'caspian-lowland':12,khuzestan:13};
export function sampleStrategicDEM(g,lon,lat){
  if(!g)return null;
  const col=(lon-g.xllcorner)/g.cellsize-.5,row=(g.yllcorner+g.nrows*g.cellsize-lat)/g.cellsize-.5;
  if(col<-.5||col>g.ncols-.5||row<-.5||row>g.nrows-.5)return null;
  const x0=clamp(Math.floor(col),0,g.ncols-1),x1=Math.min(g.ncols-1,x0+1),y0=clamp(Math.floor(row),0,g.nrows-1),y1=Math.min(g.nrows-1,y0+1),fx=clamp(col-x0,0,1),fy=clamp(row-y0,0,1);
  const weighted=[[x0,y0,(1-fx)*(1-fy)],[x1,y0,fx*(1-fy)],[x0,y1,(1-fx)*fy],[x1,y1,fx*fy]];
  let total=0,weight=0;for(const [x,y,w] of weighted){const value=g.elevations[y*g.ncols+x];if(w>0&&value!==g.nodata&&Number.isFinite(value)){total+=value*w;weight+=w;}}
  return weight?Math.round(total/weight):null;
}
function sampleSourcedElevation(lon,lat){return sampleStrategicDEM(STRATEGIC_DEM,lon,lat);}
export function strategicElevationSource(){return STRATEGIC_DEM?`${STRATEGIC_DEM.product}, ${STRATEGIC_DEM.verticalDatum}`:'procedural gameplay estimate; not a measured DEM';}
const smooth = t => t*t*(3-2*t);
function hash(x,y,seed){const n=Math.sin(x*127.1+y*311.7+seed*74.7)*43758.5453;return (n-Math.floor(n))*2-1;}
function noise(x,y,seed){const ix=Math.floor(x),iy=Math.floor(y),fx=smooth(x-ix),fy=smooth(y-iy),a=hash(ix,iy,seed),b=hash(ix+1,iy,seed),c=hash(ix,iy+1,seed),d=hash(ix+1,iy+1,seed);return (a*(1-fx)+b*fx)*(1-fy)+(c*(1-fx)+d*fx)*fy;}
function distanceToChain(lon,lat,chain){let best=Infinity;const cl=Math.cos(lat*Math.PI/180);for(let i=1;i<chain.length;i++){const [x0,y0]=chain[i-1],[x1,y1]=chain[i],ax=(x0-lon)*111.32*cl,ay=(y0-lat)*111.32,bx=(x1-lon)*111.32*cl,by=(y1-lat)*111.32,dx=bx-ax,dy=by-ay,t=Math.max(0,Math.min(1,-(ax*dx+ay*dy)/(dx*dx+dy*dy||1)));best=Math.min(best,Math.hypot(ax+t*dx,ay+t*dy));}return best;}
const ridge=(lon,lat,chain,peak,width)=>peak*Math.exp(-.5*(distanceToChain(lon,lat,chain)/width)**2);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function terrainIdAt(lon,lat){
  // Broad regional classes follow FAO's Iran physiography. Hand-shaped boundaries
  // are gameplay regions, not a traced physical map or surveyed landform polygons.
  if(lon>=44&&lon<59.5){
    if(lat>36.5&&lon>48&&lon<56)return 'caspian-lowland';
    if(lat>34.8&&lat<39.5&&lon>46&&lon<59)return 'alborz';
    if(lon<49.5&&lat>=29.5&&lat<=33.5)return 'khuzestan';
    if(lon<53.5&&lat>25.5&&lat<35.2)return 'zagros';
    if(lon>=49.5&&lat>25.5&&lat<36.5)return 'iran-plateau';
    if(lat>33&&lon<49.5)return 'highlands';
  }
  const mountainFront=lon<75?33.2:lon<80?31.7:lon<84?29.5:27.5;
  if(lat<36.7&&lon>70&&lon<97&&lat>mountainFront)return 'highlands';
  if(lon>=59&&lon<=75&&lat>33)return 'highlands';
  if(lat>23&&lat<32&&lon>59&&lon<75.5)return 'arid';
  if(lat>22&&lat<30.5&&lon>73&&lon<91)return 'plain';
  if(lat>13&&lat<23.5&&lon>73&&lon<86){if(lon<76.3&&lat<21.8)return 'escarpment';if(lon>80&&lon<84.5)return 'uplands';return 'plateau';}
  if((lat>8&&lat<13&&lon>74&&lon<78)||(lat>5.5&&lat<10&&lon>79&&lon<82))return 'island';
  if(lat>7&&lat<23&&lon<73.2)return 'coast';
  if((lat>7&&lat<23&&(lon<74||lon>84))||(lat>20&&lat<27&&lon>91&&lon<98))return 'hills';
  return 'coast';
}
export function strategicElevationAt(lon,lat){
  const sourced=sampleSourcedElevation(lon,lat);if(sourced!==null)return sourced;
  const id=terrainIdAt(lon,lat);let h=id==='plain'?95:id==='arid'?150:id==='plateau'?500:id==='escarpment'?500:id==='uplands'?420:id==='hills'?550:id==='island'?220:id==='highlands'?1200:id==='alborz'?1400:id==='zagros'?1100:id==='iran-plateau'?1050:id==='caspian-lowland'?40:id==='khuzestan'?80:65;
  // Large-scale mountain arcs and uplands. They shape the playable surface but are not a DEM.
  const hinduKush=[[60,36.5],[65,37],[70,36.8],[75,35.8],[79,34.4]], himalaya=[[73,35],[77,33.5],[81,31.5],[84,30],[90,29],[96,29.5],[99,29]];
  h=Math.max(h,ridge(lon,lat,hinduKush,5200,85),ridge(lon,lat,himalaya,6100,125));
  const zagros=[[44.5,37],[46.2,35],[47.8,33],[49,31],[51,29],[53.2,27],[56.5,26.5]];
  const alborz=[[46.5,37],[48.5,36.2],[50.5,36],[52.5,36.2],[54.5,36.6],[57,37.2]];
  if(id==='zagros')h=Math.max(h,ridge(lon,lat,zagros,2200,55));
  if(id==='alborz')h=Math.max(h,ridge(lon,lat,alborz,2400,52));
  if(lon>77&&lon<98&&lat>29.5&&lat<36.8)h=Math.max(h,3900+Math.max(0,(lat-29.5))*65);
  const westernGhats=[[73.1,8.5],[74.1,12],[74.5,16],[74.7,19],[75.4,21.8]];
  h=Math.max(h,ridge(lon,lat,westernGhats,1500,45));
  const easternGhats=[[80.4,11],[81.2,14],[82.5,17],[84.3,20.5]];
  const brokenEast=ridge(lon,lat,easternGhats,1050,74)*(0.58+0.42*Math.sin((lat-8)*1.8)**2);
  h=Math.max(h,brokenEast);
  h=Math.max(h,ridge(lon,lat,[[72.2,23.4],[73.5,25.2],[74.5,27.4],[76,29.3]],850,55));
  h=Math.max(h,ridge(lon,lat,[[73,22],[77,23.1],[81,23.8],[85,23]],1150,90));
  h=Math.max(h,1550*Math.exp(-.5*(((lon-91.2)*100)**2+((lat-25.5)*111)**2)/(105**2)));
  const cl=Math.cos(lat*Math.PI/180),x=lon*cl;
  const n=noise(x*.65,lat*.65,1)*90+noise(x*1.8,lat*1.8,2)*50+noise(x*4.8,lat*4.8,3)*20;
  return Math.max(0,Math.round(h+n));
}
export function strategicTerrainAt(lon, lat) {
  const wave = Math.sin(lon * 2.31 + lat * 1.73) * .55 + Math.sin(lon * .83 - lat * 2.19) * .3 + Math.cos(lon * 4.7 + lat * 3.1) * .15;
  const id=terrainIdAt(lon,lat),index=TERRAIN_INDEX[id]??6;
  const elevationMeters=strategicElevationAt(lon,lat),elevationSource=STRATEGIC_DEM?strategicElevationSource():'procedural gameplay estimate; not DEM';
  return {id,index,wave,elevationMeters,elevationSource};
}

export function strategicHillshadeAt(lon,lat){const d=STRATEGIC_DEM?STRATEGIC_DEM.cellsize/2:.04,dx=(strategicElevationAt(lon+d,lat)-strategicElevationAt(lon-d,lat))/(2*d*111320*Math.cos(lat*Math.PI/180)),dy=(strategicElevationAt(lon,lat+d)-strategicElevationAt(lon,lat-d))/(2*d*111320);return clamp(.78-dx*2.2+dy*1.4,.48,1.04);}
