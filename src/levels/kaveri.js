// Schematic fort scenes. Their landscapes and named monuments are not surveyed.
import {makeFort} from './gen.js';
const sri='https://karnatakatourism.org/en/destinations/srirangapatna/';
const tri='https://tiruchirappalli.nic.in/history/';
export const srirangapatna=makeFort({
 id:'srirangapatna',name:'Srirangapatna',native:{text:'Srirangapatna',lang:'en',script:'latn'},region:'Mandya · Karnataka',typeLabel:'Kaveri island city-fort · two-wall blockout',coords:[12.422,76.689],
 siteReference:{source:'UNESCO tentative-list nomination and Karnataka Government destination plan',kind:'approximate site reference; figure map not georeferenced into local coordinates'},
 type:'river',shape:'triangle',seed:139,units:{planScale:3,vScale:4},size:{rx:110,ry:82},shore:{a:0,dist:150},isthmusW:11,innerWall:{k:0.62,h:5,gate:0},boats:[],guard:'guard-deccan',people:6,flag:false,
 // Three enceinte lines are documented. The generator's extra closed circuits
 // currently disconnect movement, so this playable blockout models two lines;
 // the third remains a researched but not yet reconstructed feature.
 gates:[{a:0,name:'Bangalore/Ganjam Gate · eastern approach approximate',main:true},{a:270,name:'Mysore/Elephant Gate · southern approach approximate'},{a:90,name:'Gate 3 · position unknown'},{a:180,name:'Gate 4 · position unknown'},{a:225,name:'Gate 5 · position unknown'},{a:315,name:'Gate 6 · position unknown'}],
 additionalWalls:[],
 buildings:[{name:'Masjid-e-Ala · completed 1784; placement schematic',x:40,y:4,w:14,d:9,kind:'building',since:1784}],
 extraBuild:(W,{era,H})=>{
  W.temple({x:-27,y:12,w:12,h:12,style:'dravidian',plinth:1,mandapa:{d:7,w:15,h:4,roof:'flat'},color:'stone',base:H,name:'Ranganathaswamy Temple · footprint schematic'});
  for(const [i,[x,y]] of [[[-80,4],[-64,12],[-50,20],[-32,28],[-8,36],[14,39]]].flat().entries())W.building({rect:[x,y,5,4,0],base:H,storeys:1,storeyH:2.5,color:'stone',roof:'flat',windows:false,kind:'building',name:`Fort magazine ${i+1} of six · placement schematic`});
  for(const [name,x,y,l,w] of [['Colonel Bailey’s Dungeon',-88,40,10.2,4.1],['Inman’s Dungeon',72,26,4.6,3.25]]){
   const z=H-2.2;W.tunnel({path:[[x,y,z],[x+l,y,z],[x+l,y+w,z]],w:1.8,height:2.3,name:`${name} · underground footprint simplified`,portals:true});
   W.zone([[x-2,y-2],[x+l+2,y-2],[x+l+2,y+w+2],[x-2,y+w+2]],`${name} · documented relative region, plan position approximate`);
  }
  if(era==='today')W.zone([[92,-68],[106,-68],[106,-54],[92,-54]],'Daria Daulat Bagh and Gumbaz lie outside the fort after 1799; off-scene location cue only');
 },
 eras:[{id:'1795',year:'c. 1795',label:'Tipu Sultan’s 1791 renovation phase',short:'Mysore period',lens:'engraving',summary:'An illustrative city-fort scene after Tipu Sultan’s recorded 1791 renovation.',basis:'UNESCO and Karnataka’s destination plan describe a Cauvery island, a fort in its western part, three fort walls, six gates, dungeons, magazines, temple and palace fabric. The southern Elephant Gate was built in 1791; Masjid-e-Ala is dated 1784.',conjecture:'Only the outer wall and one inner wall are modeled; the documented third line remains absent. Triangle shape, river channels, gate alignment, dungeons, magazine sites, temple footprint and settlement fabric need registration to the government map.',sources:['SRI-01','SRI-02','SRI-03']},
 {id:'today',year:'Today',label:'Living island town and fort remains',short:'Present',lens:'none',summary:'Explore a two-wall fort blockout and selected monuments within the living town.',basis:'The Karnataka plan identifies the temple, magazines, dungeons, fort-wall prisons and monuments outside the fort after 1799. UNESCO describes the island and the fort’s western placement.',conjecture:'The documented third fort-wall line is not yet modeled. The town, actual Kaveri branches, full 5 km island geography, mapped roads and monument footprints remain unregistered to the local scene.',sources:['SRI-01','SRI-02','SRI-03']}],
 pois:[{id:'island',at:[28,20],title:'Kaveri island and western fort',text:'The Karnataka Government describes a roughly 5 km by 1.5 km island and places the fort in its western part; the river makes natural moat terrain on the north and west. This local scene shows only an illustrative water approach, not the complete island.',source:'https://karnatakatourism.org/wp-content/uploads/2017/08/Destination-Development-Srirangapatna-Town-Mandya.pdf'},
 {id:'temple',at:[-27,18],title:'Ranganathaswamy Temple',text:'The Karnataka Government places the temple within the island fort. Its scene footprint is a labeled massing cue; the temple plan has not been traced.',source:'https://karnatakatourism.org/wp-content/uploads/2017/08/Destination-Development-Srirangapatna-Town-Mandya.pdf'},
 {id:'walls',at:[0,28],title:'Three documented wall lines; two modeled',text:'The UNESCO nomination and Karnataka Government plan document three wall lines and six gates, with important southern and eastern entries. This prototype models only two wall lines; the third is not yet reconstructed. Gate alignments are schematic.',source:'https://whc.unesco.org/en/tentativelists/5895'}]
});
export const trichyRock=makeFort({
 id:'trichy-rock',name:'Tiruchirappalli Rock Fort',native:{text:'Rock Fort',lang:'en',script:'latn'},region:'Tiruchirappalli · Tamil Nadu',typeLabel:'Rock fort · inferred prototype',coords:[10.828,78.697],
 type:'hill',seed:149,units:{planScale:3,vScale:4},size:{rx:90,ry:70},hill:{h:38,cliff:12,skirt:50},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1751',year:'c. 1751',label:'Carnatic wars period',short:'Carnatic period',lens:'engraving',summary:'An illustrative garrison during the Carnatic wars.',basis:'The district describes Tiruchirappalli as a centre of the eighteenth-century Carnatic wars and attributes its fort to Viswanatha Nayaka.',conjecture:'The rock shape, steps, temples, town, river, fort layout and guard appearance are not reconstructed. This is not an authored siege battle.',sources:['TRI-01','TRI-02']},
 {id:'today',year:'Today',label:'Rock Fort',short:'Remains',lens:'none',summary:'Explore a schematic rocky fort.',basis:'The district describes the rock and its temples.',conjecture:'The rock, its steps and temples, surrounding city and present condition are not modeled accurately.',sources:['TRI-02']}],
 pois:[{id:'rock',at:[35,20],title:'Rock and steps',text:'The district describes the rock and a long flight of steps. Neither is represented accurately in this generic hill scene.',source:'https://tiruchirappalli.nic.in/tourist-place/rockfort-temple/'},
 {id:'temple',at:[-30,15],title:'Thayumanaswamy Temple',text:'The district describes this temple partway up the rock. Its architecture and position are not modeled.',source:'https://tiruchirappalli.nic.in/tourist-place/rockfort-temple/'},
 {id:'carnatic',at:[0,-20],title:'Carnatic wars',text:'The district identifies Tiruchirappalli as a centre of the eighteenth-century Carnatic wars. The town and historical siege are not reconstructed in this scene.',source:tri}]
});
