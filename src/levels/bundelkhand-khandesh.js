// Illustrative exploration scenes; layouts and surrounding geography are not surveyed.
import {makeFort} from './gen.js';
const jhansi='https://jhansi.nic.in/history/';
const jhansiFort='https://jhansi.nic.in/tourist-place/jhansi-fort/';
const jhansiDistrict='https://jhansi.nic.in/others/';
const asir='https://burhanpur.nic.in/en/tourist-place/asirgarh/';
const asirHistory='https://burhanpur.nic.in/en/history/';
export const jhansiFortScene=makeFort({
 id:'jhansi',name:'Jhansi Fort',native:{text:'Jhansi',lang:'en',script:'latn'},region:'Jhansi · Uttar Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[25.461,78.576],
 type:'hill',seed:457,units:{planScale:4,vScale:4},size:{rx:110,ry:85},hill:{h:24,cliff:9,skirt:30},guardByEra:{'1620':'guard-rajput','1857':'guard-maratha'},people:6,flag:false,
 gates:[{a:65,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 extraBuild:(W,{era})=>{
  const now=era==='today';
  // The fort is embedded in Jhansi, not an isolated hill. These blocks communicate
  // that relationship without pretending to be georeferenced street footprints.
  const urban=[[[-176,-104],[-120,-104],[-120,-28],[-176,-28]],[[-175,34],[-120,34],[-120,106],[-175,106]],[[120,-105],[178,-105],[178,-30],[120,-30]],[[120,32],[178,32],[178,104],[120,104]]];
  urban.forEach((poly,i)=>{W.houses({poly,count:now?30:14,size:[5,8],h:now?[1,3]:[1,2],roof:'flat',seed:905+i,spacing:2.3});W.zone(poly,`Jhansi city context · illustrative block ${i+1}`);});
 },
 eras:[{id:'1620',until:1627,year:'c. 1620',label:'Bir Singh Deo period',short:'Bundela',lens:'engraving',summary:'An illustrative garrison after the fort’s construction.',basis:'Jhansi district dates construction by Bir Singh Deo of Orchha to 1613 and names the rocky Bangra hill within the town of Balwantnagar.',conjecture:'The real fort plan, town, terrain, gateways, buildings and garrison are not reconstructed. Figures are generic placeholders; the district page gives a construction range of 1606–27 while its history page gives 1613.',sources:['JHA-01','JHA-02']},
 {id:'1857',until:1858,year:'1857',label:'Rani Lakshmibai period',short:'1857',lens:'engraving',summary:'An illustrative scene during the 1857 uprising.',basis:'Jhansi district describes the fort as a resistance centre, lists the named gates and features, and separately documents Rani Lakshmibai’s move from the fort to Rani Mahal after annexation in 1853.',conjecture:'The 1857 architecture, city, defences and troop appearance are not reconstructed. This is not a simulation of the siege; Rani Mahal and its urban relationship to the fort are absent.',sources:['JHA-02','JHA-03']},
 {id:'today',year:'Today',label:'City fort context',short:'Present',lens:'none',summary:'Explore the fort as a rocky rise embedded in the modern city.',basis:'Jhansi district places the fort in the heart of the city and identifies ten gates, Karak Bijli tank, Rani Jhansi Garden, Shiva temple and memorials within the main fort. Current aerial imagery confirms dense urban fabric immediately around the hill.',conjecture:'The city blocks only express the documented urban relationship; they are not surveyed streets or current building footprints. The fort outline, ten gateway positions, tank, garden, monuments and present condition are not modeled or verified.',sources:['JHA-02','JHA-04']}],
 pois:[{id:'hill',at:[35,20],title:'Bangra hill in Jhansi city',text:'Jhansi district places the fort on the rocky Bangra hill in the heart of the city. The generated hill and surrounding city are not a geographic reconstruction.',source:jhansiFort},
 {id:'gates',at:[-30,15],title:'Ten named gateways',text:'The district lists ten gates, including Khandero, Datia, Unnao, Jharna, Laxmi, Sagar, Orchha, Sainyar and Chand gates. Their positions in this scene remain illustrative.',source:jhansiFort},
 {id:'resistance',at:[0,-20],title:'1857 and later history',text:'District sources describe Rani Lakshmibai’s role in 1857. The 1620 scene does not depict that later period, and the 1857 scene is not a siege reconstruction.',source:jhansiDistrict}]
});
export function buildAsirMosque(W,era){
 if(era !== '1590' && era !== 'today') return;
 W.mosque({x:-42,y:-42,w:14,d:9,h:5,domes:1,minarets:0,color:'#494b49',base:W.ground(-42,-42)});
}
export const asirgarh=makeFort({
 id:'asirgarh',name:'Asirgarh Fort',native:{text:'Asirgarh',lang:'en',script:'latn'},region:'Burhanpur · Madhya Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[21.471,76.293],
 type:'hill',seed:461,units:{planScale:4,vScale:5},size:{rx:135,ry:100},hill:{h:42,cliff:15,skirt:45},guard:'guard-mughal',people:6,flag:false,
 gates:[{a:60,name:'Approach · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 extraBuild:(W,{era})=>buildAsirMosque(W,era),
 eras:[{id:'1590',until:1591,year:'c. 1590',label:'Faruqi interpretation',short:'Faruqi period',lens:'engraving',summary:'An illustrative hill fort near the end of Faruqi rule.',basis:'Burhanpur district attributes a mosque in the upper fort to Raja Ali Khan in 1588 and describes Faruqi strengthening.',conjecture:'The fort’s 1590 plan, tiers, mosque geometry and placement, terrain, routes and garrison are inferred or unmodeled. Generic Mughal figures do not establish Faruqi dress.',sources:['ASI-K-01','ASI-K-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic hill fort.',basis:'Burhanpur district describes three fortification levels and a mosque and temple.',conjecture:'The three levels, real mosque, temple, fort plan, landscape and present condition are not reconstructed; the generic dark-stone mosque is an illustrative cue.',sources:['ASI-K-01','ASI-K-02']}],
 pois:[{id:'mosque',at:[-42,-26],title:'Jama Masjid',text:'Burhanpur district dates Raja Ali Khan’s mosque in the upper fort to 1588. This dark-stone model is generic; its plan, position and architectural details are inferred.',source:asirHistory},
 {id:'levels',at:[35,20],title:'Three fortification levels',text:'The district describes Malaygarh, Kamargarh and Asirgarh as three fortified levels. They are not reconstructed in this scene.',source:asir},
 {id:'temple',at:[-30,15],title:'Gupteshwar Mahadev',text:'Burhanpur district identifies a Shiva temple at Asirgarh. Its architecture and position are not modeled.',source:asir}]
});
