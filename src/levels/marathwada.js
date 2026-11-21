// Documentary scenes; relative positions and most dimensions remain unregistered.
import {makeFort} from './gen.js';
const par='https://dharashiv.maharashtra.gov.in/en/tourist-place/paranda-fort/';
const kan='https://maharashtratourism.gov.in/fort/kandhar/';
export const parenda=makeFort({
 id:'parenda',name:'Paranda Fort',native:{text:'Paranda',lang:'en',script:'latn'},region:'Dharashiv · Maharashtra',typeLabel:'Flatland bhुईकोट fort · evidence-informed blockout',coords:[18.267,75.450],
 type:'moat',flatGround:true,shape:'square',seed:173,units:{planScale:3,vScale:4},size:{rx:90,ry:70},moatWidth:8,guard:'guard-mughal',people:5,flag:false,
 bastionAngles:Array.from({length:26},(_,i)=>i*360/26),bastionR:4.1,
 gates:[{a:90,name:'Northern main entrance · approximate bearing',main:true}],buildings:[],
 extraBuild:(W,{era,H})=>{
  W.building({rect:[0,8,18,12,0],base:H,storeys:1,storeyH:4,color:'stone',roof:'flat',windows:{style:'arch',spacing:3,w:1.1,h:2},kind:'building',name:'Fort mosque · location and footprint schematic'});
  if(era==='today')W.cannon({x:28,y:0,h:H+0.7,dir:0,len:4.8,r:0.5,carriage:false,name:'Large fort cannon · emplacement schematic'});
  W.zone([[-10,0],[10,0],[10,18],[-10,18]],'Interior mosque and building group · placement schematic');
 },
 eras:[{id:'1660',year:'c. 1660',label:'Mughal period',short:'Mughal period',lens:'engraving',summary:'A lowland, moated fort after the district’s recorded 1657 capture.',basis:'The Dharashiv District records the fort’s succession of Nizam Shahi, Adil Shahi and Mughal control. The Maharashtra State Gazetteer describes 26 rounded bastions and a moat; it attributes the fort’s construction to Mahmud Gawan, an attribution requiring corroboration.',conjecture:'The square plan, moat width, northern entrance, bastion spacing, mosque and cannon location are schematic; no measured plan or current aerial has been registered.',sources:['PAR-01','PAR-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic flatland fort with its documented bastion count and moat context.',basis:'The district lists Paranda as a state-protected historic monument. The Maharashtra State Gazetteer describes 26 rounded bastions, a northern entrance, a moat now mostly silted, guard rooms and a mosque.',conjecture:'Current moat condition, wall trace, bastion positions, interior footprints and settlement context remain unregistered.',sources:['PAR-01','PAR-02']}],
 pois:[{id:'capital',at:[35,20],title:'Nizam Shahi centre',text:'The district account describes Paranda as a Nizam Shahi capital after the fall of Ahmednagar; this model does not represent a full town plan.',source:par},
 {id:'bastions',at:[0,32],title:'Twenty-six rounded bastions',text:'The Maharashtra State Gazetteer describes 26 rounded bastions, including two flanking the northern main entrance. Their positions are distributed schematically here.',source:'https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/History%20Part/History_II/chapter_3.pdf'},
 {id:'moat',at:[30,-20],title:'Moat and bridge',text:'The gazetteer describes a protective moat, mostly silted in its account, connected by a bridge at the main entrance. The ring in this scene is illustrative, not a survey.',source:'https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/History%20Part/History_II/chapter_3.pdf'},
 {id:'control',at:[-30,15],title:'Changing control',text:'The district records successive Nizam Shahi and Adil Shahi control and a Mughal capture in 1657. The local structures are not dated in this model.',source:par},
 {id:'plan',at:[0,-20],title:'Reconstruction limits',text:'Bastion count and moat are documentary cues; the actual wall trace, gate geometry, settlement and current condition await survey registration.',source:par}]
});
export const kandhar=makeFort({
 id:'kandhar-nanded',name:'Kandhar Fort',native:{text:'Kandhar',lang:'en',script:'latn'},region:'Nanded · Maharashtra',typeLabel:'Deccan moated fort · area-constrained blockout',coords:[18.880,77.200],
 // District source states ~24 acres, two defensive lines, 32 bastions and a
 // moat ~100 ft wide. The ellipse matches only area; it is not a site trace.
 type:'moat',flatGround:true,seed:179,units:{planScale:3,vScale:4},size:{rx:74,ry:47},moatWidth:10.2,guard:'guard-deccan',people:5,flag:false,
 bastionAngles:Array.from({length:32},(_,i)=>(i+0.5)*360/32),bastionR:4.0,
 additionalWalls:[{path:[[52,0],[48,22],[32,38],[8,46],[-22,40],[-45,22],[-51,-5],[-38,-29],[-12,-39],[18,-36],[42,-20]],h:6,thick:3,label:'Inner defensive circuit · approximate, not survey-traced'}],
 gates:[{a:0,name:'Entrance 1 · direction inferred',main:true},{a:90,name:'Entrance 2 · direction inferred'},{a:180,name:'Entrance 3 · direction inferred'},{a:270,name:'Entrance 4 · direction inferred'}],buildings:[],
 extraBuild:(W,{era,H})=>{
  if(era!=='today')return;
  const items=[[-22,7,16,10,'Queen’s Palace'],[5,8,14,9,'Durbar Hall'],[25,9,11,8,'Baradari'],[-20,-16,15,9,'Jal Mahal'],[5,-18,13,8,'Lal Mahal'],[27,-18,10,7,'Gunpowder store']];
  for(const [x,y,w,d,name] of items){W.building({rect:[x,y,w,d,0],base:H,storeys:1,storeyH:3.2,color:'stone',roof:'flat',windows:{style:'arch',spacing:2.5,w:0.9,h:1.8},kind:'building',name:`${name} · footprint schematic`});W.zone([[x-3,y-3],[x+w+3,y-3],[x+w+3,y+d+3],[x-3,y+d+3]],`${name} · location approximate`);}
  W.cannon({x:40,y:0,h:H+0.7,dir:90,len:5.2,r:0.55,carriage:false,name:'Ambari Cannon · named emplacement; position schematic'});
 },
 eras:[{id:'1600',year:'c. 1600',label:'Rashtrakuta legacy and later Deccan phases',short:'Phase uncertain',lens:'engraving',summary:'An illustrative Deccan fort before its later control transitions.',basis:'The Nanded District states a Rashtrakuta-era origin (758 CE), later completion in stone (941 CE), two defensive lines, 32 bastions, four gates and a wide moat. This era label does not imply every listed building existed by 1600.',conjecture:'Only the reported area is used to constrain the approximate ellipse. Wall courses, inner circuit, moat profile, gates and building chronology remain unregistered; later ownership needs a phase-by-phase record.',sources:['KAN-01','KAN-02']},
 {id:'today',year:'Today',label:'Fort complex and named structures',short:'Remains',lens:'none',summary:'Explore a blockout with the documented double-defense concept, 32 bastions and named interior remains.',basis:'The Nanded District lists the Queen’s Palace, Durbar Hall, Baradari, Jal Mahal, Lal Mahal, granaries, mosque, gardens and Ambari Cannon; it reports approximately 24 acres and four gates.',conjecture:'The ellipse and inner circuit encode broad dimensions and layering only. Gate, bastion and building coordinates, moat cross-section and current condition are not verified against a measured plan or current aerial.',sources:['KAN-01','KAN-02']}],
 pois:[{id:'moat',at:[25,18],title:'Broad moat and two defensive lines',text:'The district records a moat about 100 ft wide and 25 ft deep, plus two defensive lines. The scene scales only the stated width; contours and water level are schematic.',source:'https://nanded.gov.in/en/tourist-place/kandhar-bhuikot-fort/'},
 {id:'phases',at:[-25,17],title:'Changing rulers',text:'The state account describes Rashtrakuta origins and later changes under several dynasties; the exact phase in this scene remains uncertain.',source:kan},
 {id:'gates',at:[0,27],title:'Four entrances and 32 bastions',text:'Nanded District describes four gates and 32 bastions. Their count is represented, but their positions are not mapped.',source:'https://nanded.gov.in/en/tourist-place/kandhar-bhuikot-fort/'}]
});
