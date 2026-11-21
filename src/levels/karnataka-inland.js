// Documentary blockouts; local wall traces and terrain remain unregistered.
import {makeFort} from './gen.js';
const chitradurgaRing=(rx,ry,n=16,rotation=0)=>Array.from({length:n},(_,i)=>{const a=(i/n*360+rotation)*Math.PI/180;return [rx*Math.cos(a),ry*Math.sin(a)];});
const chi='https://old.karnatakatourism.org/tour-item/chitradurga-fort';
const ban='https://bengaluruurban.nic.in/en/tourist-place/tipu-sultans-summer-palace/';
export const chitradurga=makeFort({
 id:'chitradurga',name:'Chitradurga Fort',native:{text:'Chitradurga',lang:'en',script:'latn'},region:'Chitradurga · Karnataka',typeLabel:'Seven-line granite hill-fort system · schematic circuits',coords:[14.221,76.398],
 siteReference:{source:'ASI account reproduced in Census Handbook; Karnataka Tourism',kind:'approximate fort-city reference; outer boundary and hill ridges not georeferenced'},
 type:'hill',seed:199,units:{planScale:3,vScale:4},size:{rx:132,ry:96},hill:{h:36,cliff:11,skirt:48},bastionStep:40,guard:'guard-deccan',people:6,flag:false,
 gates:[{a:0,name:'Outer east gateway · approximate',main:true},{a:90,name:'Outer north gateway · approximate'},{a:180,name:'Outer west gateway · approximate'},{a:270,name:'Outer south gateway · approximate'}],
 additionalWalls:[
  {path:chitradurgaRing(110,79,16,5),h:5.8,thick:3.4,gateAt:[105,0],gateName:'Inner gate · zigzag route schematic',label:'Second defensive line · approximate concentric cue'},
  {path:chitradurgaRing(93,66,16,1),h:5.5,thick:3.2,gateAt:[0,66],gateName:'Inner gate · zigzag route schematic',label:'Third defensive line · approximate concentric cue'},
  {path:chitradurgaRing(76,53,16,7),h:5.2,thick:3,gateAt:[-76,0],gateName:'Hill gate · zigzag route schematic',label:'Fourth defensive line · approximate concentric cue'},
  {path:chitradurgaRing(59,41,16,3),h:5,thick:2.8,gateAt:[0,-41],gateName:'Hill gate · zigzag route schematic',label:'Fifth defensive line · approximate concentric cue'},
  {path:chitradurgaRing(42,29,16,8),h:4.8,thick:2.6,gateAt:[42,0],gateName:'Hill gate · zigzag route schematic',label:'Sixth defensive line · approximate concentric cue'},
  {path:chitradurgaRing(25,18,16,2),h:4.5,thick:2.4,gateAt:[0,18],gateName:'Upper-fort gate · schematic',label:'Seventh defensive line · approximate concentric cue'}
 ],buildings:[],
 temples:[{x:-30,y:12,w:7,h:8,style:'dravida'},{x:22,y:18,w:6,h:7,style:'dravida'},{x:5,y:-27,w:6,h:7,style:'dravida'},{x:-12,y:-5,w:5.5,h:7,style:'dravida'}],
 tanks:[{name:'Akka-Thangi Honda · placement schematic',x:-42,y:6,rx:7,ry:5},{name:'Rock-cut water tank · placement schematic',x:38,y:-15,rx:8,ry:6},{name:'Rainwater reservoir cue',x:7,y:32,rx:8,ry:5}],
 eras:[{id:'1750',year:'c. 1750',label:'Nayaka-period hill-fort system',short:'Nayaka period',lens:'engraving',summary:'An illustrative fortification phase across the granite hills.',basis:'The ASI account describes seven lines of defense, with three at the hill foot and four on the hill; four outer gateways; temples and rock-cut/rainwater tanks. Hyder Ali and Tipu Sultan later strengthened portions in stone.',conjecture:'The seven generated wall lines are schematic concentric cues, not the real ridge-following traces. Three outer moats, boulders, rock relief, gates, reservoirs and temple footprints still need plan/terrain registration.',sources:['CHT-01','CHT-02','CHT-03']},
 {id:'today',year:'Today',label:'Fort, shrines and waterworks',short:'Remains',lens:'none',summary:'Explore a seven-line fortification blockout with selected temple and reservoir cues.',basis:'Government and ASI descriptions identify seven defenses, many temples, water-harvesting tanks and zigzagging approaches.',conjecture:'No current orthophoto or DEM is aligned. The model does not reproduce the seven hills, true wall traces, moat locations, all nineteen historical gateways, 38 posterns, secret entrances or complete water network.',sources:['CHT-01','CHT-02','CHT-03']}],
 pois:[{id:'walls',at:[35,20],title:'Seven defensive lines',text:'ASI describes seven lines, with three at the hill foot and four on the hill. The scene now shows seven schematic bands; actual walls follow rugged granite rather than regular rings.',source:'https://www.amrut.mohua.gov.in/uploads/basic_deatils_document/2912_PART_B_DCHB_CHITRADURGA.pdf'},
 {id:'water',at:[-30,15],title:'Rainwater harvesting',text:'The official account describes interconnected reservoirs and rock-cut tanks. Three markers are shown, but their locations and hydraulic sequence are not traced.',source:chi},
 {id:'obavva',at:[0,-20],title:'Onake Obavva Kindi',text:'The tourism account associates this narrow passage with Onake Obavva’s defense. Its location and architecture are not represented as measured.',source:chi}]
});
export const bangalore=makeFort({
 id:'bangalore-fort',name:'Bangalore Fort',native:{text:'Bangalore Fort',lang:'en',script:'latn'},region:'Bengaluru · Karnataka',typeLabel:'Urban fort · inferred prototype',coords:[12.963,77.576],
 type:'hill',seed:211,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:10,cliff:4,skirt:25},guard:'guard-deccan',people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1785',year:'c. 1785',label:'Mysore period',short:'Mysore period',lens:'engraving',summary:'An illustrative garrison during the Mysore period.',basis:'The Bengaluru district says Hyder Ali began a palace within the fort, completed under Tipu Sultan in 1791.',conjecture:'The palace, city, walls, dimensions, terrain and guard appearance are not reconstructed. The palace was not yet complete in this period.',sources:['BAN-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic urban fort.',basis:'The district describes the fort and Tipu Sultan’s Summer Palace.',conjecture:'The palace, surrounding city and actual surviving remains are not modeled; this is not a present-condition survey.',sources:['BAN-01']}],
 pois:[{id:'palace',at:[35,20],title:'Summer palace',text:'The district dates the completion of Tipu Sultan’s Summer Palace to 1791. It is not modeled in this scene.',source:ban},
 {id:'fort',at:[-30,15],title:'The fort and city',text:'The district places the palace within the historical fort. This generic layout does not recreate the fort or its urban setting.',source:ban},
 {id:'phases',at:[0,-20],title:'A changing site',text:'The account attributes the start of palace construction to Hyder Ali and completion to Tipu Sultan; earlier fort phases need further research.',source:ban}]
});
