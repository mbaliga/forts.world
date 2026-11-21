// Illustrative hill prototypes, not measured topography or site plans.
import {makeFort} from './gen.js';
const gand='https://kadapa.ap.gov.in/gandikota-fort/';
const chan='https://tirupati.ap.gov.in/religious-tourism/';
export const gandikota=makeFort({
 id:'gandikota',name:'Gandikota',native:{text:'Gandikota',lang:'en',script:'latn'},region:'Kadapa · Andhra Pradesh',typeLabel:'Gorge fort · inferred prototype',coords:[14.813,78.286],
 type:'hill',seed:131,units:{planScale:3,vScale:4},size:{rx:95,ry:72},hill:{h:35,cliff:12,skirt:48},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1600',year:'c. 1600',label:'Vijayanagara-era interpretation',short:'Nayaka period',lens:'engraving',summary:'An illustrative garrison in the later Vijayanagara period.',basis:'The district describes Vijayanagara-period temples and the fort beside the Pennar.',conjecture:'The gorge, river, temples, real walls and gate, dimensions and guard appearance are not reconstructed. The campaign’s broad ownership interval needs further research.',sources:['GAN-01','GAN-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district describes the fort, temples, granary and river gorge.',conjecture:'The gorge, river and named structures are not modeled; terrain and layout are not a measured survey.',sources:['GAN-01']}],
 pois:[{id:'gorge',at:[35,20],title:'Pennar gorge',text:'The district describes the fort above the Pennar. The river and gorge are not represented in this scene.',source:gand},
 {id:'temples',at:[-30,15],title:'Temples within the fort',text:'The district describes Ranganatha and Madhavaswamy temples of the fifteenth and sixteenth centuries. Their positions and structures are not modeled.',source:gand},
 {id:'granary',at:[0,-20],title:'Granary and mosque',text:'The district describes a granary beside the Juma Masjid; their form and positions are not reconstructed here.',source:gand}]
});
export const chandragiri=makeFort({
 id:'chandragiri',name:'Chandragiri',native:{text:'Chandragiri',lang:'en',script:'latn'},region:'Tirupati · Andhra Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[13.585,79.317],
 type:'hill',seed:137,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:38,cliff:10,skirt:50},guard:'guard-deccan',people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1600',year:'c. 1600',label:'Vijayanagara period',short:'Vijayanagara period',lens:'engraving',summary:'An illustrative garrison during Chandragiri’s period as a Vijayanagara capital.',basis:'The Tirupati district identifies Chandragiri as a Vijayanagara capital and records the 1646 Golconda annexation.',conjecture:'The palace complex, temples, actual terrain, fort walls, dimensions and guard appearance are not reconstructed.',sources:['CHD-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district describes Raja Mahal, Rani Mahal, temples and other remains.',conjecture:'The palace and temple complex is not modeled and this is not a measured survey or present-condition reconstruction.',sources:['CHD-01']}],
 pois:[{id:'capital',at:[35,20],title:'A Vijayanagara capital',text:'The Tirupati district describes Chandragiri as a Vijayanagara capital, before Golconda annexed it in 1646.',source:chan},
 {id:'palaces',at:[-30,15],title:'Raja Mahal and Rani Mahal',text:'The district describes these palace buildings. Their architecture, dates and positions are not reconstructed here.',source:chan},
 {id:'temples',at:[0,-20],title:'Temples',text:'The district account describes eight temples within the fort. They are not modeled in this prototype.',source:chan}]
});
