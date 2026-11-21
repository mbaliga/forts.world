// Exploratory prototypes: fort layouts and terrain are not surveys.
import {makeFort} from './gen.js';
const pen='https://srisathyasai.ap.gov.in/tourism/';
const uda='https://spsnellore.ap.gov.in/udayagiri-fort-udayagiri/';
export const penukonda=makeFort({
 id:'penukonda',name:'Penukonda Fort',native:{text:'Penukonda',lang:'en',script:'latn'},region:'Sri Sathya Sai · Andhra Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[14.080,77.590],
 type:'hill',seed:251,units:{planScale:3,vScale:4},size:{rx:100,ry:75},hill:{h:36,cliff:10,skirt:45},guard:'guard-deccan',people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1580',year:'c. 1580',label:'Vijayanagara interpretation',short:'Vijayanagara period',lens:'engraving',summary:'An illustrative garrison in the later Vijayanagara period.',basis:'The district describes Penukonda as a Vijayanagara capital and identifies the Gagan Mahal and Babayya Darga.',conjecture:'The date and exact building phases need research. The hill, fort walls, palace, darga, dimensions and guard appearance are not reconstructed.',sources:['PEN-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district describes the fort and named monuments.',conjecture:'The actual landscape, palace, darga, fort plan and present conditions are not surveyed.',sources:['PEN-01']}],
 pois:[{id:'capital',at:[35,20],title:'Vijayanagara capital',text:'The district describes Penukonda as a Vijayanagara capital. This scene does not reproduce the historical city.',source:pen},
 {id:'palace',at:[-30,15],title:'Gagan Mahal',text:'The district identifies Gagan Mahal at Penukonda. Its architecture, position and construction phase are not modeled.',source:pen},
 {id:'position',at:[0,-20],title:'Location needs review',text:'The district tourism page gives a coordinate that differs from the inherited approximate catalogue marker. The location needs verification before terrain work.',source:pen}]
});
export const udayagiri=makeFort({
 id:'udayagiri-nellore',name:'Udayagiri Fort, Nellore',native:{text:'Udayagiri',lang:'en',script:'latn'},region:'Nellore · Andhra Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[14.870,79.310],
 type:'hill',seed:257,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:38,cliff:11,skirt:45},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1520',year:'c. 1520',label:'Vijayanagara interpretation',short:'Vijayanagara period',lens:'engraving',summary:'An illustrative garrison after the early sixteenth-century siege.',basis:'The Nellore district describes the hill fort; an Andhra chronology records Krishnadevaraya’s capture in 1514.',conjecture:'The actual hill, fort, temples, dimensions, guard appearance and siege are not reconstructed; local architectural phases need research.',sources:['UDA-01','UDA-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The Nellore district describes the fort and nearby town.',conjecture:'The real hill, fortifications, temples and current condition are not surveyed in this scene.',sources:['UDA-01']}],
 pois:[{id:'hill',at:[35,20],title:'Hill fort and town',text:'The Nellore district describes the fort above Udayagiri town. Neither the actual hill nor town is reconstructed here.',source:uda},
 {id:'siege',at:[-30,15],title:'The 1514 capture',text:'An Andhra chronology records Krishnadevaraya’s capture of Udayagiri in 1514. This prototype does not simulate the siege.',source:'https://ignca.gov.in/Asi_data/39094.pdf'},
 {id:'identity',at:[0,-20],title:'Which Udayagiri?',text:'This is the Nellore district site, distinct from Udayagiri Fort in Kanyakumari district.',source:uda}]
});
