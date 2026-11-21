// Illustrative prototypes, not surveys of the forts or their hill terrain.
import {makeFort} from './gen.js';
const din='https://dindigul.nic.in/history/';
const san='https://salem.nic.in/tourist-place/sangagiri-fort/';
export const dindigul=makeFort({
 id:'dindigul',name:'Dindigul Rock Fort',native:{text:'Dindigul',lang:'en',script:'latn'},region:'Dindigul · Tamil Nadu',typeLabel:'Rock fort · inferred prototype',coords:[10.363,77.963],
 type:'hill',seed:263,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:36,cliff:11,skirt:45},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1760',year:'c. 1760',label:'Mysore period',short:'Mysore period',lens:'engraving',summary:'An illustrative garrison during the Mysore period.',basis:'Dindigul district dates the hill fort to 1605 and describes Mysore’s conquest in 1742 and Hyder Ali’s arrival in 1755.',conjecture:'The rock, lower fort, walls, gates, buildings, dimensions and guard appearance are inferred or unmodeled; a siege is not simulated.',sources:['DIN-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic rock fort.',basis:'The district describes fortifications on and below the rock.',conjecture:'The actual rock, lower fort, town and present condition are not surveyed.',sources:['DIN-01']}],
 pois:[{id:'fort',at:[35,20],title:'Hill and lower fort',text:'The district attributes both a hill fort and a lower fort to Muthukrisna Nayakka. The lower fort is not modeled.',source:din},
 {id:'mysore',at:[-30,15],title:'Mysore period',text:'The district describes conquest in 1742. The campaign’s earlier 1736 phase boundary is provisional and needs reconciliation.',source:din},
 {id:'british',at:[0,-20],title:'British control',text:'The district distinguishes British control in 1790 from formal cession in 1792; the campaign currently uses the latter boundary.',source:din}]
});
export const sankagiri=makeFort({
 id:'sankagiri',name:'Sankagiri Fort',native:{text:'Sankagiri',lang:'en',script:'latn'},region:'Salem · Tamil Nadu',typeLabel:'Hill fort · inferred prototype',coords:[11.471,77.866],
 type:'hill',seed:269,units:{planScale:3,vScale:4},size:{rx:100,ry:75},hill:{h:36,cliff:10,skirt:45},innerWall:{k:0.62,h:4,gate:60},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1785',year:'c. 1785',label:'Mysore interpretation',short:'Mysore period',lens:'engraving',summary:'An illustrative garrison during the later Mysore period.',basis:'Salem district describes the fort as a military base associated with Tipu Sultan and later British use.',conjecture:'The precise 1785 phase, hill, layered walls, buildings, temples, dimensions and guard appearance are inferred or unmodeled.',sources:['SAN-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'Salem district describes fortification walls, temples and other structures.',conjecture:'The generated hill and two wall rings are not the actual site; buildings and present condition are not surveyed.',sources:['SAN-01']}],
 pois:[{id:'walls',at:[35,20],title:'Fortification walls',text:'The district describes multiple walls, including later British work. The two rings here do not reconstruct their phases or positions.',source:san},
 {id:'temples',at:[-30,15],title:'Temples and other structures',text:'The district lists temples, mosques, a granary and other features. Their construction dates and positions are not modeled here.',source:san},
 {id:'approach',at:[0,-20],title:'A steep hill',text:'The district describes steep sides and a principal climbable approach. The generated path and terrain are illustrative.',source:san}]
});
