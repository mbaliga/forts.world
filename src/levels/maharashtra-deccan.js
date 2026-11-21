// The layouts and terrain are illustrative and not measured reconstructions.
import {makeFort} from './gen.js';
const ahm='https://maharashtratourism.gov.in/fort/ahmednagar/';
const nal='https://maharashtratourism.gov.in/fort/naldurg/';
const gaz='https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/Aurangabad%20District/ch4_nizam.html';
export const ahmednagar=makeFort({
 id:'ahmednagar',name:'Ahmednagar Fort',native:{text:'Ahmednagar',lang:'en',script:'latn'},region:'Ahilyanagar · Maharashtra',typeLabel:'Nizam Shahi oval fort · dimension-constrained blockout',coords:[19.100,74.756],
 // At the existing 3 m horizontal scale this ellipse approximates a 1.7 km
 // perimeter. It constrains size only; the wall is not georeferenced.
 type:'moat',flatGround:true,seed:151,units:{planScale:3,vScale:4},size:{rx:98,ry:82},moatWidth:10,guard:'guard-deccan',people:6,flag:false,
 bastionAngles:Array.from({length:24},(_,i)=>i*15),bastionR:4.2,
 gates:[{a:0,name:'East postern · historical location approximate',main:true},{a:180,name:'West wheeled-traffic gate · historical location approximate'}],
 buildings:[{name:'Malik Ahmad’s palace · 1490–1508; position schematic',x:5,y:6,w:19,d:12,kind:'palace',since:1490}],
 extraBuild:(W,{era,H})=>{if(era==='today'){
  for(const [i,x] of [-28,-10,9,27].entries())W.building({rect:[x,-21,8,5,0],base:H,storeys:1,storeyH:2.6,color:'stone',roof:'flat',windows:false,kind:'building',name:`Freedom-movement detention rooms · 1942–45; location schematic ${i+1}`});
  W.zone([[-34,-27],[34,-27],[34,-13],[-34,-13]],'Detention-room cue · exact internal plan unknown');
 }},
 eras:[{id:'1596',year:'c. 1596',label:'Nizam Shahi stone-fort phase',short:'Nizam Shahi period',lens:'engraving',summary:'An illustrative garrison after the sixteenth-century stone rebuilding.',basis:'Government records place an earlier earthwork around 1490 and stone fortification under Husain Nizam Shah in 1553–65. Historic descriptions report an oval fort, moat, 24 bastions and older east and west entrances.',conjecture:'The ellipse only approximates the reported 1.7 km perimeter; moat width and bastion count follow written records. Perimeter, spacing, nested entrance geometry, palace position and city/water context are not plan-registered.',sources:['AHM-01','AHM-02','AHM-03']},
 {id:'today',year:'Today',label:'Fort and detention history',short:'Present',lens:'none',summary:'Explore the oval fort blockout and a schematic marker for its 1942–45 detention history.',basis:'The state tourism account records use as a high-security prison during the freedom struggle. Historic descriptions report 24 bastions and a moat.',conjecture:'The 1943 entrance alteration, present access, detention-room plan, surroundings and current condition have not been aligned to a current aerial or measured drawing. Historic gates are not a present access plan.',sources:['AHM-01','AHM-02','AHM-03']}],
 pois:[{id:'moat',at:[25,18],title:'Oval fort, 24 bastions and moat',text:'Written descriptions give an oval perimeter of about 1.7 km, 24 bastions and a moat. The ellipse matches only the stated perimeter approximately; no wall or ditch trace is registered.',source:'https://indiacinehub.gov.in/location/ahmednagar-fort'},
 {id:'defence',at:[-25,17],title:'Chand Bibi and the siege',text:'The Maharashtra Gazetteer records Chand Bibi’s defense against Mughal forces. This scene does not reconstruct the siege positions.',source:gaz},
 {id:'river',at:[0,28],title:'Sina basin and modern city',text:'Sources place the fort near the Sina River; watercourse, cantonment and modern city fabric are not modeled.',source:ahm}]
});
export const naldurg=makeFort({
 id:'naldurg',name:'Naldurg',native:{text:'Naldurg',lang:'en',script:'latn'},region:'Dharashiv · Maharashtra',typeLabel:'Multi-enclosure fort · survey-informed outline, georeference pending',coords:[17.81712,76.28952],
 type:'land',flatGround:true,baseGround:0.4,baseH:2.5,seed:157,units:{planScale:3,vScale:4},size:{rx:146,ry:110},outline:[[-126,-79],[-81,-114],[22,-116],[104,-77],[137,-16],[116,57],[64,98],[-18,109],[-92,83],[-136,22]],wallPath:[[-126,-79],[-81,-114],[22,-116],[104,-77],[137,-16],[116,57],[64,98],[-18,109],[-92,83],[-136,22]],additionalWalls:[{path:[[-112,73],[-86,54],[-19,59],[15,84],[6,126],[-42,145],[-91,126]],h:5.5,thick:3,label:'Southern enclosure · approximate'},{path:[[-142,-104],[-113,-144],[-58,-152],[-32,-125],[-51,-92],[-112,-82]],h:5.5,thick:3,label:'Naya Qilah · approximate'}],guard:false,people:0,flag:false,margin:65,
 gates:[{a:60,name:'Gate · position inferred',main:true}],buildings:[],
 eras:[{id:'1620',year:'c. 1620',label:'Adil Shahi interpretation',short:'Adil Shahi period',lens:'engraving',summary:'Explore the mapped enclosure groups and their river gorge setting.',basis:'A measured 2013 architectural survey distinguishes the main fort, Naya Qilah, southern enclosure, Bori gorge, dam and Pani Mahal; state tourism dates the palace on the dam to 1613.',conjecture:'Fort-wall paths are approximate redrawings of the published plan and are not georeferenced. Gorge relief, dam profile, water levels, exact palace geometry and guard appearance remain incomplete.',sources:['NAL-01','NAL-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore the mapped enclosure groups.',basis:'The published survey documents the fortifications, dam and Pani Mahal; the state account supplies a construction date.',conjecture:'Current aerial alignment and present condition are not verified. The rendered outline is a tracing for scene layout, not a surveyed boundary.',sources:['NAL-01','NAL-02']}],
 pois:[{id:'water',at:[35,20],title:'Water palace and dam',text:'Maharashtra Tourism dates the water palace built into the Bori River dam to 1613. The current scene identifies the river works but does not yet recreate their measured sections or water system.',source:nal},
 {id:'bastions',at:[-30,15],title:'Named bastions',text:'The state account names several bastions; the positions and forms of those in this generic scene are invented.',source:nal},
 {id:'river',at:[0,-20],title:'Bori River',text:'The district fort overlooks the Bori River, which is not represented in this scene.',source:nal}]
});
