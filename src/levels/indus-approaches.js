// Illustrative exploration scenes; their layouts and river geography have not been surveyed.
import {makeFort} from './gen.js';
const rohtas='https://whc.unesco.org/en/list/586/';
const attock='https://attock.punjab.gov.pk/important-places';
export const rohtasFort=makeFort({
 id:'rohtas-pk',name:'Rohtas Fort, Punjab',native:{text:'Qila Rohtas',lang:'en',script:'latn'},region:'Jhelum · Punjab · Pakistan',typeLabel:'Hilltop fort · inferred prototype',coords:[32.964,73.577],
 type:'hill',seed:433,units:{planScale:4,vScale:5},size:{rx:140,ry:105},hill:{h:25,cliff:9,skirt:35},guard:'guard-mughal',people:6,flag:false,
 gates:[{a:65,name:'Entrance · position inferred',main:true},{a:210,name:'Secondary entrance · position inferred'}],
 innerWall:{k:0.45,h:3.5,gate:0,only:'today'},rockSteps:[{from:[30,-42],to:[40,-42],w:3,depth:3,well:[43,-42],radius:3,only:'today'}],
 buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1550',year:'c. 1550',label:'Early Suri interpretation',short:'Early fort',lens:'engraving',summary:'An illustrative early fort following the start of construction.',basis:'UNESCO dates the beginning of Sher Shah Suri’s fort to 1541.',conjecture:'The state of construction in 1550, real walls, gates, water systems, terrain and garrison are unknown. Generic Mughal figures are placeholders, not Suri-period uniform evidence.',sources:['ROH-PK-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic fort with a divided enclosure and stepwell.',basis:'UNESCO describes an irregular hilltop plan, an interior wall, stepwells, 68 bastions and 12 gateways.',conjecture:'The real layout, entrance and bastion counts, internal wall, stepwell form and locations are not reconstructed. The scene shows only illustrative cues, not a survey.',sources:['ROH-PK-01']}],
 pois:[{id:'fortification',at:[35,20],title:'Defences and gateways',text:'UNESCO describes over four kilometres of walls, 68 bastions and 12 gateways. This scene does not match their plan, count or placement.',source:rohtas},
 {id:'water',at:[25,-30],title:'Internal water',text:'UNESCO describes baolis supplying the garrison. The present-day rock-cut feature is illustrative; its form, placement and date are inferred.',source:rohtas},
 {id:'later',at:[-30,15],title:'Later Man Singh haveli',text:'UNESCO identifies a haveli built later in the Mughal period. It is not modeled in either scene.',source:rohtas}]
});
export const attockFort=makeFort({
 id:'attock',name:'Attock Fort',native:{text:'Attock',lang:'en',script:'latn'},region:'Attock · Punjab · Pakistan',typeLabel:'Riverside fort · inferred prototype',coords:[33.894,72.247],
 type:'hill',seed:439,units:{planScale:3,vScale:4},size:{rx:100,ry:70},hill:{h:12,cliff:5,skirt:25},guard:'guard-mughal',people:5,visitors:0,todayPeople:false,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1590',year:'c. 1590',label:'Akbar period',short:'Akbar',lens:'engraving',summary:'An illustrative garrison following construction.',basis:'Attock district dates the fort’s construction to 1581–1583 and describes its purpose as protecting an Indus crossing.',conjecture:'The Indus, approaches, exact fort plan, layout, garrison and buildings are not reconstructed.',sources:['ATT-01']},
 {id:'today',year:'Today',label:'Fort site',short:'Present',lens:'none',summary:'Explore a schematic representation of the fort.',basis:'Attock district describes the site as a restricted military location.',conjecture:'This fictional scene does not depict the actual layout, facilities, access or present condition; there are no simulated visitors.',sources:['ATT-01']}],
 pois:[{id:'crossing',at:[35,20],title:'Indus crossing',text:'Attock district describes the fort’s role in protecting the river passage. The Indus and crossing are not modeled.',source:attock},
 {id:'construction',at:[-30,15],title:'Construction',text:'Attock district dates construction under Akbar to 1581–1583. The scene’s structures are illustrative.',source:attock},
 {id:'present',at:[0,-20],title:'Present-day site',text:'Attock district identifies the fort as a restricted military site. The scene is fictional and does not represent present facilities or public access.',source:attock}]
});
