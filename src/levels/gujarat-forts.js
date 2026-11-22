// Illustrative fort scenes. The landscapes, plans and monuments are not surveyed.
import {makeFort} from './gen.js';
const up='https://gujarattourism.com/saurashtra/junagadh/uparkot-fort.html';
const pav='https://whc.unesco.org/en/list/1101/';
const pavPlan='https://commons.wikimedia.org/wiki/File:Pavagadh_plan_1847_by_J_Ramsay.jpg';
// J. Ramsay's 1847 plan has a 500-yard-per-inch scale bar. The downloaded scan
// measures about 263 px/in, so these local plan coordinates use ~1.73 m/px.
// The plan is not georeferenced: positions below are traced in its own frame.
const pavXY=(px,py)=>[+((px-1000)*1.73).toFixed(1),+((700-py)*1.73).toFixed(1)];
const pavPath=(points)=>points.map(([x,y])=>pavXY(x,y));
export const uparkot=makeFort({
 id:'uparkot',name:'Uparkot Fort',native:{text:'Uparkot',lang:'en',script:'latn'},region:'Junagadh · Gujarat',typeLabel:'Hill fort · inferred prototype',coords:[21.524,70.471],
 type:'hill',seed:293,units:{planScale:3,vScale:4},size:{rx:95,ry:72},hill:{h:25,cliff:8,skirt:40},guard:'guard-rajput',cannons:false,people:5,flag:false,
 rockSteps:[{only:'today',from:[24,20],to:[37,20],well:[41,20],w:4,depth:4,radius:3}],
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1460',year:'c. 1460',label:'Fifteenth-century interpretation',short:'Phase uncertain',lens:'engraving',summary:'An illustrative garrison associated with the fort’s fifteenth-century history.',basis:'Gujarat Tourism describes an inscription of Mandalika III dated 1450 and stepwells at the fort.',conjecture:'The exact 1460 ownership and architecture, stepwells, gateways, rock, walls, dimensions and guard appearance are not reconstructed. The later cannon is not shown.',sources:['UPA-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'Gujarat Tourism describes the fort, stepwells, caves and later structures.',conjecture:'The small rock-cut stair and shaft are schematic and not to scale; their position and orientation are inferred. Navghan Kuvo, caves, fort plan and current conditions are not surveyed.',sources:['UPA-01']}],
 pois:[{id:'stepwell',at:[20,25],title:'Adi Kadi Vav',text:'The Junagadh district describes a rock-cut stair descending to a well shaft. The present-day scene includes a small illustrative stair and shaft; their scale, position and orientation are inferred. The 1460 scene omits them because the exact construction date is uncertain.',source:'https://junagadh.nic.in/tourist-place/adi-kadi-vav/'},
 {id:'well',at:[-30,15],title:'Navghan Kuvo',text:'The tourism account describes a deep well and spiral staircase. They are not reconstructed in this scene.',source:up},
 {id:'cannon',at:[0,-20],title:'A later cannon',text:'The tourism account describes a cannon brought from Diu after a mid-sixteenth-century siege. It is not included in the earlier scene.',source:up}]
});
export const pavagadh=makeFort({
 id:'pavagadh',name:'Champaner–Pavagadh',native:{text:'Pavagadh',lang:'en',script:'latn'},region:'Panchmahal · Gujarat',typeLabel:'Hill fort · reconstructed from Ramsay’s 1847 plan (schematic heights)',coords:[22.486,73.530],
 type:'hill',seed:307,units:{planScale:1,vScale:3},size:{rx:1250,ry:850},hill:{h:160,cliff:36,skirt:500,pathSide:1},stride:10,navCell:4,navStep:5,guard:false,people:0,flag:false,trees:170,slopeTrees:850,defaultEra:'1847~built',
 outline:pavPath([[270,520],[325,390],[470,300],[615,285],[690,325],[760,315],[870,275],[950,225],[1040,255],[1115,350],[1110,465],[1090,580],[1170,610],[1270,560],[1390,505],[1515,490],[1650,525],[1735,635],[1710,785],[1740,960],[1710,1115],[1600,1175],[1430,1160],[1275,1105],[1160,1135],[1060,1200],[900,1190],[760,1155],[690,1050],[700,900],[620,780],[500,735],[365,690],[290,610]]),
 wallPath:pavPath([[320,545],[322,430],[385,358],[490,320],[590,328],[625,365],[678,355],[760,300],[868,292],[934,246],[985,260],[1036,320],[1077,358],[1080,454],[1070,545],[1092,630],[1052,665],[930,668],[826,688],[720,678],[647,646],[570,664],[478,678],[390,642],[326,596]]),
 additionalWalls:[
   {path:pavPath([[1100,390],[1190,355],[1300,345],[1420,365],[1530,360],[1655,385],[1690,455],[1650,505],[1535,494],[1420,510],[1320,550],[1210,566],[1120,520]]),label:'Eastern fortification · line traced from the 1847 plan',wallStyleByEra:{'1847':{h:0.5,thick:0.5,parapet:false,merlon:false,color:'stone'},'1847~built':{h:8.5,thick:3,color:'wall'}},gatesByEra:{'1847~built':[{at:pavXY(1610,330),width:3.5,name:'Itak Gate · schematic form'}]}},
   {path:pavPath([[625,645],[680,690],[760,713],[858,726],[930,755],[1040,765],[1110,810],[1142,910],[1110,1010],[1060,1100],[930,1130],[805,1115],[730,1070],[716,950],[705,825]]),label:'Southern enclosure · line traced from the 1847 plan',wallStyleByEra:{'1847':{h:0.5,thick:0.5,parapet:false,merlon:false,color:'stone'},'1847~built':{h:8.5,thick:3,color:'wall'}},gatesByEra:{'1847~built':[{at:pavXY(1260,875),width:3.4,name:'Pataipul Gate · schematic form'},{at:pavXY(825,714),width:3.2,name:'Sury Gate · schematic form'},{at:pavXY(790,739),width:3.2,name:'Tira Gate · schematic form'}]}},
   {path:pavPath([[1190,610],[1260,580],[1340,590],[1400,655],[1450,730],[1465,835],[1540,875],[1640,900],[1690,980],[1680,1100],[1615,1130],[1575,1040],[1500,1015],[1445,950],[1360,925],[1270,850],[1210,755]]),label:'South-eastern wall circuit · line traced from the 1847 plan',wallStyleByEra:{'1847':{h:0.5,thick:0.5,parapet:false,merlon:false,color:'stone'},'1847~built':{h:8.5,thick:3,color:'wall'}},gatesByEra:{'1847~built':[{at:pavXY(1355,525),width:3.2,name:'Mahoti Gate · schematic form'},{at:pavXY(1440,540),width:3.2,name:'Budhiya Gate · schematic form'}]}}
 ],
 gates:[{a:90,name:'Chupra Gate · schematic form',main:true}],gatesByEra:{'1847':[],'1847~built':[{a:90,name:'Chupra Gate · schematic form',main:true}]},
 wallStyleByEra:{'1847':{h:0.5,thick:0.5,parapet:false,merlon:false,coping:false,color:'stone'},'1847~built':{h:8.5,thick:3.2,parapet:{h:1.1,t:0.5},merlon:true,color:'wall'}},
 bastionAnglesByEra:{'1847':[],'1847~built':[30,65,100,135,170,205,240,275,310,345]},bastionR:5,bastionGateClearance:28,
 buildings:[
   {name:'Nagarpur Mehel · schematic blockout',x:pavXY(860,300)[0],y:pavXY(860,300)[1],w:55,d:34,kind:'palace',storeys:2,only:'1847~built'},
   {name:'Machhi Haveh · schematic blockout',x:pavXY(1280,760)[0],y:pavXY(1280,760)[1],w:34,d:28,kind:'palace',only:'1847~built'},
   {name:'Patai Raval Mehel · schematic blockout',x:pavXY(1510,1075)[0],y:pavXY(1510,1075)[1],w:45,d:28,kind:'palace',only:'1847~built'}
 ],
 temples:[{x:pavXY(1630,1080)[0],y:pavXY(1630,1080)[1],w:20,h:24,style:'nagara',only:'1847~built'}],
 tanks:[
  {x:pavXY(1440,255)[0],y:pavXY(1440,255)[1],rx:24,ry:16,name:'Medhi Tank · schematic basin',only:'1847~built'},
  {x:pavXY(1315,820)[0],y:pavXY(1315,820)[1],rx:17,ry:29,name:'Annapurna Tank · schematic basin',only:'1847~built'},
  {x:pavXY(1395,805)[0],y:pavXY(1395,805)[1],rx:12,ry:23,name:'Teliva Tank · schematic basin',only:'1847~built'},
  {x:pavXY(920,695)[0],y:pavXY(920,695)[1],rx:14,ry:28,name:'Sacha Tank · schematic basin',only:'1847~built'},
  {x:pavXY(815,975)[0],y:pavXY(815,975)[1],rx:11,ry:24,name:'Dalit Tank · schematic basin',only:'1847~built'}
 ],
 eras:[
  {id:'1847',year:'1847',label:'Ramsay plan · traced linework',short:'Plan traces',lens:'none',summary:'Inspect the fortification circuits and plan labels in a flat, unraised trace view.',basis:'Fortification traces and feature positions follow J. Ramsay’s 1847 British Library plan in a local coordinate frame. The plan is not georeferenced.',conjecture:'Wall line thickness is display-only and height is kerb-high. Relief, water depths, structure heights, gate forms and present survival are not represented in this layer.',sources:['PAV-01']},
  {id:'1847~built',year:'1847',label:'1847 · constructed schematic',short:'Constructed ✦',layer:'constructed',lens:'none',summary:'View the plan traced fort circuits rising over a forested hill, with an ascending switchback and the named Bhadra Kali temple.',basis:'Plan-traced footprints and gate positions are converted into a schematic hill-fort scene. The 1847 plan supplies the fort circuits, named route and Bhadra Kali temple position; UNESCO identifies Pavagadh as a high hill in a landscape of forests, fortifications, temples and waterworks.',conjecture:'The hill relief, scarp, talus, switchback grade, 8.5 m rampart height, gate heights, bastion forms, vegetation density and palace/temple/tank dimensions are visual assumptions, not measured facts. The model is not registered to a DEM; the 1847 plan remains its own local frame.',sources:['PAV-01']}
 ],
 eraPalette:{'1847~built':{wall:'#bb9457',wallTop:'#c7a56c',trim:'#e0c18c',stone:'#b99a6a',plaster:'#cfb17b',plasterDark:'#a98d60',roof:'#9e7449',rock:'#9e8c6e',cliff:'#8a7b62',grass:'#6f8a3c',dry:'#a89060',road:'#9a7a56',court:'#a99a80',paved:'#8f877c',sand:'#c9b48a',accent:'#d2ac62'}},
 pois:[
  {id:'capital',at:pavXY(990,690),title:'Champaner capital',text:'UNESCO describes the Gujarat Sultanate capital at the foot of Pavagadh after the 1484 conquest. The city below the hill is outside this hill-fort plan reconstruction.',source:pav},
  {id:'medhi',at:pavXY(1480,280),title:'Medhi Tank · plan position',text:'Water tank label and position read from J. Ramsay’s 1847 plan; marker is offset to dry ground and tank dimensions are schematic.',source:pavPlan},
  {id:'bhadra-kali',at:pavXY(1630,1080),title:'Bhadra Kali Temple · plan position',text:'Temple label and position read from the 1847 plan. The current shrine’s form and survival are not reconstructed.',source:pavPlan},
  {id:'gate-sequence',at:pavXY(1070,605),title:'Fort gates and hill routes',text:'Chupra, Mahoti, Itak and other gate labels appear on the 1847 plan. Their points follow the drawing; approach routes are not fully digitized.',source:pavPlan}
 ]
});
