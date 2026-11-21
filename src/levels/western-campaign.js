// The modelled outlines, terrain, structures and positions are schematic, not surveyed.
import {makeFort} from './gen.js';
const ps='https://maharashtratourism.gov.in/fort/purandar/';
const vs='https://maharashtratourism.gov.in/fort/vasai/';
export const purandar=makeFort({
 id:'purandar',name:'Purandar',native:{text:'पुरंदर',lang:'mr',script:'deva'},region:'Pune · Maharashtra',typeLabel:'Hill fort · inferred prototype',coords:[18.282,73.974],
 type:'hill',seed:71,units:{planScale:4,vScale:10},size:{rx:145,ry:96,rot:10},hill:{h:55,cliff:13,skirt:65},bastionStep:35,people:8,guard:'guard-mughal',flag:false,
 gates:[{a:70,name:'Delhi Darwaza · position inferred',main:true}],
 buildings:[{name:'Garrison shelter · inferred',x:-15,y:-10,w:16,d:8,kind:'barracks'}],
 eras:[{id:'1665',year:'1665',label:'After the siege and treaty',short:'After the treaty',lens:'engraving',summary:'An illustrative Mughal garrison after the 1665 siege and treaty.',basis:'Maharashtra Tourism describes the siege, treaty and transfer to the Mughals.',conjecture:'This is not a siege simulation. Terrain, walls, gate, building, troop numbers, clothing and local coordinates are inferred.',sources:['PUR-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort reconstruction.',basis:'Maharashtra Tourism describes Delhi Darwaza and the fort complex.',conjecture:'The model does not establish a survey, present condition, or safe access.',sources:['PUR-01']}],
 pois:[{id:'delhi',at:[55,30],title:'Delhi Darwaza',text:'Maharashtra Tourism identifies Delhi Darwaza as an entrance. Its depicted placement and form are inferred.',ev:'documented',source:ps},
 {id:'vajragad',at:[-50,15],title:'Vajragad',text:'The source describes Vajragad as part of the wider defensive setting. It is not modeled as a separate hill here.',ev:'documented',source:ps},
 {id:'treaty',at:[0,25],title:'The 1665 siege and treaty',text:'The fort was besieged and passed to the Mughals in 1665. The garrison shown is illustrative.',ev:'documented',source:ps}]
});
export const vasai=makeFort({
 id:'vasai',name:'Vasai (Bassein)',native:{text:'वसई',lang:'mr',script:'deva'},region:'Palghar · Maharashtra',typeLabel:'Coastal fortified town · inferred prototype',coords:[19.330,72.815],
 type:'coast',seed:73,units:{planScale:5,vScale:3},size:{rx:150,ry:108,rot:10},margin:95,shore:{a:0,dist:150},isthmusW:35,bastionStep:35,people:10,guard:'guard-portuguese',flag:false,
 gates:[{a:0,name:'Town gate · position inferred',main:true}],
 buildings:[{name:'Church remains · schematic',x:-35,y:10,w:25,d:12,kind:'building'},{name:'Garrison shelter · inferred',x:20,y:-15,w:15,d:8,kind:'barracks'}],
 eras:[{id:'1738',year:'1738',label:'Portuguese fortified town',short:'Portuguese period',lens:'engraving',summary:'An illustrative Portuguese-period coastal settlement before the 1739 capture.',basis:'Maharashtra Tourism describes the fort as a Portuguese centre until its capture in 1739.',conjecture:'The walls and coast are heavily compressed, with an invented outline; gates, church form, buildings, troop numbers, clothing and placements are inferred.',sources:['VAS-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic coastal fort reconstruction.',basis:'Maharashtra Tourism describes surviving walls, bastions and church ruins.',conjecture:'This prototype is not a plan or present-condition survey; coast and placements are illustrative.',sources:['VAS-01']}],
 pois:[{id:'walls',at:[-70,12],title:'Fortifications',text:'The tourism account describes walls and bastions. Their number, geometry and positions in this compressed model are inferred.',ev:'documented',source:vs},
 {id:'church',at:[-35,28],title:'Church remains',text:'The source describes churches within the fortified town. This generic structure is not a measured reconstruction of a particular church.',ev:'documented',source:vs},
 {id:'1739',at:[28,25],title:'Capture in 1739',text:'The Marathas captured Vasai in 1739. The 1738 scene is illustrative and does not simulate the siege.',ev:'documented',source:vs}]
});
