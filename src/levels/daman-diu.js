// Illustrative coastal scenes; the real shorelines, forts and towns are not surveyed.
import {makeFort} from './gen.js';
const diuSource='https://diu.gov.in/tourist-place/forts/';
const dam='https://daman.nic.in/citizen_charters/2014/Citizen%20Charter%20-%20Tourism%20-%2012122014.pdf';
export const diu=makeFort({
 id:'diu',name:'Diu Fort',native:{text:'Diu Fort',lang:'en',script:'latn'},region:'Diu · India',typeLabel:'Coastal fort · inferred prototype',coords:[20.715,70.995],
 type:'coast',seed:281,units:{planScale:3,vScale:4},size:{rx:95,ry:72},shore:{a:0,dist:145},isthmusW:30,guard:'guard-portuguese',people:6,flag:false,
 gates:[{a:0,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-15,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1550',year:'c. 1550',label:'Portuguese period',short:'Portuguese period',lens:'engraving',summary:'An illustrative garrison following the fort’s rebuilding.',basis:'Diu district dates the fort to 1535 and a rebuilding to 1546.',conjecture:'The island, canal, actual fort layout, buildings, dimensions and guard appearance are not reconstructed. Panikotha is not modeled.',sources:['DIU-01','DIU-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic coastal fort.',basis:'The district describes Diu’s fort, canal and surrounding sea.',conjecture:'The actual island coastline, canal, fort plan and present condition are not surveyed.',sources:['DIU-01']}],
 pois:[{id:'canal',at:[25,18],title:'Sea and canal',text:'The district describes sea on three sides and a canal on the fourth. This shoreline and connection are illustrative.',source:diuSource},
 {id:'panikotha',at:[-25,17],title:'Panikotha',text:'A separate fortified structure stood at the creek mouth. It is not modeled in this scene.',source:'https://diu.gov.in/tourist-place/the-fortress-of-panikotha/'},
 {id:'history',at:[0,27],title:'Construction and rebuilding',text:'The district dates Diu’s fort to 1535 and its rebuilding to 1546. Exact architectural phases are not represented here.',source:diuSource}]
});
export const motiDaman=makeFort({
 id:'moti-daman',name:'Moti Daman Fort',native:{text:'Moti Daman',lang:'en',script:'latn'},region:'Daman · India',typeLabel:'Coastal fort · inferred prototype',coords:[20.413,72.833],
 type:'coast',seed:283,units:{planScale:3,vScale:4},size:{rx:95,ry:70},shore:{a:0,dist:145},isthmusW:30,guard:'guard-portuguese',people:6,flag:false,
 gates:[{a:0,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-15,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1605',year:'c. 1605',label:'Portuguese period',short:'Portuguese period',lens:'engraving',summary:'An illustrative garrison in the early seventeenth century.',basis:'The Daman and Diu tourism charter dates the fort to 1559 and describes its moat, bastions and gateways.',conjecture:'The river mouth, sea, moat, settlement, buildings, actual layout and guard appearance are not reconstructed; the present features are not assumed unchanged in 1605.',sources:['DAM-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic coastal fort.',basis:'The tourism charter describes the fort and settlement.',conjecture:'The river, moat, settlement and actual fort plan are not surveyed or modeled.',sources:['DAM-01']}],
 pois:[{id:'moat',at:[25,18],title:'Moat and river',text:'The tourism charter describes a landward moat linked to the river and sea. This scene does not map it.',source:dam},
 {id:'church',at:[-25,17],title:'Church of Bom Jesus',text:'The charter dates the church’s present form to 1603. Its architecture and location are not modeled.',source:dam},
 {id:'settlement',at:[0,27],title:'Fortified settlement',text:'The charter describes the fort encircling a settlement. The town and actual walls are not reconstructed.',source:dam}]
});
