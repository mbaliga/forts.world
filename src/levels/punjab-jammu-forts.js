// Site-specific, playable interpretations for five remaining R22 sites.
// Published sources establish several landmark features, but none of these
// layouts has yet been traced from a measured plan. Do not present as surveys.
import { makeFort } from './gen.js';

const bahuSrc='https://jammu.nic.in/tourist-place/bahu-fort-jammu/';
const gobindSrc='https://amritsar.nic.in/tourist-place/gobindgarh-fort/';
const gobindPlan='https://nmma.nic.in/nmma/builtDetail.do?dynasty=61&refId=17687';
const bathindaSrc='https://bathinda.nic.in/tourist-place/quila-mubarak/';
const bathindaPlan='https://www.adaamritsar.gov.in/sites/default/files/documents/BTD_rpt_2011.pdf';
const patialaSrc='https://patiala.nic.in/architecture/';
const hariSrc='https://srinagar.nic.in/tourist-place/hari-parbat-fort/';
const hariArch='https://ignca.gov.in/Asi_data/18429.pdf';

export const bahu=makeFort({
 id:'bahu',name:'Bahu Fort, Jammu',native:{text:'Bahu',lang:'en',script:'latn'},region:'Jammu · Jammu and Kashmir',typeLabel:'Dogra hilltop fort · evidence-limited reconstruction',coords:[32.721,74.882],
 type:'hill',seed:601,shape:'octagon',units:{planScale:3,vScale:4},size:{rx:78,ry:58},hill:{h:24,cliff:8,skirt:34},guard:'guard-rajput',people:4,flag:false,bastionStep:38,bastionR:4,
 palette:{wall:'#967b68',wallTop:'#ad927b',stone:'#a98c73',rock:'#706b62',dry:'#a38c63'},
 gates:[{a:55,name:'Fort entry · position inferred',main:true}],innerWall:{k:0.58,h:4.2,gate:55},
 temples:[{x:-14,y:-5,w:6,h:8,style:'nagara'}],
 eras:[
  {id:'1840',year:'c. 1840',label:'Dogra-era fort and temple',short:'Dogra period',lens:'engraving',summary:'A playable interpretation of the Dogra-period fort after the present Kali temple was built.',basis:'The Jammu district account says Dogra rulers improved and extended the fort and dates the present Bave Wali Mata temple to shortly after Gulab Singh’s 1822 coronation.',conjecture:'No measured fort plan, Dogra phase drawing, temple plan or verified feature coordinates were available. The octagonal enclosure, two wall lines, temple footprint, slope and gate are inferred; the temple is a generic visual placeholder.',sources:['BAH-01']},
  {id:'today',year:'Today',label:'Fort and Bave Wali Mata temple',short:'Present',lens:'none',summary:'Explore a schematic model of the modern fort complex.',basis:'The district account locates Bahu Fort on a rock face above the left bank of the Tawi and identifies the temple within it.',conjecture:'The river, present terrain, walls, gate, temple architecture, gardens and surrounding city are not reproduced from survey data. Their placement and dimensions here are illustrative.',sources:['BAH-01']}
 ],
 pois:[
  {id:'tawi',at:[45,18],title:'Tawi River setting',text:'The Jammu district account places the fort on a rock face above the Tawi’s left bank. This local scene does not yet reproduce the river course or surveyed topography.',source:bahuSrc},
  {id:'temple',at:[-14,2],title:'Bave Wali Mata temple',text:'The district dates the present temple to shortly after 1822. The model uses a generic shrine as a location cue; its form and position are not measured.',source:bahuSrc},
  {id:'dogra',at:[22,-18],title:'Dogra rebuilding',text:'The district records Dogra improvements and extensions but gives no construction plan. The scene’s wall geometry is therefore a hypothesis, not a documented phase drawing.',source:bahuSrc}
 ]
});

export const gobindgarh=makeFort({
 id:'gobindgarh',name:'Gobindgarh Fort, Amritsar',native:{text:'Gobindgarh',lang:'pa',script:'guru'},region:'Amritsar · Punjab',typeLabel:'Square brick fort · documented features, inferred plan',coords:[31.632,74.856],
 type:'moat',seed:607,shape:'square',units:{planScale:3,vScale:4},size:{rx:78,ry:78},moatWidth:7,wallH:7,wallT:4,bastionStep:900,bastionAngles:[45,135,225,315],bastionR:9,cannons:true,guard:'guard-rajput',people:7,flag:false,
 palette:{wall:'#9e6851',wallTop:'#b47b61',stone:'#a66f56',plaster:'#d6c2a5',dry:'#a58d61',rock:'#8c755e'},
 gates:[{a:0,name:'Nalwa Gate · approach direction approximate',main:true},{a:180,name:'Second gate · position inferred',main:false}],
 buildings:[
  {name:'Toshakhana · footprint inferred',x:-28,y:-20,w:14,d:10,storeys:1,kind:'building'},
  {name:'Khas Mahal · footprint inferred',x:25,y:-20,w:16,d:10,storeys:1,kind:'building'},
  {name:'Haveli · footprint inferred',x:-26,y:20,w:18,d:12,storeys:1,kind:'building'},
  {name:'Darbar Hall · Company-period footprint inferred',x:25,y:22,w:18,d:12,storeys:1,kind:'building',only:'today',stands:true}
 ],
 eras:[
  {id:'1820',until:1845,year:'c. 1820',label:'Ranjit Singh-era stronghold',short:'Sikh Empire',lens:'engraving',summary:'A playable interpretation of the square fort and documented landmark set during the Sikh Empire.',basis:'Amritsar district, NMMA and Incredible India describe a square brick-and-lime fort with four bastions; the district lists Toshakhana, Khas Mahal, wells and haveli among Ranjit Singh-era features.',conjecture:'The exact 1820 wall plan, moat profile, gate positions, buildings, cannon placement and garrison have not been established from a dated measured plan. Listed buildings are simplified footprints; the Nalwa Gate bearing is approximate.',sources:['GOB-01','GOB-02','GOB-03']},
  {id:'today',year:'Today',label:'Fort heritage complex',short:'Present',lens:'none',summary:'Explore a schematic fort with features from several historical phases.',basis:'The district account identifies later East India Company additions including Darbar Hall and Anglo-Sikh Bungalow, alongside Maharaja-period buildings.',conjecture:'The scene does not depict verified present-day condition or exact building placement. Its walls, moat and building blocks are not a restoration survey.',sources:['GOB-01']}
 ],
 pois:[
  {id:'bastions',at:[-47,47],title:'Four corner bastions',text:'The NMMA and Ministry of Tourism describe four bastions and a square brick-and-lime plan. This model uses four corner bastions, but their dimensions and geometry remain unmeasured.',source:gobindPlan},
  {id:'nalwa',at:[50,0],title:'Nalwa Gate',text:'The Ministry of Tourism identifies Nalwa Gate as the principal entrance. Its bearing in this scene is approximate pending a site plan.',source:'https://www.incredibleindia.gov.in/en/punjab/amritsar/gobindgarh-fort'},
  {id:'buildings',at:[0,25],title:'Buildings from different phases',text:'The district lists Toshakhana, Khas Mahal, wells and haveli from the Maharaja’s time and Darbar Hall from the Company period. These generic blocks indicate phases; they do not reproduce the buildings.',source:gobindSrc}
 ]
});

export const bathinda=makeFort({
 id:'qila-mubarak-bathinda',name:'Qila Mubarak, Bathinda',native:{text:'Qila Mubarak',lang:'pa',script:'guru'},region:'Bathinda · Punjab',typeLabel:'Mounded fort · documented bastion count, inferred layout',coords:[30.211,74.946],
 type:'hill',seed:613,shape:'square',units:{planScale:3,vScale:4},size:{rx:41,ry:41},wallPath:[[-41,-41],[41,-41],[41,41],[-41,41]],hill:{h:11,cliff:4,skirt:20},wallH:7,bastionsPerSide:8,bastionsInteriorOnly:true,bastionGateClearance:0,bastionR:1.7,cornerBastionR:4.2,guard:'guard-rajput',people:5,flag:false,cannons:false,spawnInside:[0,0],
 palette:{wall:'#92775f',wallTop:'#a88b70',stone:'#9b8066',rock:'#86745f',dry:'#b6a076'},
 gates:[{a:40,name:'Entry · position inferred',main:true}],innerWall:{k:0.5,h:4,gate:40},
 buildings:[{name:'Gurdwara · footprint inferred',x:0,y:-20,w:14,d:10,storeys:1,kind:'building'}],
 eras:[
  {id:'1835',year:'c. 1835',label:'Sikh-period fort and gurdwara',short:'Sikh period',lens:'engraving',summary:'A square-plan interpretation that separates the documented 32 small bastions from four larger corner bastions.',basis:'The 2011 Bathinda planning document describes the fort as square on elevated ground, with 32 small bastions and four large bastions at the corners; it dates the gurdwara building to 1835. Its protected-area figure is about 5.92 hectares, used here only as a rough scale constraint.',conjecture:'The count and four-corner placement are documented; evenly spaced positions, precise side dimensions, heights, wall profile, inner wall, gate and gurdwara footprint are inferred. This is a count-faithful layout blockout, not a traced ASI plan.',sources:['BAT-01','BAT-02']},
  {id:'today',year:'Today',label:'Fort and gurdwara',short:'Present',lens:'none',summary:'Explore the surviving fort’s approximate defensive outline.',basis:'The district identifies the fort as a landmark in Bathinda and the 2011 planning document inventories the fort and its plan.',conjecture:'Present-day wall condition, internal buildings, urban context and land levels are not reconstructed from a current survey.',sources:['BAT-01','BAT-02']}
 ],
 pois:[
  {id:'plan',at:[10,10],title:'Square fort on raised ground',text:'The Bathinda planning document describes a square plan and a protected area of about 5.92 hectares. The scene uses the area only as a rough scale constraint; the wall corners remain approximate.',source:bathindaPlan},
  {id:'bastions',at:[-40,35],title:'Thirty-two small and four large bastions',text:'The planning document records 32 small bastions and four larger corner bastions. This blockout now represents the count and corner distinction; the precise spacing and dimensions remain inferred.',source:bathindaPlan},
  {id:'gurdwara',at:[20,-22],title:'Gurdwara within the fort',text:'The planning document dates the surviving gurdwara structure to 1835. The model’s footprint is illustrative pending a measured plan.',source:bathindaPlan}
 ]
});

export const patiala=makeFort({
 id:'qila-mubarak-patiala',name:'Qila Mubarak, Patiala',native:{text:'Qila Mubarak',lang:'pa',script:'guru'},region:'Patiala · Punjab',typeLabel:'Layered palace-fort · phase relationships documented, plan inferred',coords:[30.329,76.400],
 type:'hill',seed:617,shape:'octagon',units:{planScale:3,vScale:4},size:{rx:80,ry:67},hill:{h:7,cliff:3,skirt:16},wallH:6,bastionStep:38,bastionR:4,guard:'guard-rajput',people:7,flag:false,cannons:false,
 palette:{wall:'#a77b5f',wallTop:'#bd9274',stone:'#a88065',plaster:'#ddc7a2',dry:'#a99465'},
 gates:[{a:55,name:'Outer gate · position inferred',main:true}],innerWall:{k:0.54,h:5,gate:55},
 buildings:[
  {name:'Qila Androon · position inferred',x:0,y:-3,w:30,d:24,storeys:2,kind:'building'},
  {name:'Darbar Hall · position inferred',x:26,y:22,w:18,d:12,storeys:2,kind:'building',only:'today',stands:true},
  {name:'Secretariat · position inferred',x:-26,y:20,w:16,d:11,storeys:2,kind:'building',only:'today',stands:true}
 ],
 eras:[
  {id:'1765',year:'c. 1765',label:'Ala Singh’s palace-fort',short:'Early Patiala',lens:'engraving',summary:'An interpretation of the early masonry fort after Ala Singh’s expansion.',basis:'Patiala district says the site began as a mud fort, became a masonry fort after Ala Singh’s conquest of Sirhind, and that Ala Singh built Qila Androon on a mound.',conjecture:'The exact 1765 outline, gate, building positions, elevations and architectural details are not taken from a measured plan. The generic walls and palace blocks express the documented layering only.',sources:['PAT-01']},
  {id:'today',year:'Today',label:'Layered palace complex',short:'Present',lens:'none',summary:'Explore the compound relationship between Qila Androon and the later outer court.',basis:'Patiala district attributes the outer zone between Qila Androon and the outer walls, including Darbar Hall and Secretariat, to Maharaja Karam Singh.',conjecture:'The model’s octagonal outline, building shapes and locations are schematic; it is not a survey of the present palace complex.',sources:['PAT-01']}
 ],
 pois:[
  {id:'androon',at:[0,14],title:'Qila Androon',text:'The district identifies this as Ala Singh’s inner enclosure, built on a mound. Its plan and actual position in this playable model have not been surveyed.',source:patialaSrc},
  {id:'outercourt',at:[28,17],title:'Karam Singh’s outer court',text:'The district attributes the outer section, Darbar Hall and Secretariat to Karam Singh. The scene keeps these later structures in a separate outer zone, with inferred placements.',source:patialaSrc},
  {id:'origins',at:[-30,15],title:'From mud fort to masonry fort',text:'Patiala district records a kachi garhi followed by Ala Singh’s pacca qila after the conquest of Sirhind. The earlier mud fort has no separate scene yet.',source:patialaSrc}
 ]
});

export const hariParbat=makeFort({
 id:'hari-parbat',name:'Hari Parbat Fort, Srinagar',native:{text:'Koh-i-Maran',lang:'ks',script:'arab'},region:'Srinagar · Jammu and Kashmir',typeLabel:'Mughal hill enclosure and Durrani summit fort · schematic',coords:[34.104,74.812],
 type:'hill',seed:619,shape:'hexagon',units:{planScale:4,vScale:4},size:{rx:95,ry:67},hill:{h:42,cliff:12,skirt:48},wallH:7,bastionStep:28,bastionR:5,guard:'guard-mughal',people:6,flag:false,
 palette:{wall:'#797b74',wallTop:'#93948a',stone:'#85867c',rock:'#646c69',cliff:'#535e5c',dry:'#9d9778',grass:'#7f9266'},
 gates:[{a:28,name:'Summit entrance · position inferred',main:true}],innerWall:{k:0.56,h:5,gate:28},
 eras:[
  {id:'1810',year:'c. 1810',label:'Later summit fort',short:'Afghan period',lens:'engraving',summary:'An illustrative summit fort following Atta Muhammad Khan’s works.',basis:'Srinagar district attributes the current summit structure to Afghan governor Atta Muhammad Khan in the eighteenth century. The fort catalogue records 1808 as a more specific construction date, which needs primary-source confirmation.',conjecture:'The summit fort is not a measured plan. Its hexagonal enclosure, inner wall and approach are interpretive. This scene does not include the earlier Mughal retaining wall or its two named gates.',sources:['HAR-01','HAR-02']},
 {id:'today',year:'Today',label:'Fort on Koh-i-Maran',short:'Present',lens:'none',summary:'Explore a schematic summit fort above Srinagar.',basis:'The district places Hari Parbat west of Dal Lake and states that the site is maintained by ASI.',conjecture:'The summit and city topography, present structures, gates, Dal Lake and nearby religious sites are not modeled to survey. The approximate catalogue coordinate should be reconciled with a verified site point.',sources:['HAR-01','HAR-02']}
 ],
 pois:[
  {id:'hill',at:[-34,5],title:'Koh-i-Maran above Srinagar',text:'The district situates Hari Parbat west of Dal Lake. This isolated playable hill does not model the city or lake shore.',source:hariSrc},
  {id:'akbar-wall',at:[36,12],title:'Akbar’s 1590 retaining wall',text:'The district records the 1590 wall. The architectural account identifies Kathi Darwaza and Sangin Darwaza as surviving Mughal gateways. Their route and gate geometry are not reconstructed in this scene.',source:hariArch},
  {id:'durrani',at:[0,-5],title:'Later summit citadel',text:'The current summit fort belongs to a later Afghan phase, not Akbar’s original enclosure. The district attributes it to Atta Muhammad Khan but gives a broad eighteenth-century date; 1808 in this catalogue needs further primary-source checking.',source:hariSrc}
 ]
});
