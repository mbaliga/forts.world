// Illustrative local scenes; neither fort has a surveyed reconstruction here.
import {makeFort} from './gen.js';
const vij='https://vijayapura.nic.in/en/tourist-place/gagan-mahal/';
const udg='https://latur.gov.in/en/tourist-place/udagir-fort/';
export const bijapur=makeFort({
 id:'bijapur-arkilla',name:'Bijapur Arkilla',native:{text:'Vijayapura Citadel',lang:'en',script:'latn'},region:'Vijayapura · Karnataka',typeLabel:'Citadel · ASI plan-informed outline, georeference pending',coords:[16.82681,75.7177],
 type:'land',flatGround:true,baseGround:0.4,baseH:0.8,seed:193,units:{planScale:3,vScale:4},size:{rx:69,ry:68},wallPath:[[69,0],[64,27],[48,49],[25,64],[-2,69],[-29,62],[-51,45],[-65,21],[-68,-7],[-58,-34],[-38,-54],[-12,-67],[17,-66],[43,-52],[61,-31]],additionalWalls:[{path:[[86,0],[80,34],[60,61],[31,79],[-3,86],[-37,77],[-64,56],[-81,26],[-84,-9],[-71,-42],[-47,-67],[-15,-84],[20,-82],[53,-64],[75,-38]],h:5.5,thick:3,label:'Outer citadel wall · approximate'}],guard:false,people:0,flag:false,margin:55,
 gates:[{a:-45,name:'South-east citadel entrance · position inferred',main:true}],buildings:[],
 eras:[{id:'1650',year:'c. 1650',label:'Adil Shahi period',short:'Adil Shahi period',lens:'engraving',summary:'An illustrative citadel circuit within the larger fortified city.',basis:'The Archaeological Survey of India describes a nearly circular citadel, less than a mile in circumference, with a double wall and two moats; a 19th-century plan survives in the British Library.',conjecture:'The paired circular wall traces are scaled approximations; the historic plan has not been georeferenced. The moats, gates, palace, city and their dated fabric are not reconstructed.',sources:['BIJ-01','BIJ-02','BIJ-03']},
 {id:'today',year:'Today',label:'Citadel remains',short:'Remains',lens:'none',summary:'Explore the nearly circular Arkilla wall circuits.',basis:'ASI describes the south-east entrance, nearly circular circuit and the original double wall and moat design.',conjecture:'No current orthophoto alignment or condition survey is applied. Moat earthwork and water, palace footprints, city growth and architectural phases remain outstanding.',sources:['BIJ-01','BIJ-02','BIJ-03']}],
 pois:[{id:'citadel',at:[25,18],title:'Arkilla and its double moat design',text:'ASI describes a nearly circular citadel with an intended double wall, two moats and an entrance on the south-east. This scene shows approximate wall traces only; the moats are not yet modeled.',source:'https://www.asidharwadcircle.in/monument/arquilla-with-moat/'},
 {id:'gagan',at:[-25,17],title:'Gagan Mahal',text:'The district describes a durbar hall and other palace structures in the citadel. They are not modeled in this scene.',source:vij},
 {id:'city',at:[0,27],title:'Beyond the citadel',text:'The citadel belonged to a larger historic city, which is not represented in this local prototype.',source:'https://vijayapura.nic.in/en/about-district/'}]
});
export const udgir=makeFort({
 id:'udgir',name:'Udgir Fort',native:{text:'Udgir',lang:'en',script:'latn'},region:'Latur · Maharashtra',typeLabel:'Urban Deccan fort · documentary blockout',coords:[18.393,77.112],
 siteReference:{source:'Latur District Government; approximate discovery point retained',kind:'fort-in-city reference; wall and entrance not georeferenced'},
 type:'moat',flatGround:true,seed:197,units:{planScale:3,vScale:4},size:{rx:95,ry:72},moatWidth:8,guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Fort entrance · position inferred',main:true}],
 buildings:[{name:'Palace mass · phase and footprint schematic',x:-12,y:7,w:16,d:10,kind:'palace'}],
 extraBuild:(W,{era,H})=>{
  const x=8,y=-12;
  W.stairs({from:[x,y,H],to:[x,y,H-4.5],w:2.4,color:'stone',apron:false});
  W.tank({x,y,r:2.8,n:16,rim:H-4.5,waterDepth:0.5,tiers:1,color:'stone'});
  W.zone([[x-6,y-6],[x+6,y-6],[x+6,y+6],[x-6,y+6]],'Udgir Buva samadhi, reported ~60 ft below ground; vertical section and location schematic');
 },
 eras:[{id:'1760',year:'c. 1760',label:'Eighteenth-century Deccan period',short:'Deccan period',lens:'engraving',summary:'An illustrative urban fort scene around the battle and treaty of Udgir.',basis:'The Latur District describes a pre-Bahmani fort, an approximately 40 ft deep surrounding trench, palaces and Udgir Buva’s samadhi about 60 ft below ground. The 1760 battle and treaty are also documented.',conjecture:'The outline, trench width, gate, palace and underground-access geometry are inferred. The rumored tunnel to Bidar or Bhalki is not treated as established fact.',sources:['UDG-01','UDG-02']},
 {id:'today',year:'Today',label:'Fort in the living town',short:'Present',lens:'none',summary:'Explore an urban-fort blockout and a schematic vertical cue for the deeply sunken samadhi.',basis:'The Latur District describes the fort within Udgir city, its trench, palace buildings and deeply placed samadhi.',conjecture:'Town fabric, trench course, gate, palace footprint, samadhi section and current aerial remain unregistered. The rumored long-distance tunnel is excluded.',sources:['UDG-01','UDG-02']}],
 pois:[{id:'battle',at:[35,20],title:'Battle and Treaty of Udgir',text:'The district account describes a Maratha victory over the Nizam and the ensuing treaty. The battlefield and campaign network are not modeled.',source:udg},
 {id:'origin',at:[-30,15],title:'An older fort in a living town',text:'The district describes the fort as pre-Bahmani; its early fabric and successive building phases need more research.',source:udg},
 {id:'trench',at:[0,-20],title:'Deep trench and buried shrine',text:'The official account reports a 40 ft trench and Udgir Buva’s samadhi far below ground. Both are schematic cues pending a measured plan and section.',source:udg}]
});
