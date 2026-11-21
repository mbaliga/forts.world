// Simplified palace-fort scenes; architecture, underground spaces and landscape are not surveyed.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const garhgaon='https://sivasagar.assam.gov.in/tourist-place-detail/328';
const rangpur='https://sivasagar.assam.gov.in/tourist-place-detail/277';
const magazine='https://sivasagar.assam.gov.in/tourist-place-detail/399';
export function buildAhomPalace(W,era,site){
 const x=25,y=-40,rect=[x,y,22,12,0],base=W.ground(x,y);
 // Placeholder massing only; interior plans, roof, size and ornament are unknown.
 if(site==='talatal' && era==='today') W.ruin({rect,h:4,thick:0.7,jag:true,windows:false,color:'stone',doors:[{edge:0,at:0.5,w:1.8}]});
 else W.building({rect,base,storeys:4,storeyH:2.6,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.4,w:1,h:1.8,sill:0.4},kind:'palace',name:'Palace · illustrative'});
 W.zone(rectPts(x,y,28,18,0),'Palace · illustrative location');
}
const common={type:'hill',shape:'square',units:{planScale:3,vScale:4},hill:{h:4,cliff:2,skirt:15},guard:'guard-rajput',people:5,flag:false,
 palette:{wall:'#987562',wallTop:'#ab8972',stone:'#9a816e',dry:'#8f9772',grass:'#6e8a55'},
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[]};
export const karengGhar=makeFort({...common,id:'kareng-ghar',name:'Kareng Ghar, Garhgaon',native:{text:'Kareng Ghar',lang:'en',script:'latn'},region:'Garhgaon · Assam',typeLabel:'Ahom palace · inferred prototype',coords:[26.928,94.738],seed:563,size:{rx:95,ry:70},
 extraBuild:(W,{era})=>buildAhomPalace(W,era,'kareng'),
 eras:[{id:'1760',until:1761,year:'c. 1760',label:'Rajeswar Singha period',short:'Ahom period',lens:'engraving',summary:'An illustrative scene after the rebuilding at Garhgaon.',basis:'Sivasagar district dates the permanent Garhgaon palace to 1752 under Rajeswar Singha.',conjecture:'The actual 1760 plan, palace form and layout, city, landscape and garrison are not reconstructed. The generic four-storey block and Rajput figures are placeholders, not evidence of Ahom architecture or dress.',sources:['KRG-01']},
 {id:'today',year:'Today',label:'Palace site',short:'Present',lens:'none',summary:'Explore a schematic palace-fort scene.',basis:'Sivasagar district identifies Kareng Ghar at Garhgaon as a distinct administrative palace.',conjecture:'The actual palace, surroundings, access and present condition are not reconstructed. The block is a generic visual cue.',sources:['KRG-01']}],
 pois:[{id:'palace',at:[25,-25],title:'Garhgaon Palace',text:'The district dates the present permanent palace to 1752. The generic block is not a reconstruction of its layout, seven-storey description or appearance.',source:garhgaon},
 {id:'identity',at:[-30,15],title:'Two palace sites',text:'This Kareng Ghar is at Garhgaon. The Talatal Ghar site at Rangpur is a different palace, whose upper storeys are also called Kareng Ghar.',source:rangpur},
 {id:'magazine',at:[35,20],title:'Gola Ghar',text:'The district identifies an Ahom ammunition store near each palace. Neither magazine’s location or form is modeled here.',source:magazine}]
});
export const talatalGhar=makeFort({...common,id:'talatal-ghar',name:'Talatal Ghar, Rangpur',native:{text:'Talatal Ghar',lang:'en',script:'latn'},region:'Rangpur · Sivasagar · Assam',typeLabel:'Ahom palace · inferred prototype',coords:[26.974,94.632],seed:569,size:{rx:100,ry:75},
 extraBuild:(W,{era})=>buildAhomPalace(W,era,'talatal'),
 eras:[{id:'1768',until:1769,year:'c. 1768',label:'Rajeswar Singha period',short:'Ahom period',lens:'engraving',summary:'An illustrative palace-fort scene.',basis:'Sivasagar district dates the Talatal Ghar complex to 1765 and describes three underground and four upper storeys.',conjecture:'The building plan, fortification, tunnels, waterworks, exact 1768 phase, landscape and garrison are not reconstructed. A generic block and Rajput figures are placeholders; underground spaces are not accessible or modeled.',sources:['TAL-01']},
 {id:'today',year:'Today',label:'Palace remains',short:'Present',lens:'none',summary:'Explore a schematic palace-fort scene.',basis:'Sivasagar district notes that only a few rooms of the upper storey remain.',conjecture:'The real palace and its remains, underground floors, tunnels, settlement and present condition are not reproduced. The ruin is a generic cue.',sources:['TAL-01']}],
 pois:[{id:'palace',at:[25,-25],title:'Talatal Ghar',text:'The district describes three underground and four upper storeys. This scene uses generic above-ground massing; neither the real architecture nor underground floors are modeled.',source:rangpur},
 {id:'tunnels',at:[-30,15],title:'Reported tunnels',text:'The district describes routes toward the Dikhow and Garhgaon. Their physical routes and conditions are not verified here, and no tunnel or campaign route is modeled.',source:rangpur},
 {id:'identity',at:[35,20],title:'Rangpur and Garhgaon',text:'Talatal Ghar at Rangpur and the palace at Garhgaon are separate sites. The term Kareng Ghar is also used for the upper storeys at Rangpur.',source:garhgaon}]
});
