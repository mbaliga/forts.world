// Schematic scene geometry; UNESCO's listed coordinates and fort plans require reconciliation.
import {makeFort} from './gen.js';
const whc='https://whc.unesco.org/en/tentativelists/6675/';
export function buildSonakandaPlatform(W,era){
 if(era !== 'today') return;
 // At 3 m per plan unit and 4 m per height unit, use UNESCO's nominal diameter and height.
 const x=22,y=-32,r=21.75/6,h=6.09/4,g=W.ground(x,y);
 W.bastion({at:[x,y],r,h,batter:0,parapet:false,merlon:false,band:false,color:'wall'});
 W.stairs({from:[x,y-r-5,g],to:[x,y-r+0.5,g+h],w:2,color:'stone',apron:false});
}
const shared={type:'hill',units:{planScale:3,vScale:4},hill:{h:5,cliff:2,skirt:16},guard:'guard-mughal',people:5,flag:false,
 palette:{wall:'#a76e58',wallTop:'#bc8970',stone:'#a77961',dry:'#a2a07b'},
 gates:[{a:70,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:10,d:6,kind:'barracks'}]};
export const sonakanda=makeFort({...shared,id:'sonakanda',name:'Sonakanda Fort',native:{text:'Sonakanda',lang:'en',script:'latn'},region:'Narayanganj · Bangladesh',typeLabel:'River fort · inferred prototype',coords:[23.616,90.511],seed:547,shape:'square',size:{rx:65,ry:48},
 extraBuild:(W,{era})=>buildSonakandaPlatform(W,era),
 eras:[{id:'1670',until:1671,year:'c. 1670',label:'Mughal river defence',short:'Mughal period',lens:'engraving',summary:'An illustrative garrison.',basis:'UNESCO’s tentative-list account attributes Sonakanda to Mir Jumla around 1660–1663 as part of a river-defence system.',conjecture:'The 1670 fort plan, platform phase, river, garrison, access and buildings are not reconstructed; troop appearance is illustrative.',sources:['SON-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic fort and artillery platform.',basis:'UNESCO describes a quadrangular fort with a raised circular artillery platform.',conjecture:'The fort plan, river, platform position, staircase and details, surroundings and condition are not surveyed. The platform is a simplified cue.',sources:['SON-01']}],
 pois:[{id:'platform',at:[22,-20],title:'Artillery platform',text:'UNESCO gives the outer platform diameter as 21.75 m and height as 6.09 m. The present-day cue uses those nominal dimensions, while its position, steps and details are inferred. Its 1670 phase needs research.',source:whc},
 {id:'river',at:[-25,10],title:'Shitalakhya setting',text:'UNESCO describes the fort’s former river setting. The river and the other forts are not modeled or connected.',source:whc},
 {id:'location',at:[0,15],title:'Location research',text:'UNESCO lists approximately 23.60703° N, 90.51225° E, different from the preserved approximate catalogue marker. Reconciliation is needed before terrain work.',source:whc}]
});
export const hajiganj=makeFort({...shared,id:'hajiganj',name:'Hajiganj Fort',native:{text:'Hajiganj',lang:'en',script:'latn'},region:'Narayanganj · Bangladesh',typeLabel:'River fort · inferred prototype',coords:[23.627,90.519],seed:557,shape:'hexagon',size:{rx:75,ry:60},bastionAngles:[0,60,120,180,240,300],
 eras:[{id:'1620',until:1621,year:'c. 1620',label:'Mughal river defence',short:'Mughal period',lens:'engraving',summary:'An illustrative garrison.',basis:'UNESCO’s tentative-list account dates Hajiganj around 1610 and describes its role as a Mughal base.',conjecture:'The precise 1620 plan, river, buildings and garrison are unverified. The regular hexagonal cue and placeholder figures are not a survey.',sources:['HAJ-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic fort.',basis:'UNESCO describes an asymmetric six-sided fort with six bastions, one gateway and an artillery platform.',conjecture:'The actual asymmetric plan, bastion sizes, gate, platform, river and condition are not reconstructed; the regular outline and bastions are illustrative.',sources:['HAJ-01']}],
 pois:[{id:'plan',at:[35,20],title:'Fortifications',text:'UNESCO describes an asymmetric hexagonal plan and six bastions. This regular outline and equal-sized bastions do not reproduce their surveyed positions or sizes.',source:whc},
 {id:'river',at:[-25,10],title:'River network',text:'UNESCO identifies the historic Shitalakhya and Buriganga confluence and explains that the river shifted. Those channels are not modeled.',source:whc},
 {id:'location',at:[0,-20],title:'Location research',text:'UNESCO lists approximately 23.63351° N, 90.51302° E, different from the preserved approximate catalogue marker. Reconciliation is needed before terrain work.',source:whc}]
});
