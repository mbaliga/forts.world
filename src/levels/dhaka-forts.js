// Schematic scenes; monument positions, water courses and full plans have not been surveyed here.
import {makeFort} from './gen.js';
const whc='https://whc.unesco.org/en/tentativelists/6675/';
const lalSource='https://whc.unesco.org/document/182024';
export function buildIdrakpurPlatform(W,era){
 if(era !== 'today') return;
 // Nominal diameter follows the cited 32.9 m at 3 m per plan unit; location and height are inferred.
 const x=22,y=-32,r=32.9/6,ground=W.ground(x,y);
 W.bastion({at:[x,y],r,h:3,batter:0,parapet:false,merlon:false,band:false,color:'wall'});
 W.stairs({from:[x,y-r-6,ground],to:[x,y-r+0.5,ground+3],w:2,color:'stone',apron:false});
}
export const idrakpur=makeFort({
 id:'idrakpur',name:'Idrakpur Fort',native:{text:'Idrakpur',lang:'en',script:'latn'},region:'Munshiganj · Bangladesh',typeLabel:'River fort · inferred prototype',coords:[23.543,90.509],
 type:'hill',shape:'square',seed:523,units:{planScale:3,vScale:4},size:{rx:65,ry:48},hill:{h:5,cliff:2,skirt:16},guard:'guard-mughal',people:5,flag:false,
 palette:{wall:'#a66e57',wallTop:'#bd886e',stone:'#a97861',dry:'#999a72'},
 gates:[{a:70,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:10,d:6,kind:'barracks'}],
 extraBuild:(W,{era})=>buildIdrakpurPlatform(W,era),
 eras:[{id:'1670',until:1671,year:'c. 1670',label:'Mughal river defence',short:'Mughal period',lens:'engraving',summary:'An illustrative river-defence garrison.',basis:'UNESCO’s tentative-list account attributes Idrakpur to Mir Jumla around 1660–1663 and describes its role in a river-defence system.',conjecture:'The 1670 plan, platform construction phase, river, approach, garrison and buildings are not reconstructed; troop appearance is illustrative.',sources:['IDR-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic fort with an illustrative platform.',basis:'UNESCO describes a divided fort, circular platform and a river that has shifted away.',conjecture:'The full plan, walls, platform location and height, residence buildings, river and present condition are not reconstructed; the circular platform is a simplified cue.',sources:['IDR-01']}],
 pois:[{id:'platform',at:[22,-20],title:'Circular artillery platform',text:'UNESCO describes a circular platform 32.9 metres in diameter. This present-day model uses that nominal diameter but its placement, height, staircase and details are inferred; it is omitted from the 1670 scene pending phase research.',source:whc},
 {id:'river',at:[-25,10],title:'Ichamati river',text:'UNESCO identifies the fort’s historical riverbank setting and reports the river has shifted away. Neither river course is modeled.',source:whc},
 {id:'location',at:[0,15],title:'Location research',text:'The preserved catalogue marker is approximate. UNESCO’s listed coordinates, approximately 23.54748° N, 90.53411° E, differ from this marker and need reconciliation before terrain is built.',source:whc}]
});
export const lalbagh=makeFort({
 id:'lalbagh',name:'Lalbagh Fort',native:{text:'Lalbagh',lang:'en',script:'latn'},region:'Dhaka · Bangladesh',typeLabel:'Palace fort · inferred prototype',coords:[23.719,90.388],
 type:'hill',shape:'square',seed:541,units:{planScale:4,vScale:4},size:{rx:95,ry:70},hill:{h:5,cliff:2,skirt:18},guard:'guard-mughal',people:6,flag:false,
 palette:{wall:'#a9705e',wallTop:'#bd8a77',stone:'#a67765',dry:'#a4a07d'},
 gates:[{a:65,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1680',until:1681,year:'c. 1680',label:'Construction-period interpretation',short:'Construction',lens:'engraving',summary:'An illustrative scene during construction of the palace fort.',basis:'UNESCO records construction beginning in 1678–79 under Prince Muhammad Azam and continuation under Shaista Khan.',conjecture:'The exact 1680 construction state, buildings, garden, water channels, river, gates and garrison are unknown. This complete generic wall does not represent the actual construction sequence.',sources:['LAL-01','LAL-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic palace-fort enclosure.',basis:'UNESCO describes surviving tomb, mosque, audience hall and garden features.',conjecture:'The actual palace, mosque, tomb, gardens, city, river, layout and current condition are not reconstructed.',sources:['LAL-01','LAL-02']}],
 pois:[{id:'palace',at:[35,20],title:'Palace-fort',text:'UNESCO describes Lalbagh as a palace fort begun under Prince Muhammad Azam. The generated enclosure is not its surveyed plan.',source:lalSource},
 {id:'structures',at:[-30,15],title:'Surviving buildings',text:'UNESCO identifies a tomb, mosque and audience hall. Their forms and placement are not modeled.',source:lalSource},
 {id:'river',at:[0,-20],title:'Buriganga and Dhaka',text:'UNESCO identifies Lalbagh’s relationship to the Buriganga and Dhaka. Neither the river nor the city is modeled.',source:whc}]
});
