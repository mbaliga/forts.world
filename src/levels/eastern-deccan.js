// The scenes are illustrative: actual fort geometry and terrain are not surveyed.
import {makeFort} from './gen.js';
const goo='https://ananthapuramu.ap.gov.in/gooty-fort/';
const vel='https://vellore.nic.in/tourist-place/vellore-fort/';
export const gooty=makeFort({
 id:'gooty',name:'Gooty',native:{text:'Gooty',lang:'en',script:'latn'},region:'Ananthapuramu · Andhra Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[15.110,77.640],
 type:'hill',seed:113,units:{planScale:3,vScale:4},size:{rx:100,ry:75},hill:{h:38,cliff:12,skirt:55},guard:'guard-maratha',people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Garrison shelter · inferred',x:-15,y:-12,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1760',year:'c. 1760',label:'Murari Rao period',short:'Maratha period',lens:'engraving',summary:'An illustrative garrison during Murari Rao’s occupation.',basis:'The district government describes Murari Rao’s residence and repairs and Hyder Ali’s siege in 1775.',conjecture:'The many hills, lower town, gates, reservoirs and actual fortification layout are not reconstructed. All dimensions and guard appearances are inferred.',sources:['GOO-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district government describes a complex of fortified rocky hills, lower ramparts and reservoirs.',conjecture:'The single generated hill and wall are illustrative; the multi-hill site, actual paths, terrain and present condition are not surveyed.',sources:['GOO-01']}],
 pois:[{id:'complex',at:[35,20],title:'A complex of hills',text:'The district describes several rocky hills, lower ramparts and a citadel on the westernmost hill. This scene uses one imagined hill.',source:goo},
 {id:'water',at:[-30,15],title:'Seasonal water',text:'Small reservoirs in rock clefts collect seasonal rainwater, according to the district account. They are not reconstructed here.',source:goo},
 {id:'siege',at:[0,-20],title:'The 1775 siege',text:'The district account describes Hyder Ali’s siege and Murari Rao’s surrender after water ran short. This scene does not yet simulate that siege.',source:goo}]
});
export const vellore=makeFort({
 id:'vellore',name:'Vellore Fort',native:{text:'Vellore Fort',lang:'en',script:'latn'},region:'Vellore · Tamil Nadu',typeLabel:'Rectangular granite fort with moat · perimeter-constrained blockout',coords:[12.921,79.130],
 // 125-unit half-width at 3 m/unit gives a 750 m square, or about 3 km
 // perimeter. The district statement constrains scale, not exact dimensions.
 type:'moat',shape:'square',flatGround:true,seed:127,units:{planScale:3,vScale:4},size:{rx:125,ry:125},moatWidth:8,guard:'guard-deccan',people:6,flag:false,
 gates:[{a:0,name:'Fort entrance · orientation approximate',main:true}],
 temples:[{x:-35,y:28,w:13,h:14,style:'dravida'}],buildings:[],
 extraBuild:(W,{era,H})=>{
  if(era!=='today')return;
  for(const [i,[x,y,w,d,name]] of [[-12,28,19,12,'Tippu Mahal'],[14,28,16,11,'Hyder Mahal'],[-16,4,16,11,'Kandi/Condy Mahal'],[12,4,17,12,'Begum Mahal'],[-3,-20,18,12,'Badusha Mahal']].entries())W.building({rect:[x,y,w,d,0],base:H,storeys:2,storeyH:3.4,color:'stone',roof:'flat',windows:{style:'arch',spacing:2.8,w:1.1,h:2},kind:'palace',name:`${name} · location and footprint schematic`});
  W.building({rect:[-12,-48,12,9,0],base:H,storeys:1,storeyH:4,color:'plaster',roof:'flat',windows:{style:'arch',spacing:2.5,w:1,h:2},kind:'building',name:'St John’s Church · present-day cue; phase after 1846'});
  W.building({rect:[17,-48,13,10,0],base:H,storeys:1,storeyH:4,color:'stone',roof:'flat',windows:{style:'arch',spacing:2.4,w:0.9,h:1.8},kind:'building',name:'Mosque · footprint schematic'});
 },
 eras:[{id:'1580',year:'c. 1580',label:'Vijayanagara Nayaka-period interpretation',short:'Nayaka period',lens:'engraving',summary:'An illustrative fort core after the reported mid-sixteenth-century construction.',basis:'Vellore District describes a rectangular granite fort with a reported 3 km circumference, a moat, and Jalakandeswarar Temple inside. The district attributes construction to Bommu/Chinna Bommi Nayakar in the sixteenth century, while noting differing accounts.',conjecture:'The square side length is inferred from the circumference; fort corners, moat width, gateway, temple footprint and interior plan are not traced. Later palaces and the church are omitted from this earlier view.',sources:['VEL-01','VEL-02','VEL-03']},
 {id:'today',year:'Today',label:'Fort and its mixed-use interior',short:'Present',lens:'none',summary:'Explore the fort shell, temple and labeled palace/church/mosque blockouts.',basis:'District government describes Tippu, Hyder, Kandi, Badusha and Begum Mahals, Jalakandeswarar Temple, a mosque, a church and the Archaeological Survey of India museum.',conjecture:'All interior building placements are schematic; the moat and current water, gates, street circulation, visitor routes and current condition are not aligned to a measured plan or aerial.',sources:['VEL-01','VEL-02','VEL-03']}],
 pois:[{id:'temple',at:[28,20],title:'Jalakandeswarar Temple',text:'The district describes the sixteenth-century temple inside the fort. A Dravidian-style massing cue is included, but the actual plan and coordinates are not registered.',source:'https://vellore.nic.in/tourist-place/jalakandeshwarar-temple/'},
 {id:'moat',at:[-26,18],title:'Granite rectangle and moat',text:'The district reports a rectangular granite fort with a 3 km circumference. The model scales its square perimeter to that figure; wall vertices and moat width remain unverified.',source:'https://vellore.nic.in/tourist-place/vellore-fort/'},
 {id:'church',at:[0,28],title:'Later church and palace complex',text:'Government records identify the church and multiple mahal structures inside the fort. Their precise plans, locations and dates require architectural documentation.',source:'https://vellore.nic.in/archaeological-survey-of-india-asi-protected-monuments/'}]
});
