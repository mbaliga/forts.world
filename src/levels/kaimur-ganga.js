// Generated scenes only: the archaeological layouts and river geography have not been surveyed.
import {makeFort} from './gen.js';
const rohtas='https://tourism.bihar.gov.in/en/destinations/rohtas/rohtasgarh-fort';
const chunarSource='https://indiacinehub.gov.in/location/chunar-mirzapur';
const census='https://censusindia.gov.in/nada/index.php/catalog/1266/download/4078/DH_2011_0968_PART_A_DCHB_MIRZAPUR.pdf';
export const rohtasgarh=makeFort({
 id:'rohtasgarh',name:'Rohtasgarh Fort',native:{text:'Rohtasgarh',lang:'en',script:'latn'},region:'Rohtas · Bihar',typeLabel:'Plateau fort · inferred prototype',coords:[24.629,83.910],
 type:'hill',seed:509,units:{planScale:4,vScale:5},size:{rx:140,ry:105},hill:{h:38,cliff:13,skirt:45},guard:'guard-mughal',people:6,flag:false,
 gates:[{a:65,name:'Ascent · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 tanks:[{x:25,y:-42,rx:10,ry:7,name:'Reservoir · position inferred',only:'today'}],
 eras:[{id:'1540',until:1541,year:'c. 1540',label:'Sixteenth-century interpretation',short:'Early modern',lens:'engraving',summary:'An illustrative plateau-fort scene.',basis:'Bihar Tourism describes a hilltop plateau fort strengthened by Sher Shah Suri.',conjecture:'The exact 1540 control, architectural phase, plateau, approaches, reservoirs and garrison are unverified. Generic Mughal figures are placeholders and do not establish Suri-period dress.',sources:['RHB-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic hilltop enclosure.',basis:'Bihar Tourism describes the plateau, access steps, gates, palaces, temples and reservoirs.',conjecture:'The fort’s actual scale, plateau, access, buildings and present condition are not reconstructed. The small reservoir is an illustrative cue.',sources:['RHB-01']}],
 pois:[{id:'ascent',at:[35,20],title:'Hilltop approaches',text:'Bihar Tourism describes a steep hilltop plateau and limestone steps. The generated path and plateau are not a surveyed route.',source:rohtas},
 {id:'water',at:[25,-26],title:'Plateau water',text:'Bihar Tourism describes reservoirs and streams on the plateau. The present-day pool is illustrative; its form, location and historic phase are unknown.',source:rohtas},
 {id:'identity',at:[-30,15],title:'Rohtasgarh, Bihar',text:'This fort in Bihar is distinct from Rohtas Fort in Pakistan. Their plans, histories and locations must not be conflated.',source:rohtas}]
});
export const chunar=makeFort({
 id:'chunar',name:'Chunar Fort',native:{text:'Chunar',lang:'en',script:'latn'},region:'Mirzapur · Uttar Pradesh',typeLabel:'Riverside fort · inferred prototype',coords:[25.125,82.879],
 type:'river',seed:521,units:{planScale:4,vScale:4},size:{rx:105,ry:75},shore:{a:180,dist:130},isthmusW:25,margin:75,guard:'guard-mughal',people:5,flag:false,boats:[],
 gates:[{a:180,name:'Approach · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1535',until:1536,year:'c. 1535',label:'Sher Shah interpretation',short:'Suri period',lens:'engraving',summary:'An illustrative fort on a river approach.',basis:'India Cine Hub identifies a Sher Shah Suri period from 1532; the Mirzapur census handbook places the fort on the Ganga’s right bank.',conjecture:'The precise 1535 fort plan, river channel, terrain, access, buildings and garrison are unverified. The Mughal figure is a generic placeholder for earlier dress.',sources:['CHU-01','CHU-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic riverside enclosure.',basis:'The Mirzapur census handbook identifies Chunar Fort beside the Ganga.',conjecture:'The actual fort, Ganga channel, town, approach and present condition are not modeled. The water and causeway are illustrative.',sources:['CHU-02']}],
 pois:[{id:'river',at:[35,20],title:'Ganga riverbank',text:'The census handbook locates the fort on the river’s right bank. This generated water and shore are not a geographic map.',source:census},
 {id:'period',at:[-30,15],title:'Sher Shah Suri',text:'India Cine Hub records a Sher Shah Suri period at Chunar in the sixteenth century. The scene’s structure and soldiers are illustrative.',source:chunarSource},
 {id:'later',at:[0,-20],title:'Later phases',text:'The government account lists later Mughal, Awadh, Company and Maratha periods. Their architectural phases are not modeled here.',source:chunarSource}]
});
