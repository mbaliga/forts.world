// Reis Magos, Goa. Plan coordinates are approximate metres east/north of
// 15.496500, 73.809130. Outer polygon: OpenStreetMap way 194550880 v12,
// © OpenStreetMap contributors, ODbL https://www.openstreetmap.org/copyright.
// Its outline agrees in broad form with Lopes (2018), fig. 7, based on 2014
// Google Earth imagery. It is not a measured architectural survey. The coarse elevation grid does not resolve fort terraces. Gateway profiles,
// building footprints and other local architectural details are approximate.
const outline=[[-61.9,18.4],[-49.2,28.5],[-41.8,24.8],[-23.9,46.4],[-26.2,51.5],[-16.7,66.2],[-11.6,51],[-15.9,46.9],[9.2,9.5],[13.5,11.5],[17.3,4.4],[44.7,-23.7],[46.1,-21.8],[48.9,-17.9],[60.8,-27.7],[53.9,-39.1],[50.3,-37.5],[33.4,-61.2],[4.1,-64.4],[4.2,-68.3],[-8.6,-69.6],[-8.7,-61.5],[-3.8,-60.9],[-0.6,-9.3],[-12.7,-7.7],[-12.1,-2.6]];
// OSM mapped present-day features, not survey or evidence of historic appearance.
const church=[[-46.5,133],[-41.7,121.4],[-24.3,129.6],[-23.6,127.7],[-4.6,135.6],[-2,136.6],[-1.1,133.5],[3.8,135.7],[1.9,140.7],[-3.7,156],[-6.9,154.8],[-11.7,167.9],[-32,159.6],[-29.4,153.1],[-39.8,149.2],[-35.6,138.3]];
// Present visitor reception outline; a mapped footprint, not a historic gate plan.
const reception=[[24.7,79.9],[35.9,84.7],[38.1,79.3],[44.3,64.2],[33,59.6]];
const cemetery=[[-37.6,111],[-57.4,151.4],[-70.7,143.4],[-51.1,106.4]];
// Shoreline follows OSM coastline locally; the far edge closes the water polygon.
const river=[[-180,-240],[180,-240],[180,-205],[59.9,-89.1],[44.8,-94.6],[34.2,-92.1],[19.2,-94.3],[-5.8,-93.8],[-18.7,-86.3],[-107.3,-81.7],[-180,-85.3]];
// Present road and pedestrian approach: OSM ways 330035641 and 1155294094.
const road=[[-180,-12],[-162.9,-14.7],[-139,-19],[-116.3,-32.5],[-77.8,-48.1],[-15.7,-73.1],[23.7,-70.2],[37.9,-62.6],[49.1,-51.5],[59.8,-37.9],[64.2,-26.2],[64.8,-25.1],[67.1,2],[64.8,21.8],[59.9,45.4],[55.6,64.3],[51.3,83.4],[46.9,92.7],[39.2,109],[23.7,148.4],[20.3,162],[28.6,178.6],[49,188.4],[69.4,196.5],[90,210]];
// OSM way 1155270354: retaining wall, not an identified fort rampart.
const riverRetainingWall=[[-113.2,-60.2],[-78.8,-61.8],[-43.9,-70.3],[-36.3,-72.2],[-17.6,-79.4],[5.7,-80.5],[22.4,-79.4],[36.5,-72.8],[43.7,-67.9],[49.4,-73.2],[56.2,-65.3],[52.3,-61.5],[68.1,-38.2],[71.3,-27],[74.4,-11.2]];
const approach=[[-7.2,90.5],[-4.4,82.4],[-0.8,71.8],[17.4,9.2],[18,5.2],[17.3,4.4]];
// Additional present-day mapped approaches and land-use outlines; no historic alignment implied.
const churchRoad=[[46.9,92.7],[33.3,85.8],[23,81.8],[15.9,83.4],[6.7,93.3],[3.6,99.9],[2.1,102.5],[0.6,105],[-1.7,105.5],[-5,105],[-6.4,102],[-7.2,90.5],[-13,88.8],[-29.3,94.8],[-38.2,100.5]];
const churchPath=[[2.1,102.5],[4.8,109.4],[4.6,112.5],[0.9,120.5],[-2,126.6],[-2.1,129.5],[-4.6,135.6]];
const lowerPath=[[46.1,-21.8],[43.6,-20.2],[43.9,-17.3],[46,-15.3],[48.7,-15.3],[57.2,-21.5],[64.2,-26.2]];
const parish=[[14.1,82.9],[36.4,89.2],[24,132.9],[1.7,126.6]];
const source='https://institutodehistoriadaarte.com/wp-content/uploads/2018/11/rha_13.pdf';
const pois=[
 {id:'upper',at:[-28,23],r:8,title:'Upper fort · plan-based outline',text:'An on-site visitor plan shows Hall 2 and the craft centre inside the citadel. Neither building is reconstructed in this scene. The outer trace is mapped, but the walls, interior and height have not been surveyed for this model.',source,evidence:'documented',positionEvidence:'inferred'},
 {id:'connection',at:[5,-12],r:8,title:'Descending walls',text:'Two walls connect the upper fort to the lower riverside works. Photographs show multiple stair flights and buildings; this scene has only one provisional stair and does not reproduce the full route or its elevations.',source,evidence:'documented',positionEvidence:'inferred'},
 {id:'battery',at:[22,-46],r:9,title:'Lower battery and the Mandovi',text:'The lower defensive platform faces the Mandovi. Goa Tourism identifies Reis Magos, Aguada, Cabo and the now-lost Gaspar Dias fort as part of the wider estuary defences. They are beyond this local scene; their positions and lines of fire are not reconstructed here. The pavilion masses and ground levels are approximate; cannon positions remain unknown.',source:'https://goa-tourism.com/fort/fort-aguada/',evidence:'documented',positionEvidence:'inferred'},
 {id:'river-road',at:[35,-69],r:8,title:'River road and retaining wall',text:'The nearby modern road and retaining-wall line follow OpenStreetMap. The wall height and construction are illustrative, and its date and relationship to the historic fort are not established.',source:'https://www.openstreetmap.org/way/1155270354',evidence:'documented',positionEvidence:'inferred'},
 {id:'approach',at:[12,42],r:8,title:'Eastern pedestrian approach',text:'OpenStreetMap records a present-day pedestrian way along this side, and a field study describes the steep approach to the fort and church. Road widths, surface and height in this scene are approximate.',source:'https://www.openstreetmap.org/way/1155294094',evidence:'documented',positionEvidence:'inferred'},
 {id:'reception',at:[45,76],r:7,title:'Visitor reception · mapped outline',text:'OpenStreetMap marks the present fort entry and reception here. This outline does not establish the historical gateway, the building elevations or the complete route through the fort.',source:'https://www.openstreetmap.org/way/618724201',evidence:'documented',positionEvidence:'inferred'},
 {id:'church',at:[18,149],r:8,title:'Reis Magos Church and steps',text:'The church footprint and approach steps are mapped from OpenStreetMap. A photograph shows the broad stair across the church frontage. The stair width, rise and railings, church mass and terrain are provisional; the interior is not reconstructed. Goa Government places the church below the fort and records a flight of steps.',source:'https://www.goa.gov.in/places/the-reis-magos-church/',evidence:'documented',positionEvidence:'inferred'},
 {id:'parish',at:[29,111],r:7,title:'Church parish centre · mapped area',text:'The present-day parish centre area and nearby paths follow OpenStreetMap. Buildings within the area, historical occupation and precise levels are not reconstructed.',source:'https://www.openstreetmap.org/way/1155270366',evidence:'documented',positionEvidence:'inferred'},
 {id:'cemetery',at:[-65,115],r:8,title:'Church cemetery',text:'The outline follows the present mapped cemetery boundary; graves, walls, elevations and historical dates have not been surveyed or reconstructed.',source:'https://www.openstreetmap.org/way/618726580',evidence:'documented',positionEvidence:'inferred'},
 {id:'water',at:[-10,8],r:8,title:'Water sources need verification',text:'Goa Government sources differ: one describes a spring east of the fort, another a spring within it. No precise spring coordinate or footprint is represented here.',source:'https://goa-tourism.com/fort/reis-magos-fort/',evidence:'documented',positionEvidence:'inferred'}
];
// SRTM30 sampled every 40 m; a coarse regional elevation surface, not a survey.
const elevationSamples=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 7, 10, 0, 0, 0, 0, 0, 8, 8, 8, 12, 18, 17, 12, 9, 1, 0, 0, 15, 14, 16, 22, 29, 26, 16, 8, 1, 0, 0, 25, 26, 26, 30, 34, 30, 17, 7, 0, 0, 0, 34, 36, 34, 33, 30, 24, 13, 5, 2, 0, 0, 41, 40, 37, 33, 24, 16, 11, 7, 4, 2, 0, 40, 40, 36, 31, 20, 13, 11, 8, 7, 5, 2, 38, 35, 31, 25, 19, 13, 12, 10, 9, 8, 5];
const elevationGrid={x0:-220,y0:-260,stride:40,nx:11,ny:12,data:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAAAAAAAAAAAAAACgAUABQAFAAjADIAAAAAAAAAAAAAACgAKAAoADwAGgBVAHwALQAFAAAAAAALAEYAUABuAFEAggCQAGgABQAAAAAAPQBCAIIAlgCqAJYAlQBjAAAAAAAAACoAtACqAKUAlgC4AEEAWQAKAAAAAAANAMgA+QClALgAUAB3ACMAFAAKAAAACADIAPQAmwCkAEEAdwAoACMAGQAKAD4ArwCbAL0AXwBBAHwAMgAtACgAGQA'};
function sampledHeight(x,y){
 const fx=Math.max(0,Math.min(10,(x+200)/40)),fy=Math.max(0,Math.min(11,(y+240)/40));
 const i=Math.min(9,Math.floor(fx)),j=Math.min(10,Math.floor(fy)),u=fx-i,v=fy-j;
 const z=(a,b)=>elevationSamples[b*11+a];
 return (1-v)*((1-u)*z(i,j)+u*z(i+1,j))+v*((1-u)*z(i,j+1)+u*z(i+1,j+1));
}
export default {
 id:'reis-magos-hand',name:'Reis Magos (hand level, kept for T2)',native:{text:'Reis Magos',lang:'en',script:'latn'},region:'Bardez · Goa',type:'Riverside fort · mapped research reconstruction',coords:[15.4965,73.80913],
 outline,poiCount:pois.length,pois,groundName:'Coarse sampled terrain',datum:0,datumLabel:'approximate metres above sea level',units:{planScale:1,vScale:1},bounds:[-180,-240,180,210],stride:2,navCell:1,navStep:0.62,seed:79,
 water:{sea:0,deep:'#2a5558',mid:'#3d6f6a',shallow:'#6f9a84',silt:'#8c9470'},view:{az:-40,el:40,zoom:80,introAt:[0,0],introZoom:230},light:{sky:'#dce3e0',sunAz:-125,sunEl:48},
 palette:{wall:'#924d37',wallTop:'#a5674b',trim:'#c48b6d',stone:'#98583e',plaster:'#e2d8c4',plasterDark:'#b8ab96',roof:'#a2563c',rock:'#755d4c',cliff:'#6d5547',grass:'#698947',dry:'#9a9365',road:'#b09a78',court:'#b3a386',paved:'#a8967b',sand:'#c7b592',field:'#78914f',mud:'#77604a',garden:'#698947',water:'#557d79',tank:'#527975',leaf:'#507238',leafDry:'#82945a',trunk:'#674b32',wood:'#61432f',door:'#503827',window:'#302a25',dome:'#e4dccb',flag:'#ba4036',accent:'#d7b085'},
 eraPalette:{today:{}},defaultEra:'today',
 eras:[{id:'today',year:'Today',label:'Mapped fort · research reconstruction',short:'Present',lens:'none',summary:'Explore the upper fort and lower battery linked down the Mandovi-facing slope.',basis:'The perimeter follows an OpenStreetMap outline and the two-level layout is checked against Lopes’s annotated 2014 aerial plan. Goa Tourism describes laterite walls and restoration from 2008.',conjecture:'The mapped polygon is not a surveyed wall plan. The church and cemetery use mapped present-day outlines, and the local riverbank follows a mapped coast trace. SRTM elevations are coarse and cannot resolve terraces or steps. Church mass and stair rise, broad stair width, gateway, internal stair route, road and retaining-wall dimensions, rooms and pavilion footprints remain approximate; the Hall 2 and craft-centre buildings shown on the site plan and the complete lower-level stair network are missing; the surroundings are incomplete. The present reconstruction cannot establish the precise appearance of the 1707 or 1710 fort.',sources:['REIS-01','REIS-02','REIS-03','REIS-04','REIS-05','REIS-06','REIS-07','REIS-08','REIS-09','REIS-10','REIS-11','REIS-12','REIS-13','REIS-14','REIS-15']}],
 terrain:()=>[{op:'base',h:1.2},{op:'grid',grid:elevationGrid},{op:'dig',poly:river,h:-3,edge:2},{op:'ramp',path:[[23.7,148.4,sampledHeight(23.7,148.4)],[1.9,140.7,sampledHeight(1.9,140.7)]],w:20,edge:3,paint:'paved'},{op:'paint',poly:cemetery,paint:'garden'},{op:'paint',path:road,w:5,paint:'road'},{op:'paint',path:churchRoad,w:4,paint:'road'},{op:'paint',path:churchPath,w:2,paint:'paved'},{op:'paint',path:lowerPath,w:2,paint:'paved'},{op:'paint',path:approach,w:3,paint:'paved'},{op:'paint',poly:outline,paint:'court'},{op:'paint',path:[[-25,25],[-10,9],[3,-8],[12,-26],[20,-45]],w:5,paint:'paved'},{op:'edge',h:-3,w:12}],
 build(W){
  W.water({poly:river,level:0,color:'#557d79'});
  // Approximate height and thickness; the source maps the line, not its elevation or date.
  W.wall({path:riverRetainingWall,closed:false,outer:'left',h:1,thick:0.4,batter:0,merlon:false,color:'stone',maxSeg:3});
  const wall=W.wall({path:outline,closed:true,outer:'left',h:4,thick:1.7,batter:0.08,parapet:{h:1,t:0.45},merlon:false,color:'wall',maxSeg:2});
  // Plan fig. 7 identifies an entrance near the junction of the two levels;
  // the opening's exact form and the accessible route remain provisional.
  W.gate({wall,at:[13.5,11.5],width:3,spring:2.7,style:'flat',towers:false,frame:false,doors:false,name:'Entrance · approximate plan position'});
  // A steep stair connects the levels in the field study; its exact path and rise are inferred.
  W.stairs({from:[0,-1,W.ground(0,-1)],to:[13,-27,W.ground(13,-27)],w:3,color:'stone',side:false});
  W.building({rect:[13,-43,11,5,8],base:W.ground(13,-43),storeys:1,storeyH:3.2,color:'plaster',roof:'tiled',windows:{style:'rect',spacing:3,w:0.8,h:1.2},kind:'building',name:'Lower pavilion · approximate footprint'});
  W.building({rect:[28,-32,9,5,43],base:W.ground(28,-32),storeys:1,storeyH:3.2,color:'plaster',roof:'tiled',windows:{style:'rect',spacing:3,w:0.8,h:1.2},kind:'building',name:'Lower pavilion · approximate footprint'});
  // The mapped footprint supplies position and plan only: generic mass, not a surveyed church.
  W.building({poly:church,base:W.ground(-20,145),h:8,color:'plaster',roof:'tiled',windows:false,kind:'building',name:'Reis Magos Church · provisional mass'});
  // Photo shows a broad flight at the church frontage; 20 m width is an inferred approximation, not a survey.
  W.stairs({from:[23.7,148.4,W.ground(23.7,148.4)],to:[1.9,140.7,W.ground(1.9,140.7)],w:20,color:'stone',side:true});
  W.zone(cemetery,'Church cemetery · mapped boundary, unsurveyed');
  W.zone(parish,'Church parish centre · mapped area, buildings not reconstructed');
  W.zone(reception,'Visitor reception · mapped outline; architecture unverified');
  for(const p of pois) W.poi(p);
  W.spawn(-27,20,W.ground(-27,20),-120);
 }
};
