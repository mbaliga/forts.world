// Khanderi present-day mapping: © OpenStreetMap contributors, ODbL.
import {makeFort} from './gen.js';
const island=[[21.8,-94.09],[41.03,-84.19],[52.91,-74.29],[63.66,-69.48],[69.88,-65.24],[75.82,-49.54],[80.2,-40.21],[83.88,-36.96],[83.6,-34.13],[80.49,-32.58],[79.5,-22.11],[80.63,-18.43],[79.21,-15.61],[76.67,-14.05],[73.98,-1.46],[76.39,0.94],[75.11,4.48],[72.71,5.04],[65.36,13.95],[61.11,19.04],[59.42,20.59],[56.73,20.73],[53.05,18.47],[44.71,18.9],[35.66,18.19],[33.96,21.02],[29.86,21.3],[25.62,19.89],[8.79,6.31],[0.73,7.3],[-4.36,11.26],[-5.21,17.62],[3.69,46.2],[4.55,54.95],[4.02,59.04],[0.03,79.7],[4.13,84.22],[4.98,86.07],[3.42,90.59],[1.58,91.44],[-0.68,91.44],[-6.34,103.88],[-10.15,108.69],[-12.42,110.38],[-16.92,110.69],[-20.9,108.41],[-22.59,105.32],[-46.21,98.65],[-50.71,100.54],[-54.28,98.93],[-56.68,95.26],[-59.08,84.93],[-64.17,76.45],[-75.49,59.76],[-82.84,40.82],[-80.58,15.65],[-67.0,-16.03],[-39.29,-52.52],[-25.99,-91.26],[-20.05,-98.9],[-12.14,-103.14],[2.29,-100.03]];
const fortArea=[[-13.59,104.29],[-3.67,90.4],[-2.57,53.27],[-8.35,24.66],[-12.75,10.36],[7.96,-2.44],[30.96,16.58],[58.5,15.71],[68.95,3.48],[77.48,-35.03],[58.22,-66.39],[18.88,-83.72],[-12.47,-84.55],[-17.68,-78.17],[-21.5,-78.17],[-27.39,-69.9],[-31.46,-70.42],[-32.24,-67.14],[-29.7,-65.58],[-44.26,-35.47],[-62.83,1.77],[-67.01,26.24],[-63.98,48.54],[-59.33,69.12],[-51.26,92.14]];
const pier=[[81.94,101.69],[84.26,100.47],[86.47,99.33],[77.99,83.08],[74.89,84.7],[73.47,85.44]];
const landingPath=[[4.02,59.04],[74.89,84.7]];
const light=[8.59,-59.48];
// Land-only SRTM30 samples, 40 m spacing; ocean elevations are not bathymetry.
const elevation={x0:-130,y0:-170,stride:20,nx:13,ny:17,data:'AIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAMgAAgACAAIAAgACAAIAAgACAAIAAgACAMgB4AJYAWgAAgACAAIAAgACAAIAAgACAAIA8AL4ADgG+AG4AAIAAgACAAIAAgACAAIAUAFAAtAAOAfoAlgAyAACAAIAAgACAAIAKADIAWgCMANIA5gCWADIAAIAAgACAAIAAgDIAeABuAG4AlgCCAFoAAIAAgACAAIAAgAAAMgCMAHgAAIAAgACAKAAAgACAAIAAgACACgBkALQAggBQAACAAIAAgACAAIAAgACAAIAAgDwAeABuADwAAIAAgACAAIAAgACAAIAAgACAHgAyADwACgAAgACAAIAAgACAAIAAgACAAIAAgAoAFAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgA=='};
const source='https://www.dgll.nic.in/DGLL-light-house-location/about-mumbai/kanhoji-angre-lighthouse';
const level=makeFort({
 id:'khanderi',name:'Khanderi',native:{text:'खांदेरी',lang:'mr',script:'deva'},region:'Raigad · Maharashtra',typeLabel:'Island fort · mapped research reconstruction',coords:[18.7043,72.8133],
 type:'sea',seed:37,units:{planScale:2,vScale:2},size:{rx:100,ry:130},outline:island,siteBoundary:fortArea,siteBoundaryLabel:'OSM fort area · not a wall survey',margin:100,suppressPerimeterWall:true,spawnInside:[0,0],
 gates:[{a:90,main:true,name:'Landing gate unverified'}],buildings:[],bastionAngles:[],people:0,visitors:0,todayPeople:false,flag:false,trees:0,guard:false,cannons:false,
 extraBuild:W=>{
  // Octagonal form and 17 m tower height follow the DGLL ledger; Mumbai Port reports 30 m. Diameter is estimated.
  const poly=Array.from({length:8},(_,i)=>{const a=i*Math.PI/4;return [light[0]+1.8*Math.cos(a),light[1]+1.8*Math.sin(a)];});
  W.building({poly,base:W.ground(...light),h:8.5,color:'plaster',roof:'flat',windows:false,kind:'building',name:'Kanhoji Angre lighthouse · 17 m ledger height, conflicting source; footprint inferred'});
  W.zone(pier,'Present mapped landing · elevation and structure unverified');
 },
 eras:[{id:'today',year:'Today',label:'Mapped island · research reconstruction',short:'Present',lens:'none',summary:'Explore Khanderi island, its lighthouse and mapped landing.',basis:'OpenStreetMap supplies present island and fort-area outlines, lighthouse and landing positions. DGLL identifies the lighthouse and jetty and its ledger reports a 17 m octagonal tower; Mumbai Port reports 30 m.',conjecture:'The mapped fort area is not a wall survey. The shoreline, landing geometry, lighthouse position and height differ between sources, its footprint and coarse terrain are not surveyed. Walls, bastions, gates, buildings, reefs and dated phases are not reconstructed.',sources:['KHA-01','KHA-02','KHA-03','KHA-04','KHA-05','KHA-06']}],
 pois:[{id:'island',at:[0,0],title:'Khanderi island and fort area',text:'The mapped coastline and fort area are separate present-day features. The fort area does not identify the wall circuit or establish historical phases.',source:'https://www.openstreetmap.org/way/281255137'},
 {id:'light',at:[light[0]+6,light[1]+4],title:'Kanhoji Angre lighthouse',text:'DGLL records a 17 m octagonal tower; Mumbai Port reports 30 m. The DGLL ledger position differs from this OSM point by roughly 33 m. DGLL describes the lighthouse lit in 1867. The displayed footprint and buildings around it are not surveyed.',source:'https://www.dgll.nic.in/sites/default/files/2022-12/mm14.pdf'},
 {id:'landing',at:[5,5],title:'Island landing · information point',text:'DGLL describes a jetty and boat access from Thal. The mapped present-day landing is to the northeast; this information point is on the island and is not the pier location. Width, structure and historic use need survey.',source}]
});
export {island,fortArea,pier,landingPath,elevation};
level.terrain=()=>[{op:'base',h:-5},{op:'grid',grid:elevation},{op:'raise',poly:island,h:0.6,edge:0.8},{op:'paint',path:landingPath,w:2,paint:'road'},{op:'edge',h:-5,w:10}];
level.groundName='Coarse sampled terrain';
level.datum=0;
level.datumLabel='approximate metres above sea level';
export default level;
