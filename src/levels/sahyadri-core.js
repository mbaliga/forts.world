// Schematic prototypes of two original catalogue sites. No plan, placement or terrain is surveyed.
import {makeFort} from './gen.js';
const t='https://maharashtratourism.gov.in/fort/torna/';
const s='https://maharashtratourism.gov.in/fort/sinhagad/';
export const torna=makeFort({
 id:'torna',name:'Torna (Prachandagad)',native:{text:'तोरणा',lang:'mr',script:'deva'},region:'Pune · Maharashtra',typeLabel:'Hill fort · inferred prototype',coords:[18.276,73.622],
 type:'hill',seed:61,units:{planScale:4,vScale:10},size:{rx:148,ry:85,rot:12},hill:{h:50,cliff:12,skirt:60},bastionStep:34,people:9,
 gates:[{a:70,name:'Bini Darwaza · position inferred',main:true}],
 buildings:[{name:'Garrison shelter · inferred',x:-10,y:-5,w:15,d:8,kind:'barracks'}],
 eras:[{id:'1646',year:'c. 1646',label:'Early Maratha occupation',short:'Early Maratha',lens:'engraving',summary:'An illustrative early Maratha garrison occupies the hill fort.',basis:'Maharashtra gazetteer histories place Shivaji’s capture of Torna around 1646.',conjecture:'The outline, gate position, dimensions, structures, vegetation, troop numbers and coordinates are inferred; this is not a surveyed phase plan.',sources:['TOR-01']},
 {id:'today',year:'Today',label:'Hill fort remains',short:'Remains',lens:'none',summary:'Explore an illustrative reconstruction of the hill fort.',basis:'Maharashtra Tourism describes the fort and Bini Darwaza.',conjecture:'Present condition, terrain and access have not been surveyed in this model.',sources:['TOR-01']}],
 pois:[{id:'bini',at:[55,12],title:'Bini Darwaza',text:'The tourism description identifies Bini Darwaza as an entrance. Its position and appearance here are inferred.',ev:'documented',source:t},
 {id:'rajgad',at:[-45,15],title:'Neighbouring forts',text:'Torna is part of a wider Sahyadri landscape that includes Rajgad. The two local scenes are not yet joined by a walkable route.',ev:'documented',source:t},
 {id:'occupation',at:[0,20],title:'An early occupation',text:'Gazetteer histories place the capture around 1646. The layout and garrison here are hypothetical.',ev:'documented',source:t}]
});
export const sinhagad=makeFort({
 id:'sinhagad',name:'Sinhagad (Kondhana)',native:{text:'सिंहगड',lang:'mr',script:'deva'},region:'Pune · Maharashtra',typeLabel:'Hill fort · inferred prototype',coords:[18.366,73.755],
 type:'hill',seed:67,units:{planScale:4,vScale:10},size:{rx:135,ry:100,rot:-12},hill:{h:52,cliff:13,skirt:60},bastionStep:35,people:10,
 gates:[{a:60,name:'Pune Darwaza · position inferred',main:true},{a:215,name:'Kalyan Darwaza · position inferred'}],
 buildings:[{name:'Garrison shelter · inferred',x:-12,y:-10,w:16,d:8,kind:'barracks'}],
 eras:[{id:'1670',year:'1670',label:'After the capture of Kondhana',short:'After the capture',lens:'engraving',summary:'A schematic Maratha garrison after the 1670 capture.',basis:'Maharashtra Tourism describes the 1670 campaign and the capture led by Tanaji Malusare.',conjecture:'This is not a reconstruction of the battle. Gates, walls, dimensions, structures, soldiers and exact positions are inferred.',sources:['SIN-01']},
 {id:'today',year:'Today',label:'Hill fort remains',short:'Remains',lens:'none',summary:'Explore an illustrative reconstruction of the fort.',basis:'Maharashtra Tourism identifies Pune and Kalyan Darwaza among the approaches.',conjecture:'The map and model are schematic and do not establish present condition or safe access.',sources:['SIN-01']}],
 pois:[{id:'pune',at:[45,35],title:'Pune Darwaza',text:'The two named gates include Pune Darwaza. Its placement and structure here are inferred.',ev:'documented',source:s},
 {id:'kalyan',at:[-45,-35],title:'Kalyan Darwaza',text:'Kalyan Darwaza is another named approach. Its modeled position and appearance are inferred.',ev:'documented',source:s},
 {id:'capture',at:[0,22],title:'The 1670 capture',text:'Tanaji Malusare led the 1670 attack. This scene portrays an illustrative later garrison rather than the battle.',ev:'documented',source:s}]
});
