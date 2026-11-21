// Illustrative scenes: no geographic or architectural survey is implied.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const banda='https://banda.nic.in/tourist-place/kalinjar-fort/';
const history='https://banda.nic.in/history/';
const orchha='https://whc.unesco.org/en/tentativelists/6404/';
const niwari='https://niwari.nic.in/en/tourist-place/orchha/';
export const kalinjar=makeFort({
 id:'kalinjar',name:'Kalinjar Fort',native:{text:'Kalinjar',lang:'en',script:'latn'},region:'Banda · Uttar Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[25.006,80.485],
 type:'hill',seed:443,units:{planScale:4,vScale:5},size:{rx:130,ry:95},hill:{h:40,cliff:14,skirt:45},guardByEra:{'1185':'guard-rajput','1580':'guard-mughal'},people:7,flag:false,cannons:false,trees:14,slopeTrees:70,
 gates:[{a:65,name:'Alamgir Darwaza · bearing inferred',main:true},{a:48,name:'Ganesh Darwaza · bearing inferred'},{a:31,name:'Chandi Darwaza · bearing inferred'},{a:14,name:'Budh Budr Darwaza · bearing inferred'},{a:245,name:'Hanuman Darwaza · bearing inferred'},{a:228,name:'Lal Darwaza · bearing inferred'},{a:211,name:'Bara Darwaza · bearing inferred'}],
 gatesByEra:{'1185':[{a:65,name:'Approach gate · position unknown',main:true}],'1580':[{a:65,name:'Approach gate · position unknown',main:true}]},buildings:[],
 extraBuild:(W,{era,H})=>{
  if(era!=='today') return;
  const now=true, later=true;
  W.temple({x:8,y:5,w:11,h:15,style:'nagara',base:H,color:'stone',mandapa:{d:7,w:12,h:4,roof:'stepped'}});W.zone(rectPts(8,5,19,24,0),'Neelkanth Mahadev · placement approximate');
  if(later){
   const sites=[[-26,20,14,10,'Chaube Mahal'],[24,20,14,10,'Ranivas'],[-26,-20,13,10,'Shahi Masjid'],[24,-20,13,10,'Rathore Mahal']];
   for(const [x,y,w,d,name] of sites){W.building({rect:[x,y,w,d,0],base:H,storeys:1,storeyH:3.4,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.3,w:0.9,h:1.5},kind:'palace',name:`${name} · approximate location`});W.zone(rectPts(x,y,w+5,d+5,0),`${name} · schematic`);}
   for(const [x,y,n] of [[-42,42,'Patal Ganga'],[44,-40,'Pandava Kund'],[-43,-38,'Kotitirtha'],[46,43,'Bhairav Kund']]){W.tank({poly:rectPts(x,y,12,9,0),waterDepth:1.3,tiers:3,color:'stone'});W.zone(rectPts(x,y,12,9,0),`${n} · approximate water feature`);}
  }
  const basti=[[-145,-40],[-95,-40],[-95,35],[-145,35]];W.houses({poly:basti,count:now?20:later?12:6,size:[5,8],h:now?[1,2]:[1,1],roof:'flat',seed:743,spacing:2.5});W.zone(basti,'Jujhotia Basti and fort approach · illustrative settlement');
 },
 eras:[{id:'1185',until:1202,year:'c. 1185',label:'Chandela interpretation',short:'Chandela',lens:'engraving',summary:'An illustrative hilltop settlement during the Chandela period.',basis:'Banda district identifies Kalinjar as a Chandela fort and discusses ruler Paramardideva in the late twelfth century.',conjecture:'The site plan, architecture, exact 1185 garrison, temple placement, dimensions and terrain are inferred or unmodeled. Generic figures do not establish historical dress.',sources:['KAL-01','KAL-02']},
 {id:'1580',until:1581,year:'c. 1580',label:'Mughal-period interpretation',short:'Mughal period',lens:'engraving',summary:'An illustrative fort after its reported capture by Akbar.',basis:'Banda district’s fort account records Akbar’s capture in 1569.',conjecture:'The 1580 plan, architectural changes, garrison and surroundings are not reconstructed; figures are placeholders. The earlier scene does not represent this later period.',sources:['KAL-01']},
 {id:'today',year:'Today',label:'Fort, temples and water sites',short:'Present',lens:'none',summary:'Explore a monument-rich fort prototype with seven documented gates and named sacred water sites.',basis:'Banda district names Neelkanth Mahadev, Sita Sej, Patal Ganga, Pandava Kund, Budha-Buddi Tal, Bhairav Kund, Kotitirtha, Chaube Mahal, Jujhotia Basti, Shahi Masjid, Ranivas and Rathore Mahal. CCRT lists Alamgir, Ganesh, Chandi, Budh Budr, Hanuman, Lal and Bara Darwazas and gives approximate overall dimensions of 2 km east–west by 1 km north–south.',conjecture:'Gate bearings and footprints are schematic; listed monuments, hill terrain, water features and basti have not been georeferenced to an authoritative site plan. Scene proportions are not a measured 2-by-1 km model.',sources:['KAL-01','KAL-02','KAL-03','KAL-04']}],
 pois:[{id:'temple',at:[35,20],title:'Neelkanth Temple',text:'Banda district identifies Neelkanth Mahadev at Kalinjar. The temple’s architecture and location are not reconstructed.',source:banda},
 {id:'water',at:[-30,15],title:'Fort tanks and sacred water',text:'Banda district lists Sita Sej, Patal Ganga, Pandava Kund, Budha-Buddi Tal, Bhairav Kund and Kotitirtha. Markers and tank cues in this scene are approximate.',source:banda},
 {id:'phases',at:[0,-20],title:'Changing control',text:'District records describe Chandela rule, later captures and Akbar’s 1569 capture. The scene’s two historical snapshots do not reconstruct every intervening phase.',source:history}]
});
export const orchhaFort=makeFort({
 id:'orchha',name:'Orchha',native:{text:'Orchha',lang:'en',script:'latn'},region:'Niwari · Madhya Pradesh',typeLabel:'Riverside settlement · inferred prototype',coords:[25.351,78.640],
 type:'river',seed:449,units:{planScale:4,vScale:4},size:{rx:100,ry:75},shore:{a:180,dist:125},isthmusW:25,margin:75,guard:'guard-rajput',people:6,flag:false,boats:[],
 gates:[{a:180,name:'Betwa-side fort approach · bearing inferred',main:true}],buildings:[],trees:10,
 extraBuild:(W,{era,H})=>{
  const now=era==='today', old=era==='1610';
  const palaces=[[-20,14,17,16,'Raja Mahal'],[18,14,18,17,'Jahangir Mahal'],[-1,-18,15,14,'Rani Mahal / Ram Raja Temple']];
  for(const [x,y,w,d,name] of palaces){W.building({rect:[x,y,w,d,0],base:H,storeys:3,storeyH:3.4,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.2,w:0.9,h:1.6},kind:'palace',name:`${name} · schematic courtyard block`});W.zone(rectPts(x,y,w+7,d+7,0),`${name} · position approximate`);}
  W.temple({x:-1,y:-18,w:7,h:11,style:'nagara',base:H,color:'stone',mandapa:{d:5,w:8,h:3,roof:'flat'}});
  const blocks=[[[-145,-70],[-90,-70],[-90,-22],[-145,-22]],[[-145,25],[-92,25],[-92,75],[-145,75]],[[-88,-115],[-48,-115],[-48,-82],[-88,-82]]];
  for(const [i,poly] of blocks.entries()){W.houses({poly,count:now?24:old?18:8,size:[5,8],h:now?[1,3]:[1,2],roof:'flat',seed:749+i,spacing:2.5});W.zone(poly,`Orchha living historic town · illustrative block ${i+1}`);}
  const channels=Array.from({length:7},(_,i)=>{const x=-90+i*27;return rectPts(x,112,9,118,8);});
  channels.forEach((poly,i)=>{W.water({poly,level:0,color:'#527a77'});W.zone(poly,`Satdhara Betwa channel ${i+1} · illustrative`);});
  W.zone(rectPts(0,0,76,70,0),'Orchha fort and palace ensemble · schematic');
 },
 eras:[{id:'1610',year:'c. 1610',label:'Bundela capital and palace ensemble',short:'Bir Singh Deo period',lens:'engraving',summary:'A fortified settlement with the palace group and town arranged around the Betwa landscape.',basis:'UNESCO’s tentative-list dossier describes Orchha as a living town, its Betwa/forest relationship, and Raja Mahal, Jahangir Mahal and Rani Mahal (now Ram Raja Temple). It dates Bir Singh Deo’s reign to 1605–1627.',conjecture:'Palace blocks, channels, fort plan, settlement geometry and access are schematic; no site plan or current map has been aligned to these coordinates.',sources:['ORC-01','ORC-03']},
 {id:'today',year:'Today',label:'Living historic town',short:'Present',lens:'none',summary:'Explore the monument ensemble, town blocks and seven Betwa channel cues.',basis:'Niwari district states that the Betwa splits into seven channels at Orchha; UNESCO describes the town as a living cultural landscape where historic and modern fabric coexist.',conjecture:'The seven water strips are illustrative and not hydrographically mapped. Palace footprints, road network, town density and current condition are not reconstructed.',sources:['ORC-01','ORC-02','ORC-03']}],
 pois:[{id:'betwa',at:[35,20],title:'Betwa River and Satdhara',text:'Niwari district describes seven Betwa channels at Orchha. The scene represents the count, but the geometry, seasonality and shorelines are not mapped.',source:niwari},
 {id:'palace',at:[-30,15],title:'Raja Mahal, Jahangir Mahal and Rani Mahal',text:'UNESCO describes the three palace monuments as an ensemble, with Rani Mahal functioning as Ram Raja Temple today. The scene blocks are schematic, not measured plans.',source:orchha},
 {id:'founding',at:[0,-20],title:'Bundela capital',text:'UNESCO describes Orchha’s sixteenth-century foundation and Bir Singh Deo’s rule from 1605 to 1627. This scene is illustrative.',source:orchha}]
});
