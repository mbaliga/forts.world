// Illustrative hill forts; actual plans and terrain remain unsurveyed.
import {makeFort} from './gen.js';
const med='https://medak.telangana.gov.in/culture-heritage/';
const kon='https://ntr.ap.gov.in/cultural-tourism/';
export const medak=makeFort({
 id:'medak',name:'Medak Fort',native:{text:'Medak',lang:'en',script:'latn'},region:'Medak · Telangana',typeLabel:'Hill fort · inferred prototype',coords:[18.035,78.264],
 type:'hill',seed:239,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:33,cliff:10,skirt:45},innerWall:{k:0.62,h:4,gate:60},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1650',year:'c. 1650',label:'Qutb Shahi interpretation',short:'Qutb Shahi period',lens:'engraving',summary:'An illustrative later Deccan garrison; exact architectural phases need research.',basis:'Medak district describes Kakatiya construction, later Qutb Shahi development, and multiple tiers of walls and bastions.',conjecture:'The generated hill and rings do not reproduce the tiered fort. The exact 1650 phase, dimensions, gates, structures and guard appearance are inferred.',sources:['MED-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district describes the rocky hill and tiered fortifications.',conjecture:'The hill, fortification tiers, objects and current conditions are not surveyed.',sources:['MED-01']}],
 pois:[{id:'tiers',at:[35,20],title:'Walls on a rocky knoll',text:'The district describes several tiers of fortifications. These two generated rings do not recreate their layout.',source:med},
 {id:'phases',at:[-30,15],title:'Changes of rule',text:'The district describes Kakatiya construction and later Qutb Shahi development. Specific architectural phases need research.',source:med},
 {id:'gun',at:[0,-20],title:'A later gun',text:'The district describes a Dutch-made brass gun at the fort. Its date and placement are not reconstructed here.',source:med}]
});
export const kondapalli=makeFort({
 id:'kondapalli',name:'Kondapalli Fort',native:{text:'Kondapalli',lang:'en',script:'latn'},region:'NTR · Andhra Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[16.615,80.540],
 type:'hill',seed:241,units:{planScale:3,vScale:4},size:{rx:95,ry:72},hill:{h:35,cliff:10,skirt:45},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1650',year:'c. 1650',label:'Provisional Deccan interpretation',short:'Phase uncertain',lens:'engraving',summary:'An illustrative later fort garrison; ownership and architecture for this date need review.',basis:'The district attributes construction to Ana-Vema Reddy in 1362–1377 and describes a later Vijayanagara capture.',conjecture:'The current campaign associates this later period with the Qutb Shahis, but that phase remains inferred. The hill, gates, walls, buildings and guard appearance are not reconstructed.',sources:['KON-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The NTR district describes the historic fort and its early attribution.',conjecture:'The generated terrain, fort plan and present condition are not surveyed.',sources:['KON-01']}],
 pois:[{id:'origin',at:[35,20],title:'Attributed construction',text:'The NTR district attributes the fort’s construction to Ana-Vema Reddy during 1362–1377.',source:kon},
 {id:'control',at:[-30,15],title:'Changes of control',text:'The district describes a later Vijayanagara capture. The campaign’s later phases remain provisional.',source:kon},
 {id:'layout',at:[0,-20],title:'Fort layout',text:'The actual fort, approach, structures and surroundings are not reconstructed in this prototype.',source:kon}]
});
