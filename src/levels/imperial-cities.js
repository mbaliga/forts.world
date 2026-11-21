// These scenes are illustrative enclosures, not reconstructions of the historical cities.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const tug='https://www.delhitourism.gov.in/aboutus/tughlakabad.html';
const fateh='https://whc.unesco.org/en/list/255/';
const waterSource='https://asia-archive.si.edu/wp-content/uploads/2017/11/the-lotus-garden-muqarnas.pdf';
const tugPlan='https://ignca.gov.in/Asi_data/87960.pdf';
// Hand-traced from ASI/IGNCA inventory figure 138(a), page 190. The outline is
// normalized to the inventory's stated 6.5 km circuit and rendered at 1 world
// plan unit = 4 m. Its position/orientation still needs aerial georegistration.
const TUG_CX=1032,TUG_CY=380,TUG_M_PER_PX=6500/2330.95689506249,TUG_PLAN_SCALE=4;
const tugPoint=([x,y])=>[(x-TUG_CX)*TUG_M_PER_PX/TUG_PLAN_SCALE,(TUG_CY-y)*TUG_M_PER_PX/TUG_PLAN_SCALE];
const TUG_OUTLINE=[[801,42],[862,58],[945,65],[1008,95],[1104,107],[1176,119],[1224,137],[1260,159],[1320,189],[1403,202],[1450,231],[1430,268],[1390,300],[1410,326],[1368,356],[1300,386],[1260,425],[1210,455],[1187,486],[1170,520],[1110,548],[1070,574],[1024,601],[970,637],[925,663],[878,695],[845,715],[802,704],[770,668],[740,645],[710,606],[680,573],[655,535],[642,497],[626,456],[625,421],[615,387],[621,346],[648,313],[672,272],[706,226],[734,182],[760,150],[785,105]].map(tugPoint);
const TUG_CITADEL=[[1088,566],[1106,543],[1137,529],[1160,522],[1166,544],[1153,566],[1136,584],[1112,592],[1093,581]].map(tugPoint);
const TUG_PALACE=[[771,669],[802,704],[845,715],[878,695],[925,663],[953,637],[969,605],[956,578],[923,563],[888,572],[854,593],[821,620],[795,647]].map(tugPoint);
const TUG_VILLAGE=[[1048,187],[1100,193],[1147,210],[1167,245],[1159,293],[1140,337],[1111,369],[1081,383],[1055,361],[1037,326],[1031,284],[1034,240]].map(tugPoint);
const TUG_CITY_BLOCK=[[661,304],[785,104],[954,71],[1175,119],[1258,159],[1240,217],[1170,243],[1094,213],[1036,181],[970,191],[900,218],[832,255],[762,290]].map(tugPoint);
const TUG_APPROACH=[[[1410,326],[1368,356],[1300,386],[1260,425],[1210,455],[1187,486],[1170,520]],[[1260,159],[1237,211],[1208,270],[1180,322],[1151,372]]].map(path=>path.map(tugPoint));
function buildTughlaqabad(W,{era,H}){
 const historic=era==='1325';
 W.zone(TUG_OUTLINE,'ASI/IGNCA plan 138(a): outer city wall, manually traced; georeferencing pending');
 W.zone(TUG_CITADEL,'Citadel footprint traced from ASI/IGNCA plan 138(a)');
 W.zone(TUG_PALACE,'Palace area traced from ASI/IGNCA plan 138(a)');
 W.zone(TUG_VILLAGE,'Tughlaqabad Village extent shown in ASI/IGNCA plan 138(a)');
 const merlon={style:'plain',w:0.9,gap:0.8,h:0.7};
 const citadelWall=W.wall({path:TUG_CITADEL,closed:true,h:8,thick:2.6,batter:0.06,parapet:{h:1,t:0.5},merlon,color:'wall',walk:false});
 W.gate({wall:citadelWall,at:[39,-130],width:2.8,spring:2.8,rise:1.4,style:'pointed',towers:false,name:'Citadel entrance · exact position unverified',doors:historic,frameUp:1,floor:W.ground(39,-130)});
 // The plan marks a palace area but not a continuous inner curtain here; retain
 // its footprint as an area cue instead of inventing a sealed second enclosure.
 const settlement=historic?TUG_CITY_BLOCK:TUG_VILLAGE;
 W.houses({poly:settlement,count:historic?54:30,size:[4,7],h:historic?[1,2]:[1,2],roof:'flat',seed:409,spacing:2.2});
 W.zone(settlement,historic?'Northern residential city · broad fill only; individual houses are inferred':'Present village area · broad fill only; individual houses are inferred');
}
// Five open columned storeys communicate the documented form; all dimensions and placement are inferred.
// The earlier scene omits this feature until its construction date is established.
export function buildPanchMahal(W, era) {
 if (era !== 'today') return;
 let base = W.ground(25,-42);
 const levels = [
  {x:25,y:-42,w:22,d:16,cols:[6,5]}, {x:22,y:-43,w:17,d:12,cols:[5,4]},
  {x:19,y:-44,w:12,d:9,cols:[4,3]}, {x:16,y:-45,w:8,d:6,cols:[3,2]},
  {x:14,y:-46,w:4,d:3,cols:[2,2]}
 ];
 for (const floor of levels) {
  const result = W.pavilion({...floor,base,plinth:0,colH:2.5,inner:true,roof:'flat',color:'stone',parapet:false,walk:false,stairs:false,kind:'palace'});
  base = result.roofTop;
 }
}

// The square tank and four walkways follow published descriptions; placement and scale are illustrative.
export function buildAnupTalao(W, era) {
 if (era !== 'today') return;
 const x=-42, y=-42, h=W.ground(x,y);
 W.tank({poly:rectPts(x,y,20,20,0),rim:h,waterDepth:1.5,tiers:3,color:'stone'});
 for (const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
  W.bridge({from:[x+dx*10,y+dy*10],to:[x+dx,y+dy],w:2,h:h+0.15,color:'stone',rail:false,deck:0.3});
 }
}
export const tughlaqabad=makeFort({
 id:'tughlaqabad',name:'Tughlaqabad',native:{text:'Tughlaqabad',lang:'en',script:'latn'},region:'Delhi · India',typeLabel:'Fortified city · inferred prototype',coords:[28.513,77.262],
 type:'hill',seed:409,units:{planScale:TUG_PLAN_SCALE,vScale:4},size:{rx:292,ry:235},outline:TUG_OUTLINE,wallPath:TUG_OUTLINE,hill:{h:22,cliff:5,skirt:20},wallH:12.5,wallT:2.7,bastionStep:30,bastionR:2.7,trees:0,slopeTrees:0,guard:false,people:0,visitors:0,todayPeople:false,flag:false,cannons:false,spawnInside:[0,0],
 extraTerrain:()=>[...TUG_APPROACH.map(path=>({op:'paint',path,w:5,paint:'road'})),{op:'ramp',path:[[80,-159,21],[76,-148,15],[70,-137,9],[65,-128,4.8]],w:6,edge:2,paint:'road'}],extraBuild:buildTughlaqabad,
 gates:[{a:22,name:'Eastern approach gate · plan-traced bearing; identity unresolved',main:true},{a:148,name:'North-west wall gate · plan-traced bearing; identity unresolved'},{a:-63,name:'Citadel approach gate · plan-traced bearing; identity unresolved'}],buildings:[],
 eras:[{id:'1325',year:'c. 1325',label:'Early Tughlaq interpretation',short:'Tughlaq period',lens:'engraving',summary:'A plan-based blockout of the early fortified city.',basis:'The outer wall, eastern citadel, southern palace area, northern city and approach alignments are traced from ASI/IGNCA inventory figure 138(a). Its accompanying text describes the scarped Aravalli outcrop, 6.5 km circuit, 10–15 m rubble wall, bastions and gates.',conjecture:'The plan is manually digitized, scaled to the stated perimeter, and not georeferenced to current terrain or aerial imagery. Gate identity, vertical relief, masonry profile, palace/citadel wall heights, exact street grid, structure footprints and individual houses remain inferred or unknown; generic Mughal figures do not represent a fourteenth-century uniform.',sources:['TUG-01','TUG-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore the measured-plan blockout and present village extent.',basis:'The ASI/IGNCA plan labels the old city, citadel, palace area, Tughlaqabad Village, gates and Qutb–Badarpur approach; its text gives the outer wall circuit and rubble-wall height.',conjecture:'The current village fill is schematic. No recent aerial has been compared or aligned; modern Delhi edge, Adilabad causeway, current degradation, inaccessible/occupied areas and building-by-building condition are not represented.',sources:['TUG-01','TUG-02']}],
 pois:[{id:'town',at:[-82,176],title:'Tughlaqabad city and village',text:'The ASI/IGNCA site plan labels the northern city and a separate village enclosure; broad settlement polygons are now placed from that plan, while individual houses remain inferred.',source:tugPlan},
 {id:'dynasty',at:[50,-110],r:10,title:'Eastern citadel approach',text:'The ASI/IGNCA plan places the rectangular citadel east of the palace area. Its local footprint is traced from the plan; building-by-building interiors remain unmodeled. The point marks the connected approach, not a verified interior location.',source:tugPlan},
 {id:'capital',at:[-92,-160],title:'Southern palace area',text:'The site plan places the palace area south of the northern city and west of the citadel. Its local footprint is traced; individual palace structures remain unknown.',source:tugPlan}]
});
export const fatehpurSikri=makeFort({
 id:'fatehpur-sikri',name:'Fatehpur Sikri',native:{text:'Fatehpur Sikri',lang:'en',script:'latn'},region:'Agra · Uttar Pradesh',typeLabel:'Fortified city · inferred prototype',coords:[27.094,77.661],
 type:'hill',shape:'square',seed:419,units:{planScale:4,vScale:4},size:{rx:145,ry:100},hill:{h:10,cliff:4,skirt:25},guard:'guard-mughal',people:8,flag:false,
 palette:{wall:'#a56f57',wallTop:'#b98468',stone:'#a67a64',rock:'#a88b72',dry:'#b9a885'},
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 extraBuild:(W,{era})=>{buildPanchMahal(W,era);buildAnupTalao(W,era);},
 eras:[{id:'1580',year:'c. 1580',label:'Akbar period',short:'Imperial capital',lens:'engraving',summary:'An illustrative settlement during Akbar’s period as capital.',basis:'UNESCO describes a rectangular planned city with a right-angle street grid, fortification on three sides, a six-kilometre wall, towers and nine gates, together with administrative, residential and religious quarters.',conjecture:'The published revenue map and city form have not been traced into this scene. This enclosure is not the fortified city: its plan, water system, fortifications, monuments, buildings and garrison remain unmodeled; individual monument phases around 1580 need further research.',sources:['FAT-01','FAT-03']},
 {id:'today',year:'Today',label:'Historic city',short:'Present',lens:'none',summary:'Explore a schematic enclosure.',basis:'UNESCO describes the surviving historic city and its monument complex; its 1984 documents include the revenue map of the area around the monuments.',conjecture:'The actual city, lake, monument locations and current condition are not modeled or compared to current aerials. The five-storey pavilion and square pool are approximate interpretations; dimensions, details, water level and positions are inferred.',sources:['FAT-01','FAT-02','FAT-03']}],
 pois:[{id:'city',at:[35,20],title:'Planned city',text:'UNESCO describes a planned city with a road grid and fortified walls on three sides. Neither its plan nor lake is reproduced here.',source:fateh},
 {id:'mosque',at:[-30,15],title:'Jama Masjid',text:'UNESCO dates the mosque’s completion to 1571–72. Its architecture and actual location are not modeled.',source:fateh},
 {id:'anup-talao',at:[-42,-27],title:'Anup Talao',text:'A published study describes a sunken tank with four narrow walks leading to a central platform. The present-day pool and bridges are illustrative, with inferred position, size, details and water level; the feature is omitted from the earlier scene pending dating research.',source:waterSource},
 {id:'panch-mahal',at:[25,-27],title:'Panch Mahal',text:'UNESCO describes Panch Mahal as an asymmetrical, five-storey columned structure. In the present-day scene an illustrative pavilion evokes this form; its position, dimensions and details are inferred. It is omitted from the 1580 scene pending a verified construction date.',source:fateh}]
});
