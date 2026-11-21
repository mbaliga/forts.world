// Illustrative fort scenes. The landscapes, plans and monuments are not surveyed.
import {makeFort} from './gen.js';
const up='https://gujarattourism.com/saurashtra/junagadh/uparkot-fort.html';
const pav='https://whc.unesco.org/en/list/1101/';
export const uparkot=makeFort({
 id:'uparkot',name:'Uparkot Fort',native:{text:'Uparkot',lang:'en',script:'latn'},region:'Junagadh · Gujarat',typeLabel:'Hill fort · inferred prototype',coords:[21.524,70.471],
 type:'hill',seed:293,units:{planScale:3,vScale:4},size:{rx:95,ry:72},hill:{h:25,cliff:8,skirt:40},guard:'guard-rajput',cannons:false,people:5,flag:false,
 rockSteps:[{only:'today',from:[24,20],to:[37,20],well:[41,20],w:4,depth:4,radius:3}],
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1460',year:'c. 1460',label:'Fifteenth-century interpretation',short:'Phase uncertain',lens:'engraving',summary:'An illustrative garrison associated with the fort’s fifteenth-century history.',basis:'Gujarat Tourism describes an inscription of Mandalika III dated 1450 and stepwells at the fort.',conjecture:'The exact 1460 ownership and architecture, stepwells, gateways, rock, walls, dimensions and guard appearance are not reconstructed. The later cannon is not shown.',sources:['UPA-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'Gujarat Tourism describes the fort, stepwells, caves and later structures.',conjecture:'The small rock-cut stair and shaft are schematic and not to scale; their position and orientation are inferred. Navghan Kuvo, caves, fort plan and current conditions are not surveyed.',sources:['UPA-01']}],
 pois:[{id:'stepwell',at:[20,25],title:'Adi Kadi Vav',text:'The Junagadh district describes a rock-cut stair descending to a well shaft. The present-day scene includes a small illustrative stair and shaft; their scale, position and orientation are inferred. The 1460 scene omits them because the exact construction date is uncertain.',source:'https://junagadh.nic.in/tourist-place/adi-kadi-vav/'},
 {id:'well',at:[-30,15],title:'Navghan Kuvo',text:'The tourism account describes a deep well and spiral staircase. They are not reconstructed in this scene.',source:up},
 {id:'cannon',at:[0,-20],title:'A later cannon',text:'The tourism account describes a cannon brought from Diu after a mid-sixteenth-century siege. It is not included in the earlier scene.',source:up}]
});
export const pavagadh=makeFort({
 id:'pavagadh',name:'Champaner–Pavagadh',native:{text:'Pavagadh',lang:'en',script:'latn'},region:'Panchmahal · Gujarat',typeLabel:'Hill fortress · inferred prototype',coords:[22.486,73.530],
 type:'hill',seed:307,units:{planScale:3,vScale:4},size:{rx:100,ry:75},hill:{h:38,cliff:11,skirt:45},guard:'guard-deccan',people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1500',year:'c. 1500',label:'Gujarat Sultanate interpretation',short:'Sultanate period',lens:'engraving',summary:'An illustrative garrison during the Champaner capital period.',basis:'UNESCO describes the 1484 conquest and the subsequent Champaner capital, together with older hill fortifications and water systems.',conjecture:'The hill, city, actual fortifications, temples, mosque, water systems, dimensions and guard appearance are inferred or unmodeled.',sources:['PAV-01']},
 {id:'today',year:'Today',label:'Archaeological landscape',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'UNESCO describes a larger landscape of fortifications, settlements, sacred sites and waterworks.',conjecture:'This single generated hill does not reconstruct the archaeological park, its living sites or current conditions.',sources:['PAV-01']}],
 pois:[{id:'capital',at:[35,20],title:'Champaner capital',text:'UNESCO describes the Gujarat Sultanate’s capital at the foot of Pavagadh after the 1484 conquest. The city is not modeled.',source:pav},
 {id:'water',at:[-30,15],title:'Water installations',text:'UNESCO identifies water-retaining systems across the archaeological landscape. They are not reconstructed here.',source:pav},
 {id:'shrine',at:[0,-20],title:'A living shrine',text:'UNESCO identifies the Kalikamata Temple atop Pavagadh as a living shrine. It is not modeled in this scene.',source:pav}]
});
