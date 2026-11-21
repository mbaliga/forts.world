// Approximate generated scene: the ASI plan has not been traced or dated to 1810.
import {makeFort} from './gen.js';
import {rectPts} from './kit.js';
const municipal='https://lsg.rajasthan.gov.in/ulbhanumangarh/sm/jankalyan-category-and-entry-type/133361/939/4/1';
const tourism='https://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/tourist-destinations/hanumangarh.html';
const plan='https://ignca.gov.in/Asi_data/88329.pdf';
// ASI's 1:200 m site plan shows a parallelogram. This normalized outline follows
// its form, while the exact plan vertices and dimensions still need digitizing.
// Proportioned against the ASI 0–200 m plan and visually checked against
// current aerial imagery. It remains provisional until digitized/georeferenced.
const BHATNER_PLAN_OUTLINE=[[-68,-43],[53,-43],[68,43],[-53,43]];
export const bhatner=makeFort({
 id:'bhatner',name:'Bhatner Fort, Hanumangarh',native:{text:'Bhatner',lang:'en',script:'latn'},region:'Hanumangarh · Rajasthan',typeLabel:'Fort on a mound · ASI-plan-informed schematic',coords:[29.58605,74.325322],
 type:'land',flatGround:true,baseGround:0.4,baseH:2.4,moundEdge:22,shape:'square',shear:0.18,seed:379,units:{planScale:3,vScale:4},size:{rx:68,ry:43},wallPath:BHATNER_PLAN_OUTLINE,wallK:1,margin:100,guard:'guard-rajput',people:5,flag:false,cannons:false,bastionsPerSide:12,bastionGateClearance:0,bastionR:0.7,trees:4,
 palette:{wall:'#947963',wallTop:'#a88c73',stone:'#927966',rock:'#a58f70',cliff:'#8c735b',grass:'#a59b6b',dry:'#b0a078',road:'#b29a75'},
 gates:[{a:3.2,name:'Gate · location inferred between plan-shaped bastions',main:true}],buildings:[],
 extraBuild:(W,{era,H})=>{
  // Bhatner's Ghaggar relationship is documented, but the modern channel is
  // not traced here; do not place the former guessed channel through the scene.
  const townA=[[-105,-65],[-72,-65],[-72,-30],[-105,-30]],townB=[[-105,30],[-72,30],[-72,65],[-105,65]],townC=[[72,-45],[105,-45],[105,5],[72,5]];
  for(const [i,poly] of [townA,townB,townC].entries()){W.houses({poly,count:era==='today'?20:8,size:[5,9],h:era==='today'?[1,3]:[1,2],roof:'flat',seed:681+i,spacing:2.5});W.zone(poly,`Hanumangarh urban fabric · schematic ${era==='today'?'present':'c.1810'}`);}
 },
 eras:[{id:'1810',year:'c. 1810',label:'After the 1805 change of control',short:'Bikaner period',lens:'engraving',summary:'A low, elevated fort mound at the Ghaggar edge, within the emerging town of Hanumangarh.',basis:'ASI documentation gives Bhatner a parallelogram plan with twelve projected circular bastions on each side and supplies a 0–200 metre site-plan scale. The current ASI Jodhpur Circle register places the protected fort at 29.58605° N, 74.325322° E; Rajasthan sources describe the 1805 capture and renaming.',conjecture:'This ASI-plan-informed blockout is proportioned to the published plan and visually compared with current aerial imagery, but it is not georeferenced. Exact corners, dimensions, bastion spacing, gate, mound profile, Ghaggar channel, town blocks and 1810 architecture remain unresolved.',sources:['BHA-01','BHA-02','BHA-03','BHA-04','BHA-05','BHA-06','BHA-07','BHA-08']},
 {id:'today',year:'Today',label:'Fort within Hanumangarh',short:'Present',lens:'none',summary:'Explore Bhatner as a historic fort inside the growing agricultural market town of Hanumangarh.',basis:'ASI’s protected-monument register gives the site coordinates; the Rajasthan district gazetteer and official municipal town map identify Bhatner and the municipal setting. Current aerial imagery shows the enclosed fort amid a rectilinear street network with fields to its north.',conjecture:'The perimeter is scaled from visual aerial comparison and the ASI plan, not orthorectified; urban blocks, current river course, condition and building footprints remain unregistered.',sources:['BHA-01','BHA-03','BHA-04','BHA-05','BHA-06','BHA-07','BHA-08']}],
 pois:[{id:'fort',at:[35,20],title:'ASI site plan and bastion circuit',text:'ASI describes a brick parallelogram with twelve circular bastions on each side. Its scaled outline has been enlarged to match the approximate aerial footprint; exact corners and bastion positions still await georeferencing.',source:plan},
 {id:'river',at:[-70,5],title:'Historic Ghaggar relationship',text:'Rajasthan sources place Bhatner on the Ghaggar. The present river channel is not traced in this scene, so no specific current watercourse is asserted.',source:'https://jankalyanfile.rajasthan.gov.in/Content/UploadFolder/DepartmentMaster/100/2023/Sep/30409/10051e00a22-41bd-415c-9f32-50f2af5bc9af.pdf'},
 {id:'town',at:[88,25],title:'Hanumangarh urban growth',text:'The current official town map labels Bhatner Fort, Ghaggar River and municipal wards. This scene adds urban blocks as context; they are not traced from the town map.',source:'https://environment.rajasthan.gov.in/content/dam/raj/udh/lsgs/lsg-jaipur/pdf/New%20Order%20PDF/Demarcation/FinalMaps/HANUMAN%20PARISHAD.pdf'},
 {id:'transition',at:[0,-20],title:'Change of control',text:'Rajasthan Tourism records Bikaner ruler Surat Singh’s capture of the fort in 1805. The 1810 garrison and architecture remain illustrative.',source:tourism}]
});
