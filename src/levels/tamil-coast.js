// Illustrative scenes; architectural phases and site layouts are not surveyed.
import {makeFort} from './gen.js';
import {mirjan} from './kanara-malabar.js';
const thi='https://pudukkottai.nic.in/tourist-place/thirumayam-fort/';
const stg='https://chennai.nic.in/tourism/places-of-interest/';
// Mapped present-day wall segments and Vishnu temple precinct, not a full historic fort.
// © OpenStreetMap contributors, ODbL; local origin 10.2477 N, 78.7512 E.
const thiWall=[[34.7, 21.3], [33.3, 25.3], [28.8, 25.3], [27.9, 24.7], [24.3, 22.2], [18.8, 19.6], [14.1, 18.7], [12.1, 21.1], [4.6, 20.6], [-3.4, 18.0], [-5.7, 11.4], [-7.5, 3.4], [-15.0, -15.7], [-15.3, -18.1], [-17.5, -34.0], [-16.6, -47.1], [-13.3, -53.4], [-12.3, -57.3], [-11.9, -60.8], [-8.1, -65.8], [-1.4, -63.6], [5.6, -61.2], [11.9, -60.3], [14.3, -59.8], [15.2, -69.6], [22.4, -67.5], [21.5, -61.5], [21.7, -61.0], [24.3, -56.4], [35.8, -50.2], [43.0, -46.7], [50.2, -43.3], [53.5, -44.6], [57.9, -46.7], [61.5, -47.1], [64.1, -46.4], [67.9, -49.0], [72.5, -47.9], [75.9, -41.2], [79.7, -30.2], [81.0, -23.8], [81.0, -20.2], [80.9, -18.3], [77.9, -15.2], [78.2, -10.7], [73.2, -7.5], [66.2, -0.8], [62.4, 6.2], [57.9, 10.0], [54.3, 13.1], [54.9, 17.4], [51.5, 20.0], [45.9, 21.8], [41.9, 20.3]];
const thiWallWest=[[-37.0, -44.0], [-57.4, -30.7], [-65.2, -32.6], [-67.9, -29.0], [-70.5, -16.0], [-70.5, -7.6], [-69.5, 4.9], [-61.6, 11.6], [-55.5, 25.3], [-48.5, 43.4], [-45.8, 50.0], [-40.1, 55.3], [-37.3, 59.5], [-36.7, 63.9], [-31.3, 61.9], [-24.1, 57.0], [-20.0, 57.2], [-16.9, 59.5], [-14.4, 51.6], [-10.7, 46.6], [-3.6, 45.4], [0.3, 41.6], [2.4, 31.9], [9.6, 31.5], [16.2, 31.9], [27.9, 24.7]];
const thiWallSouth=[[-15.3, -18.1], [-18.1, -18.2], [-21.7, -20.1], [-26.3, -21.4], [-28.8, -24.9], [-28.8, -27.9], [-30.7, -28.5], [-32.9, -29.9], [-32.3, -35.1], [-32.2, -39.2], [-35.2, -41.5], [-37.0, -44.0], [-33.5, -48.4], [-30.2, -50.5], [-28.2, -54.9], [-24.2, -62.0], [-20.5, -66.8], [-16.4, -70.2], [-13.9, -70.3], [-12.3, -69.5], [-10.9, -67.7], [-8.1, -65.8]];
const thiVishnu=[[24.5, -61.2], [138.8, -34.8], [143.0, -51.0], [141.2, -63.6], [130.9, -74.5], [121.8, -75.9], [115.1, -113.8], [68.0, -120.3], [58.0, -77.4], [27.1, -80.0]];
// OpenTopodata SRTM 30 m; 40 m-spaced sample grid, not a rock-face survey.
const thiElevation={x0:-220,y0:-180,stride:40,nx:11,ny:9,data:'lAeUB6gHlAeUB5QHlAeUB2wHgAeoB5QHgAe8B7wHqAe8B7wHvAeUB4AHbAeAB5QHvAfQB/gHNAgMCLwHgAdsBzAHbAeoB9AH5AdcCKwImAhICLwHbAdEB2wHlAe8B/gHmAjUCNQImAj4B2wHMAeAB5QHgAfQB4QIXAgMCOQHbAcIBwgHgAdYB1gHgAe8B2wHRAdYBwgH9AYIBzAHRAdsB4AHWAcwB0QHMAcIBzAHRAfgBjAHbAeAB1gHMAdEB0QHMAcwB0QH'};
const thiMuseum='https://govtmuseumchennai.org/uploads/topics/16527952393570.pdf';
const thiPois=[
 {id:'walls',at:[35,0],r:10,title:'Mapped fort wall',text:'These wall lines follow present-day OpenStreetMap features. Their full extent, heights, gate positions and dates need survey; the complete historical fort boundary is unknown.',source:'https://www.openstreetmap.org/way/583140591',evidence:'documented',positionEvidence:'inferred'},
 {id:'temples',at:[22,-58],r:12,title:'Southern rock-cut temples',text:'The government museum places the Shiva and Vishnu rock-cut temples on the southern slope. The mapped Vishnu precinct is marked; its shrine, Shiva shrine and cave interiors are not yet reconstructed.',source:thiMuseum,evidence:'documented',positionEvidence:'inferred'},
 {id:'entry',at:[-79,69],r:10,title:'Mapped northern approach',text:'OpenStreetMap marks a fort entrance here. The district also mentions an older main entrance about a kilometre away; its identity and route are not established.',source:'https://www.openstreetmap.org/node/1669711996',evidence:'documented',positionEvidence:'inferred'},
 {id:'summit',at:[0,5],r:10,title:'Rocky summit and western steps',text:'The museum guide describes western rock-cut steps, a summit gun platform and nearby cisterns. Their exact paths, dimensions and conditions are not represented.',source:thiMuseum,evidence:'documented',positionEvidence:'unknown'}
];
export const thirumayam={
 id:'thirumayam',name:'Thirumayam Fort',native:{text:'Thirumayam',lang:'en',script:'latn'},region:'Pudukkottai · Tamil Nadu',type:'Rocky hill fort · mapped research reconstruction',coords:[10.2477,78.7512],poiCount:thiPois.length,pois:thiPois,groundName:'Hill · schematic',datum:0,datumLabel:'approximate elevation',units:{planScale:1,vScale:1},bounds:[-220,-200,220,200],stride:2,navCell:1,navStep:0.8,seed:271,water:null,view:{az:-35,el:40,zoom:95,introAt:[0,0],introZoom:320},light:{sky:'#dce3e0',sunAz:-125,sunEl:48},palette:mirjan.palette,eraPalette:{today:{}},defaultEra:'today',
 eras:[{id:'today',year:'Today',label:'Mapped hill and walls · research reconstruction',short:'Present',lens:'none',summary:'Explore mapped wall segments and a marked southern temple precinct.',basis:'OpenStreetMap records several wall lines and the Vishnu temple precinct. The Government Museum describes rock-cut Shiva and Vishnu temples on the southern slope and western summit steps.',conjecture:'The mapped walls are incomplete and not a survey. The coarse sampled terrain cannot resolve rock faces; wall heights and two provisional wall openings are inferred; temple architecture, cave interiors, summit and historical outer walls are not reconstructed. The present remains do not establish the 1700 plan.',sources:['THI-01','THI-03','THI-04','THI-05','THI-06','THI-07']}],
 terrain:()=>[{op:'base',h:96},{op:'grid',grid:thiElevation},{op:'paint',poly:thiVishnu,paint:'court'},{op:'paint',path:[[-79,69],[-52,109]],w:3,paint:'road'},{op:'edge',h:96,w:8}],
 build(W){
  const core=W.wall({path:thiWall,closed:true,outer:'right',h:3.5,thick:1.2,batter:0.04,merlon:false,color:'stone',maxSeg:2});
  // Opening is a placeholder for playability; the actual internal access is unregistered.
  W.gate({wall:core,at:[-14,-14],width:3,spring:2.5,style:'flat',towers:false,frame:false,doors:false,name:'Internal access · position inferred'});
  const west=W.wall({path:thiWallWest,closed:false,outer:'right',h:3.5,thick:1.2,batter:0.04,merlon:false,color:'stone',maxSeg:2});
  W.gate({wall:west,at:[-48,43],width:3,spring:2.5,style:'flat',towers:false,frame:false,doors:false,name:'Western access · position inferred'});
  W.wall({path:thiWallSouth,closed:false,outer:'right',h:3.5,thick:1.2,batter:0.04,merlon:false,color:'stone',maxSeg:2});
  W.zone(thiVishnu,'Sathyamurthi temple precinct · mapped outline; buildings unmodeled');
  for(const p of thiPois)W.poi(p);
  W.spawn(25,0,W.ground(25,0),-90);
 }
};
export const fortStGeorge=makeFort({
 id:'fort-st-george',name:'Fort St George',native:{text:'Fort St George',lang:'en',script:'latn'},region:'Chennai · Tamil Nadu',typeLabel:'Coastal fort · inferred prototype',coords:[13.080,80.287],
 type:'coast',seed:277,units:{planScale:3,vScale:4},size:{rx:95,ry:72},shore:{a:0,dist:145},isthmusW:35,guard:'sepoy',people:6,flag:false,
 gates:[{a:0,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-15,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1751',year:'c. 1751',label:'Company period',short:'Company period',lens:'engraving',summary:'An illustrative Company-period garrison after the French occupation.',basis:'Chennai district dates French possession to 1746–1749 and the return under the Treaty of Aix-la-Chapelle.',conjecture:'The walls, shoreline, fort plan, town, buildings, dimensions and placeholder guard appearance are inferred. This scene is not a reconstruction of the 1746 attack.',sources:['STG-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic coastal fort.',basis:'Chennai district describes the fort, its later uses and St Mary’s Church.',conjecture:'The actual shoreline, buildings, surviving fort and present administrative use are not modeled.',sources:['STG-01']}],
 pois:[{id:'occupation',at:[25,18],title:'French occupation',text:'The district dates French possession of the fort to 1746–1749. The siege and its damage are not reconstructed here.',source:stg},
 {id:'church',at:[-25,17],title:'St Mary’s Church',text:'The district dates construction of St Mary’s Church to 1678–1680. Its architecture and position are not modeled.',source:stg},
 {id:'city',at:[0,27],title:'Fort and city',text:'The district describes the fort’s historical settlement and later administrative use. The city and surviving structures are not reconstructed.',source:stg}]
});
