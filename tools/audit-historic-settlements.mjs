// Check map-data integrity and corridor referential integrity, not historical truth.
import {HISTORIC_SETTLEMENTS} from '../src/data/historic-settlements.js';
import {HERITAGE_PLACES} from '../src/data/heritage-places.js';
import {DOCUMENTED_CORRIDOR_STRANDS} from '../src/data/historical-corridors.js';
import BASE from '../src/data/basemap.js';
import {HYDRO_RIVERS} from '../src/data/hydrorivers.js';
import {StrategicRouter} from '../src/game/strategic-routing.js';

const ids=new Set();
for(const place of HISTORIC_SETTLEMENTS){
  if(!place.id||ids.has(place.id))throw new Error(`Historic settlement id missing or duplicated: ${place.id}`);
  ids.add(place.id);
  if(!Number.isFinite(place.lat)||!Number.isFinite(place.lon)||place.lon<44||place.lon>100.5||place.lat<4.5||place.lat>39.5)throw new Error(`Historic settlement outside atlas bounds: ${place.id}`);
  if(!place.name||!place.region||!place.period||!place.positionEvidence||!place.note||!place.sources?.length)throw new Error(`Historic settlement lacks evidence fields: ${place.id}`);
  for(const [,url] of place.sources)if(!/^https?:\/\//.test(url))throw new Error(`Invalid evidence URL for ${place.id}: ${url}`);
  if(place.positionSource&&!/^https?:\/\//.test(place.positionSource))throw new Error(`Invalid position URL for ${place.id}`);
}
const heritageIds=new Set(HERITAGE_PLACES.map(p=>p.id));
for(const strand of DOCUMENTED_CORRIDOR_STRANDS){
  if(!strand.id||!strand.name||!strand.period||!strand.evidence||!/^https?:\/\//.test(strand.source))throw new Error(`Incomplete corridor metadata: ${strand.id}`);
  if(strand.nodes.length<2)throw new Error(`Corridor has fewer than two nodes: ${strand.id}`);
  for(const [type,id] of strand.nodes){
    const exists=type==='historic'?ids.has(id):type==='heritage'?heritageIds.has(id):false;
    if(!exists)throw new Error(`Unresolved ${type} corridor node ${id} in ${strand.id}`);
  }
}
const placeByRef=(type,id)=>type==='heritage'?HERITAGE_PLACES.find(p=>p.id===id):HISTORIC_SETTLEMENTS.find(p=>p.id===id);
const router=new StrategicRouter(BASE.countries,BASE.rivers,HYDRO_RIVERS);
let routeLegs=0;
for(const strand of DOCUMENTED_CORRIDOR_STRANDS)for(let i=1;i<strand.nodes.length;i++){
  const a=placeByRef(...strand.nodes[i-1]),b=placeByRef(...strand.nodes[i]);
  const route=router.route(a,b,3,false);
  if(!route||!Number.isFinite(route.estimatedDays)||route.path.length<2)throw new Error(`Strategic terrain cannot connect ${strand.name}: ${a.name} → ${b.name}`);
  routeLegs++;
}
console.log(`Historic settlement integrity and terrain routing passed: ${HISTORIC_SETTLEMENTS.length} anchors; ${DOCUMENTED_CORRIDOR_STRANDS.length} source-attributed strands; ${routeLegs} adjacent legs connect on the strategic grid. This validates software connectivity, not historical road geometry.`);
