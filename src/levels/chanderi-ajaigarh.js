// Schematic hill-fort scenes; city plans and historic phases remain research tasks.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const chanderiSource='https://ashoknagar.nic.in/en/tourist-place/chanderi/';
const ajaigarhSource='https://panna.nic.in/en/tourist-place/ajaygarh-fort/';
const govt='https://www.incredibleindia.gov.in/en/madhya-pradesh/khajuraho/ajaygarh-fort';
export const chanderi=makeFort({
 id:'chanderi',name:'Chanderi Fort',native:{text:'Chanderi',lang:'en',script:'latn'},region:'Ashoknagar · Madhya Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[24.718,78.135],
 type:'hill',seed:467,units:{planScale:4,vScale:4},size:{rx:110,ry:85},hill:{h:26,cliff:10,skirt:32},guardByEra:{'1500':'guard-rajput','1528':'guard-rajput'},people:6,flag:false,trees:14,slopeTrees:80,
 gates:[{a:65,name:'Badal Mahal Gate · location inferred',main:true},{a:245,name:'Kati Ghati approach · direction inferred'}],buildings:[],
 extraBuild:(W,{era,H})=>{
  const now=era==='today', siege=era==='1528';
  const sites=[[-25,18,14,10,'Badal Mahal'],[24,18,13,10,'Rani Mahal'],[-25,-18,13,10,'Purani Kachari'],[24,-18,14,10,'Jama Masjid'],[0,35,10,8,'Khooni Darwaza']];
  for(const [x,y,w,d,name] of sites){W.building({rect:[x,y,w,d,0],base:H,storeys:now?2:1,storeyH:3.3,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.2,w:0.9,h:1.5},kind:name==='Jama Masjid'?'building':'palace',name:`${name} · position schematic`});W.zone(rectPts(x,y,w+5,d+5,0),`${name} · approximate location`);}
  const townA=[[-155,-75],[-105,-75],[-105,-15],[-155,-15]],townB=[[100,-65],[155,-65],[155,8],[100,8]],townC=[[-152,35],[-102,35],[-102,88],[-152,88]];
  for(const [i,poly] of [townA,townB,townC].entries()){W.houses({poly,count:now?24:siege?17:12,size:[5,8],h:now?[1,3]:[1,2],roof:'flat',seed:761+i,spacing:2.5});W.zone(poly,`Chanderi historic settlement · illustrative sector ${i+1}`);}
  W.zone(rectPts(0,0,77,64,0),'Chanderi fort and monument zone · schematic');
 },
 eras:[{id:'1500',until:1527,year:'c. 1500',label:'Malwa Sultanate-period interpretation',short:'Malwa period',lens:'engraving',summary:'A fortified hill town within the fifteenth-century Malwa political landscape.',basis:'Ashoknagar district identifies Chanderi as an historic town shaped by Malwa Sultan and Bundela rule and lists its forts, mosques, palaces, lakes and Jain monuments.',conjecture:'The 1500 town plan, rulers’ specific building campaigns, gates, lake shorelines and structures are not traced. Generic garrison is illustrative.',sources:['CHDR-01','CHDR-02']},
 {id:'1528',until:1529,year:'1528',label:'Siege of Medini Rai',short:'Mughal siege',lens:'engraving',summary:'An illustrative fort-town during Babur’s 1528 siege of Medini Rai’s stronghold.',basis:'ASI-era archaeological reports record Babur’s 1528 attack and the associated johar memorial; the district source describes the town’s Malwa and Bundela layers.',conjecture:'The siege scene, fort plan, gates, city buildings, and destruction are not reconstructed from a dated plan or view.',sources:['CHDR-01','CHDR-03']},
 {id:'today',year:'Today',label:'Fort and living historic town',short:'Present',lens:'none',summary:'Explore Chanderi as a historic town among hills, lakes, temples and fort monuments.',basis:'Ashoknagar district lists Kati Ghati, Badal Mahal, Rani Mahal, Jama Masjid, Purani Kachari and Khooni Darwaza and describes the town’s continuing craft activity.',conjecture:'Named buildings and town sectors are schematic; their footprints, road links, lakes, wall lines and current condition have not been registered to the district attraction map or aerials.',sources:['CHDR-01','CHDR-02','CHDR-03']}],
 pois:[{id:'town',at:[125,-35],title:'Chanderi historic and living town',text:'The district describes Chanderi as a historic town with monuments, Jain sites, lakes, forest and living handloom craft. This scene adds illustrative sectors rather than surveyed building footprints.',source:chanderiSource},
 {id:'sites',at:[-30,15],title:'Kati Ghati and monument group',text:'The district lists Kati Ghati, Badal Mahal, Rani Mahal, Jama Masjid, Purani Kachari and Khooni Darwaza. Their scene placements remain inferred.',source:chanderiSource},
 {id:'history',at:[0,-20],title:'Changing rulers',text:'The district describes Malwa and Bundela periods. This scene does not reconstruct the successive political or architectural phases.',source:chanderiSource}]
});
export const ajaigarh=makeFort({
 id:'ajaigarh',name:'Ajaigarh Fort',native:{text:'Ajaygarh',lang:'en',script:'latn'},region:'Panna · Madhya Pradesh',typeLabel:'Plateau fort · inferred prototype',coords:[24.894,80.264],
 type:'hill',seed:479,units:{planScale:4,vScale:5},size:{rx:125,ry:95},hill:{h:36,cliff:13,skirt:40},guard:'guard-rajput',people:5,flag:false,cannons:false,
 gates:[{a:90,name:'North gate · bearing inferred',main:true},{a:315,name:'Tharauni southeast gate · bearing inferred'}],buildings:[],trees:6,slopeTrees:75,
 tanks:[{x:0,y:0,rx:13,ry:9,name:'Ajay Palka Talav · approximate site',only:'today'}],
 extraBuild:(W,{era,H})=>{
  if(era!=='today')return;
  for(const [x,y,n] of [[0,25,'Jain temple group by Ajay Palka Talav'],[17,18,'Temple beside Ajay Palka Talav'],[-17,18,'Temple beside Ajay Palka Talav']]){W.temple({x,y,w:6,h:10,style:'nagara',base:H,color:'stone',mandapa:{d:4,w:7,h:2.7,roof:'flat'}});W.zone(rectPts(x,y,12,15,0),`${n} · approximate placement`);}
 },
 eras:[{id:'1200',until:1201,year:'c. 1200',label:'Chandela interpretation',short:'Chandela',lens:'engraving',summary:'An illustrative hilltop fort during the Chandela period.',basis:'India’s national tourism authority identifies Ajaigarh as a Chandela fort; the district places it on the Vindhya hills.',conjecture:'The specific 1200 plan, architecture, garrison, lake and temple phases, approach and terrain are not established. Figures are placeholders.',sources:['AJA-01','AJA-02']},
 {id:'today',year:'Today',label:'Fort on a Vindhyan plateau',short:'Present',lens:'none',summary:'Explore the north and southeast approaches, a central lake and nearby Jain temple remains.',basis:'Panna district locates the north gate and southeast Tharauni gate, Ajay Palka Talav at the fort center, and Jain temple remains at the lake’s end.',conjecture:'The gate bearings, lake dimensions, temple positions, plateau outline and approach climb remain schematic pending tracing of official plans and current aerial imagery.',sources:['AJA-01','AJA-03']}],
 pois:[{id:'lake',at:[18,14],title:'Ajay Palka Talav',text:'Panna district places the lake in the middle of the fort and Jain remains at its end. Its polygon, shore, level and temple coordinates here are approximate.',source:ajaigarhSource},
 {id:'temples',at:[0,25],title:'Jain temple remains',text:'Panna district describes Jain temple remains near the lake and ancient temples along its bank. The modeled shrines indicate the documented group, not measured footprints.',source:ajaigarhSource},
 {id:'approaches',at:[35,20],title:'North gate and Tharauni gate',text:'Panna district names a north entrance and a southeast Tharauni gate and describes a steep rock climb. Bearings and approach terrain in this scene are inferred.',source:ajaigarhSource}]
});
