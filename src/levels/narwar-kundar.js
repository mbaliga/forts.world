// Approximate generated scenes; the fort plans and surrounding countryside are not surveyed.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const narwarSource='https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/gwalior/narwar.html';
const narwarGazetteer='https://ignca.gov.in/Asi_data/22657.pdf';
const kundarSource='https://whc.unesco.org/en/tentativelists/6806/';
const orchard='https://whc.unesco.org/en/tentativelists/6404/';
const khangar='https://www.mppcb.mp.gov.in/proc/Tech/DEP%20Tikamgarh.pdf';
export const narwar=makeFort({
 id:'narwar',name:'Narwar Fort',native:{text:'Narwar',lang:'en',script:'latn'},region:'Shivpuri · Madhya Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[25.648,77.910],
 type:'hill',seed:487,units:{planScale:4,vScale:5},size:{rx:110,ry:78},hill:{h:36,cliff:12,skirt:40},guard:'guard-rajput',people:6,flag:false,cannons:false,trees:12,slopeTrees:70,
 gates:[{a:65,name:'Alamgiri Gate · east sequence; bearing inferred',main:true},{a:48,name:'Saiyadonka Darwaza · east sequence; bearing inferred'},{a:31,name:'Piran Paur · east sequence; bearing inferred'},{a:14,name:'Hawa Paur · east sequence; bearing inferred'},{a:245,name:'Urwahi · west approach; bearing inferred'},{a:228,name:'Gaimukha · west approach; bearing inferred'},{a:260,name:'Dholya Pol · north-west road closed in historic account; position inferred'}],
 gatesByEra:{'1250':[{a:65,name:'Approach gate · position unknown',main:true}]},buildings:[],
 extraBuild:(W,{era,H})=>{
  if(era!=='today') return;
  const now=era==='today';
  const enclosures=[rectPts(0,0,148,100,0),rectPts(0,0,116,78,0),rectPts(0,0,82,56,0),rectPts(0,0,50,34,0)];
  ['Dhola Ahata','Gujar Ahata','Madar Ahata','Maj-loka'].forEach((name,i)=>W.zone(enclosures[i],`${name} · documented enclosure; outline schematic`));
  for(const [x,y,w,d,name] of [[-18,15,16,12,'Kachahri Mahal'],[17,15,15,11,'Ladau Bangala'],[0,-15,12,10,'Chhip Mahal']]){W.building({rect:[x,y,w,d,0],base:H,storeys:2,storeyH:3.4,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.1,w:0.9,h:1.6},kind:'palace',name:`${name} · schematic`});W.zone(rectPts(x,y,w+5,d+5,0),`${name} · exact footprint and position unverified`);}
  const town=[[-155,-66],[-102,-66],[-102,-5],[-155,-5]], approach=[[78,45],[134,45],[134,100],[78,100]];
  for(const [i,poly] of [town,approach].entries()){W.houses({poly,count:now?24:10,size:[5,8],h:now?[1,3]:[1,2],roof:'flat',seed:787+i,spacing:2.5});W.zone(poly,`Narwar settlement and approach · illustrative ${now?'present':'c.1250'} block`);}
 },
 eras:[{id:'1250',until:1251,year:'c. 1250',label:'Thirteenth-century interpretation',short:'Early fort',lens:'engraving',summary:'An illustrative fort on a Vindhyan scarp with its documented east and west approach system.',basis:'The 1927 Gwalior State archaeological report records two entered approaches, six named gates, four walled enclosures, and lists of palaces and tanks. It also documents changing control; the 13th-century transition from Pratiharas to Yajvapala is summarized by the CCRT fort volume.',conjecture:'The source descriptions do not provide a georeferenced site plan. Gate bearings, wall traces, courtyard boundaries, palace/tank positions, exact 1250 ownership and all scene geometry remain approximate or unknown.',sources:['NAR-03','NAR-04','NAR-05']},
 {id:'today',year:'Today',label:'Fort above Narwar town',short:'Present',lens:'none',summary:'Explore documented approach gates, palace names, tanks and layered enclosures.',basis:'The archaeological account names the east approach gates Alamgiri, Saiyadonka Darwaza, Piran Paur and Hawa Paur; west gates Urwahi and Gaimukha; and a north-west Dholya Pol road now closed. It also names Maj-loka, Madar Ahata, Gujar Ahata and Dhola Ahata, plus historic tanks and palaces.',conjecture:'The actual enclosure geometry, gate bearings, palace footprints, terrain mesh, settlement geometry and present condition are not reconstructed. Named structures in this scene are spatial cues, not a surveyed model.',sources:['NAR-03','NAR-04','NAR-05']}],
 pois:[{id:'scarp',at:[35,20],title:'Vindhyan scarp',text:'The national tourism account places Narwar Fort on a steep scarp. The generated terrain is illustrative.',source:narwarSource},
 {id:'palace',at:[-30,15],title:'Fortified enclosures and palaces',text:'The archaeological account names four enclosures—Maj-loka, Madar Ahata, Gujar Ahata and Dhola Ahata—and palaces including Kachahri, Ladau Bangala and Chhip Mahal. Their footprints and positions here remain schematic.',source:narwarGazetteer},
 {id:'town',at:[-125,-35],title:'Narwar settlement and eastern approach',text:'The historic archaeological account describes the east approach through the town, the west approach, and a northern road now closed. Scene blocks are not mapped footprints.',source:narwarGazetteer}]
});
export const garhKundar=makeFort({
 id:'garh-kundar',name:'Garh Kundar',native:{text:'Garh Kundar',lang:'en',script:'latn'},region:'Niwari · Madhya Pradesh',typeLabel:'Hilltop palace fort · inferred prototype',coords:[25.431,78.940],
 type:'hill',seed:491,units:{planScale:4,vScale:5},size:{rx:115,ry:90},hill:{h:30,cliff:10,skirt:35},guard:'guard-rajput',people:6,flag:false,cannons:false,
 gates:[{a:65,name:'Entrance · position inferred',main:true}],innerWall:{k:0.5,h:4,gate:45,only:'today'},buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1300',until:1301,year:'c. 1300',label:'Khangar interpretation',short:'Khangar period',lens:'engraving',summary:'An illustrative earlier fort.',basis:'The Madhya Pradesh environment department’s district plan describes Garh Kundar as a Khangar capital from 1180 to 1347.',conjecture:'The fort’s exact 1300 state, layout, garrison, costume, walls and terrain are not established; the generic figure is a placeholder.',sources:['GKU-01']},
 {id:'1520',until:1521,year:'c. 1520',label:'Bundela interpretation',short:'Bundela period',lens:'engraving',summary:'An illustrative later capital.',basis:'UNESCO’s tentative-list account identifies Garh Kundar as an early Bundela capital before the move to Orchha during Bharti Chand’s reign.',conjecture:'The 1520 architectural state, ownership, garrison, costume, walls and terrain are not established. It is a separate snapshot, not a reconstruction of every intervening year.',sources:['GKU-02','GKU-03']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic hilltop palace fort.',basis:'UNESCO’s tentative-list account describes a hilltop fort with multiple defensive ramparts.',conjecture:'The actual ramparts, palace, hill, landscape and present condition are not reconstructed; the inner wall is an illustrative cue.',sources:['GKU-02']}],
 pois:[{id:'defence',at:[35,20],title:'Defensive layers',text:'UNESCO’s tentative-list account describes multiple ramparts. The present scene’s inner wall is not a surveyed reconstruction.',source:kundarSource},
 {id:'capital',at:[-30,15],title:'Early Bundela capital',text:'UNESCO describes the shift of the capital from Garh Kundar to Orchha during Bharti Chand’s reign. No connecting route is modeled.',source:orchard},
 {id:'khangar',at:[0,-20],title:'Earlier Khangar period',text:'The district environment plan describes a Khangar capital at Garh Kundar. The 1300 scene remains illustrative.',source:khangar}]
});
