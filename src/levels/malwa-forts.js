// Mandu now includes the monument groups and water relationships documented by ASI and government heritage sources.
// Published monument points are plotted; plateau boundary, footprints and survey registration remain unresolved.
import {makeFort} from './gen.js';
const man='https://whc.unesco.org/en/tentativelists/1095';
const manAsi='https://asi.nic.in/admin/whatsnew/download/840';
const manPlan='https://egyankosh.ac.in/bitstream/123456789/44428/1/Unit-18.pdf';
const rai='https://raisen.mp.gov.in/about-district/';
const nma='https://www.nma.gov.in/showfile.php?lang=2&level=1&lid=1909&ls_id=1551';
// NMA's 2025 draft heritage bye-laws publish GPS positions for these protected
// monument groups. Use Hoshang's Tomb as the local origin so the central
// monument cluster can be registered against the same coordinate frame.
// The GPS marks site locations, not measured building centrelines or footprints.
const manduAnchor=[22+20/60+54.39/3600,75+23/60+47.54/3600],manduLatM=111320,manduLonM=manduLatM*Math.cos(manduAnchor[0]*Math.PI/180),manduScale=3;
const manduPoint=(lat,lon)=>[(lon-manduAnchor[1])*manduLonM/manduScale,(lat-manduAnchor[0])*manduLatM/manduScale];
const manduDms=(latD,latM,latS,lonD,lonM,lonS)=>manduPoint(latD+latM/60+latS/3600,lonD+lonM/60+lonS/3600);
const manduMeasured=(metres)=>metres/manduScale;
const tombMosqueGroup=manduDms(22,20,18.09,75,23,46.27);
// The ASI/NMA 2025 draft publishes individual GPS points for these protected
// sites. They are locational references only: the ASI survey-plan footprints
// and the full plateau wall still need to be digitized and registered.
const asiCoordinateSites=[
 ['nahar-jharokha-compound','Nahar Jharokha compound',22,21,30.44,75,23,35.67],
 ['dilawar-khan-mosque','Dilawar Khan Mosque',22,21,28.16,75,23,32.17],
 ['hathi-gate','Hathi Gate',22,21,29.52,75,23,39.90],
 ['nahar-jharokha','Nahar Jharokha',22,21,26.63,75,23,34.60],
 ['hammam','Hammam',22,21,26.17,75,23,31.29],
 ['royal-palace','Royal Palace',22,21,25.36,75,23,29.72],
 ['water-palace','Water Palace',22,21,22.11,75,23,27.61],
 ['champa-baodi','Champa Baodi',22,21,24.07,75,23,32.40],
 ['hindola-mahal','Hindola Mahal',22,21,24.63,75,23,35.01],
 ['jahaj-mahal','Jahaj Mahal',22,21,20.51,75,23,35.72],
 ['ujali-baodi','Ujali Baodi',22,21,29.21,75,23,45.73],
 ['gada-shah-shop','Gada Shah Shop',22,21,26.07,75,23,45.87],
 ['andheri-baodi','Andheri Baodi',22,21,27.98,75,23,43.65],
 ['gada-shah-palace','Gada Shah Palace',22,21,23.32,75,23,38.65],
 ['ancient-hindu-baodi','Ancient Hindu Baodi',22,21,22.99,75,23,36.58],
 ['kapoor-talao','Kapoor Talao',22,21,18.86,75,23,38.15],
 ['taveli-mahal','Taveli Mahal',22,21,16.30,75,23,37.34],
 ['tomb-north-alamgir','Tomb north of Alamgir Gate',22,22,1.40,75,23,33.11],
 ['sat-kothari-caves','Sat Kothari Caves',22,21,53.21,75,23,26.04],
 ['alamgir-gate','Alamgir Gate',22,21,46.47,75,23,35.53],
 ['bhangi-gate','Bhangi Gate',22,21,42.55,75,23,37.71],
 ['delhi-gate','Delhi Gate',22,21,39.84,75,23,46.06],
 ['gadi-darwaja','Gadi Darwaja',22,21,36.83,75,23,54.16],
 ['chistikhna-mahal','Chistikhna’s Mahal',22,21,37.37,75,24,9.24],
 ['hoshang-tomb','Hoshang’s Tomb',22,20,54.39,75,23,47.54],
 ['jama-masjid','Jama Masjid',22,20,54.27,75,23,49.27],
 ['dharamshala','Dharamshala',22,20,54.88,75,23,46.11],
 ['tripolia-gate','Tripolia Gate',22,20,52.75,75,23,53.67],
 ['tower-of-victory','Tower of Victory',22,20,55.45,75,23,55.53],
 ['ashrafi-mahal','Ashrafi Mahal',22,20,53.99,75,23,55.31],
 ['mahmud-tomb','Mahmud’s Tomb',22,20,53.94,75,23,57.25],
 ['rampol-gate','Rampol Gate',22,21,1.08,75,24,9.15],
 ['mosque-opposite-rampol','Mosque opposite Rampol Gate',22,21,1.15,75,24,7.97],
 ['mosque-near-sopi','Mosque near Sopi Tank',22,21,7.95,75,23,52.46],
 ['lohani-caves','Lohani Caves',22,20,54.14,75,23,32.67],
 ['lohani-gate','Lohani Gate',22,20,52.88,75,23,30.24],
 ['nameless-tomb','Nameless Tomb',22,21,4.53,75,23,19.18],
];
const manduSites=Object.fromEntries(asiCoordinateSites.map(([id,_title,...coords])=>[id,manduDms(...coords)]));
const manduSite=(id)=>manduSites[id];
const asiCoordinatePois=asiCoordinateSites.map(([id,title,...coords])=>({
 id:`asi-${id}`,at:manduDms(...coords),...(id==='jama-masjid'||id==='ashrafi-mahal'?{r:18}:{}),title:`${title} · official GPS`,
 text:'The 2025 ASI/NMA draft publishes this site coordinate. This marker shows the documented location only; it does not claim a measured building footprint, protected-boundary polygon, or period-specific reconstruction.',
 source:manAsi,ev:'documented',positionEvidence:'documented'
}));
export const mandu=makeFort({
 id:'mandu',name:'Mandu',native:{text:'Mandu',lang:'en',script:'latn'},region:'Dhar · Madhya Pradesh',typeLabel:'Fortified-city landscape · ASI/NMA coordinates plotted; plateau outline unresolved',coords:[22.336,75.396],
 type:'hill',seed:311,units:{planScale:manduScale,vScale:4},size:{rx:145,ry:165},hill:{h:36,cliff:10,skirt:45},guard:'guard-deccan',people:6,flag:false,
 gates:[{a:74,name:'Alamgiri Gate · relative location inferred'},{a:90,name:'Bhangi Gate · relative location inferred'},{a:106,name:'Delhi Gate · north approach',main:true},
 {a:155,name:'Hathi Pol · position inferred'},{a:208,name:'Lohani Gate · position inferred'},{a:268,name:'Tarapur Gate · position inferred'},{a:326,name:'Jahangirpur Gate · position inferred'}],
 buildings:[
  // For date ranges, show the complete illustrative blockout only from the
  // documented range's end. Earlier construction may have existed, but its
  // changing form is not represented as an unchanged finished monument.
  {name:'Dilawar Khan’s Mosque · 1401–1405 phase; complete blockout from 1405; site point registered, footprint schematic',x:manduSite('dilawar-khan-mosque')[0],y:manduSite('dilawar-khan-mosque')[1],w:15,d:11,kind:'mosque',stands:true,since:1405,siteCoordinate:true},
  // ASI describes a long hall as the T's stem, with a later double-storey
  // cross-bar. Separate blockouts preserve that plan instead of collapsing
  // the palace to one rectangle; dimensions and exact junction remain schematic.
  {name:'Hindola Mahal · long hall (T-plan stem); schematic dimensions; site point registered',x:manduSite('hindola-mahal')[0],y:manduSite('hindola-mahal')[1]-4,w:9,d:23,kind:'palace',stands:true,since:1500,storeyH:4.8,siteCoordinate:true},
  {name:'Hindola Mahal · later cross-bar; schematic dimensions; relative offset inferred',x:manduSite('hindola-mahal')[0],y:manduSite('hindola-mahal')[1]+4,w:23,d:9,kind:'palace',stands:true,since:1500,storeyH:4.2,siteCoordinate:true},
  {name:'Jahaz Mahal · between Munj and Kapur tanks; 1469–1500 phase; site point registered, footprint schematic',x:manduSite('jahaj-mahal')[0],y:manduSite('jahaj-mahal')[1],w:28,d:5,kind:'palace',stands:true,since:1500,siteCoordinate:true},
  // NMA/UNESCO dimensions are converted to this local map's 3:1 horizontal
  // compression and 4:1 vertical compression. The 17.3 m exterior remains an
  // inferred masonry allowance; the documented roof has a central and four
  // corner domes. The published GPS point is plotted; footprint orientation
  // and the point's exact relation to the exterior walls remain unresolved.
  {name:'Hoshang Shah’s Tomb · 14.9 m interior; 17.3 m inferred exterior; site point registered',x:manduSite('hoshang-tomb')[0],y:manduSite('hoshang-tomb')[1],w:manduMeasured(17.3),d:manduMeasured(17.3),kind:'tomb',stands:true,since:1435,storeyH:9.6/4,roof:'domes',parapet:false,siteCoordinate:true,windows:{style:'arch',spacing:manduMeasured(5.0),w:manduMeasured(2.0),h:5.0/4,sill:0.2/4},domes:[{x:manduSite('hoshang-tomb')[0],y:manduSite('hoshang-tomb')[1],r:manduMeasured(5.4)},{x:manduSite('hoshang-tomb')[0]-6/3,y:manduSite('hoshang-tomb')[1]-6/3,r:manduMeasured(1.5)},{x:manduSite('hoshang-tomb')[0]+6/3,y:manduSite('hoshang-tomb')[1]-6/3,r:manduMeasured(1.5)},{x:manduSite('hoshang-tomb')[0]+6/3,y:manduSite('hoshang-tomb')[1]+6/3,r:manduMeasured(1.5)},{x:manduSite('hoshang-tomb')[0]-6/3,y:manduSite('hoshang-tomb')[1]+6/3,r:manduMeasured(1.5)}]},
  // The NMA GPS is for the monument group, not either building individually.
  // Dimensions are published; the two building positions within the group are inferred.
  {name:'Tomb · 7.35 m square; positioned within GPS-located group by inference; height schematic',x:tombMosqueGroup[0]-2,y:tombMosqueGroup[1],w:manduMeasured(7.35),d:manduMeasured(7.35),kind:'tomb',only:'today',storeyH:0.8,roof:'flat',windows:false},
  {name:'Attached mosque · 12.15 × 5.49 m; relative position and height schematic',x:tombMosqueGroup[0]+3.5,y:tombMosqueGroup[1],w:manduMeasured(12.15),d:manduMeasured(5.49),kind:'mosque',only:'today',storeyH:0.8,roof:'flat',windows:false},
  {name:'Jami Masjid · completed 1454; construction sequence not modeled; site point registered, footprint schematic',x:manduSite('jama-masjid')[0],y:manduSite('jama-masjid')[1],w:29,d:23,kind:'mosque',stands:true,since:1454,siteCoordinate:true},
  {name:'Ashrafi Mahal and madrasa · 1436–1469 phase; site point registered, footprint schematic',x:manduSite('ashrafi-mahal')[0],y:manduSite('ashrafi-mahal')[1],w:23,d:18,kind:'palace',stands:true,since:1469,siteCoordinate:true},
  {name:'Palace at Rewa Kund (later known as Baz Bahadur’s Palace) · 1500–1510 core; additions not traced',x:-22,y:-36,w:22,d:16,kind:'palace',stands:true,since:1510},
  {name:'Rupmati’s Pavilion · 1405–1435 main-hall phase; later levels/additions not separately modeled',x:20,y:-65,w:13,d:8,kind:'palace',stands:true,since:1435}
 ],
 tanks:[
  {name:'Munj Talao · location and shape inferred',x:manduSite('jahaj-mahal')[0]-22,y:manduSite('jahaj-mahal')[1],rx:15,ry:9,only:'today'}, {name:'Kapur Talao · official site point; shoreline inferred',x:manduSite('kapoor-talao')[0],y:manduSite('kapoor-talao')[1],rx:15,ry:9,only:'today'},
  {name:'Suraja Talao · position inferred',x:34,y:68,rx:11,ry:7,only:'today'}, {name:'Rewa Kund · position inferred',x:-22,y:-52,rx:10,ry:8,only:'today'},
  {name:'Sagar Talao · position inferred',x:42,y:-22,rx:19,ry:12,only:'today'},
  // ASI/NMA's 2025 draft lists these protected wells/tanks. Their present
  // symbols are research markers only; dates and measured positions are absent.
  {name:'Champa Baodi · official site point; outline unknown',x:manduSite('champa-baodi')[0],y:manduSite('champa-baodi')[1],rx:5,ry:5,only:'today'},
  {name:'Ujali Baodi · official site point; outline unknown',x:manduSite('ujali-baodi')[0],y:manduSite('ujali-baodi')[1],rx:5,ry:5,only:'today'},
  {name:'Andheri Baodi · official site point; outline unknown',x:manduSite('andheri-baodi')[0],y:manduSite('andheri-baodi')[1],rx:5,ry:5,only:'today'},
  {name:'Ancient Hindu Baodi · official site point; outline unknown',x:manduSite('ancient-hindu-baodi')[0],y:manduSite('ancient-hindu-baodi')[1],rx:5,ry:5,only:'today'}
 ],
 extraBuild:(W,{era})=>{
  if(era==='today'){
   const villageA=[[-88,-90],[-46,-90],[-46,-55],[-88,-55]],villageB=[[48,-94],[91,-94],[91,-57],[48,-57]];
   for(const [i,poly] of [villageA,villageB].entries()){
    W.houses({poly,count:era==='today'?12:0,size:[2.2,4.6],h:[1,2],roof:'flat',seed:318+i,spacing:1.8});
    W.zone(poly,'Mandu village homes and shopfronts · local present-day cue; extent not mapped');
   }
   W.zone([[-45,-90],[45,-90],[45,90],[-45,90]],'Mandu present village and roadside market corridor · approximate, visually compared with current aerial');
  }
  if(era==='1510'||era==='1540'){
   // Mandu was a fortified capital, not an empty monument park. These small
   // residential/market masses restore that city context without claiming a
   // cadastral or archaeological building plan.
   const quarters=[[[-92,7],[-48,7],[-48,80],[-92,80]],[[-45,-85],[-5,-85],[-5,-16],[-45,-16]],[[48,-76],[90,-76],[90,-8],[48,-8]],[[49,74],[91,74],[91,104],[49,104]]];
   quarters.forEach((poly,i)=>{W.houses({poly,count:era==='1510'?34:40,size:[3.5,7],h:[1,2],roof:'flat',seed:322+i,spacing:2.2});W.zone(poly,`Fortified-city housing/market quarter ${i+1} · inferred massing, footprint untraced`);});
  }
 },
 eras:[{id:'1420',year:'c. 1420',label:'Hoshang Shah Ghori phase',short:'Ghuri sultanate',lens:'engraving',summary:'An early fifteenth-century phase showing only documented early monuments; later palaces are withheld.',basis:'The 2025 ASI/NMA draft assigns fortifications, Hoshang Shah’s Tomb, the early Jama Masjid and the main hall of Rupmati’s Pavilion to 1405–1435. Dilawar Khan’s Mosque is assigned to 1401–1405.',conjecture:'This is a date-filtered blockout, not a reconstruction of the full early capital. Locations and footprints remain schematic; the evolving fort wall, settlement, water system, and the early forms of buildings later altered are not surveyed here.',sources:['MAN-01','MAN-03','MAN-06','MAN-07']},
 {id:'1454',year:'1454',label:'Jama Masjid completion',short:'Mahmud Shah Khilji I',lens:'engraving',summary:'The mosque and other documented pre-1454 monuments appear; late fifteenth-century palaces remain absent.',basis:'ASI/UNESCO dates Jama Masjid completion to 1454. The 2025 ASI/NMA chronology places Ashrafi Mahal and its madrasa in 1436–1469 and assigns upper levels of Rupmati’s Pavilion to this period.',conjecture:'The scene shows one undifferentiated Jama Masjid footprint and does not represent its construction sequence, measured plan, or the documented later additions to Rupmati’s Pavilion. All positions remain schematic.',sources:['MAN-01','MAN-03','MAN-06','MAN-07']},
 {id:'1480',year:'c. 1480',label:'Late fifteenth-century palace city',short:'Ghiyasuddin Khilji',lens:'engraving',summary:'Jahaz Mahal and Hindola Mahal are assigned to this broad construction period; their completed blockouts are withheld until the end of that range.',basis:'The 2025 ASI/NMA chronology assigns Jahaz Mahal and Hindola Mahal to Ghiyasuddin Khilji, 1469–1500. ASI/UNESCO describes Jahaz Mahal between Munj and Kapur tanks and Hindola Mahal as T-shaped.',conjecture:'The plan forms, internal divisions, waterside edges, and locations are simplified and unregistered. This scene does not claim that the current fabric of each building existed unchanged in 1480.',sources:['MAN-01','MAN-03','MAN-06','MAN-07']},
 {id:'1510',year:'c. 1510',label:'Nasiruddin Khilji phase',short:'Malwa Sultanate',lens:'engraving',summary:'A local encounter-scale sketch at the end of the documented 1500–1510 Rewa Kund palace phase; it is not the whole fortified city.',basis:'ASI/NMA dates the palace core at Rewa Kund to 1500–1510. Earlier monuments appear only after their documented initial phases; later 1534–1561 additions are not represented as completed features.',conjecture:'Monument identities and broad groups are documented, but the hill outline, full wall circuit, gate coordinates, building footprints, water extents, city settlement, routes and distances remain schematic and unregistered to ASI plans and current terrain.',sources:['MAN-01','MAN-03','MAN-06','MAN-07']},
 {id:'1540',year:'c. 1540',label:'Shuja’at Khan and Baz Bahadur period',short:'Afghan governors',lens:'engraving',summary:'A later Mandu state retaining earlier monuments and indicating additions to the Rewa Kund group and Rupmati’s Pavilion.',basis:'ASI/NMA dates the 1534–1561 period of Shuja’at Khan and Baz Bahadur for additions to the Rewa Kund monuments and Baz Bahadur’s Palace, and for additions to Rupmati’s Pavilion. The original palace at Rewa Kund is dated 1500–1510; its later name does not mean the whole structure first appeared in 1540.',conjecture:'The dated additions are identified as a separate phase, but their exact form, extent, location and relation to earlier fabric are not reconstructed because the cited chronology does not provide georeferenced measured drawings here.',sources:['MAN-01','MAN-03','MAN-06','MAN-07']},
 {id:'today',year:'Today',label:'Monument landscape',short:'Present',lens:'none',summary:'Explore the monument-and-settlement landscape using official GPS locations for several protected groups; the 45 km plateau wall remains untraced.',basis:'ASI/NMA’s 2025 draft heritage bye-laws publish GPS coordinates for protected monument groups and include survey and archival cadastral plans. Madhya Pradesh Tourism describes Mandu as a walled plateau with a 45 km parapet and 12 gates, and describes the present village as huts, open-front shops and surrounding fields.',conjecture:'This expanded local scene plots named protected groups from NMA coordinates; other monument masses, housing, water and terrain remain illustrative. It is not a model of Mandu’s full 75–82 sq km plateau or 45 km wall. The protected-group coordinates have not been checked against a modern control survey, and the full wall, roads, settlement extent and dated building fabric remain unresolved.',sources:['MAN-01','MAN-03','MAN-04','MAN-06','MAN-07','MAN-08','MAN-09']}],
 pois:[{id:'capital',at:[35,80],title:'Mandu on the Vindhya mesa',text:'ASI’s submitted description places Mandu on a mesa at the southern Vindhya outcrops; the fort walls extend more than 40 km and include many gates. This model’s plateau edge and wall have not been traced from the survey sheet.',source:manAsi,ev:'documented'},
 {id:'nma-sites-north',at:manduDms(22,20,26.68,75,23,44.51),title:'Ek-Khamba Mahal · published GPS position',text:'The 2025 NMA draft gives this protected monument group at 22°20′26.68″N, 75°23′44.51″E. The marker is georeferenced from that published coordinate; the scene does not reconstruct the monument footprint.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-tomb',at:tombMosqueGroup,title:'Tomb and attached mosque · group GPS and measured plans',text:'The NMA draft publishes a GPS position for this group and describes a 7.35 m square tomb and a 12.15 × 5.49 m mosque. Those dimensions now drive separate present-day blockouts at the declared 3:1 plan compression. The coordinate locates the group, not either building; their relative position, orientation and height remain inferred.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-chor-kot',at:manduDms(22,20,13.34,75,23,41.46),title:'Chor Kot and mosque · published GPS position',text:'The 2025 NMA draft publishes the group position and reproduces an ASI 1958 site plan. The plan and compound geometry are not yet traced into this scene.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-darya',at:manduDms(22,20,17.02,75,24,7.38),title:'Darya Khan monument group and Somoti Kund · published GPS position',text:'The NMA draft gives one coordinate for the Darya Khan tomb, nearby mosque and tomb, and Somoti Kund group; its ASI survey plan includes contours and a coordinate grid. This marker locates the group only.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-hathi',at:manduDms(22,20,10.25,75,24,16.85),title:'Hathi Mahal · published GPS position',text:'The NMA draft publishes this monument’s coordinate and includes an ASI site-plan sheet. The point is mapped; the building footprint and surrounding topography are not traced.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-south',at:manduDms(22,19,48.31,75,24,10.84),title:'Caravan Sarai · published GPS position',text:'The 2025 NMA draft publishes the Caravan Sarai coordinate and an archival ASI plan sheet for this southern monument cluster. The scene marks the published coordinate only.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'nma-sites-malik',at:manduDms(22,19,48.71,75,24,7.16),title:'Malik Mughis Mosque · published GPS position',text:'The 2025 NMA draft publishes a coordinate for this protected monument and includes it in the ASI survey-plan cluster. Its footprint remains untraced here.',source:nma,ev:'documented',positionEvidence:'documented'},
 {id:'north-approach',at:[0,90],title:'The northern approach',text:'Government sources describe the road from Nalcha through Alamgiri and Bhangi gates to Delhi Gate. Their positions in this scene are diagrammatic; the ASI map still needs georeferencing.',source:manPlan,ev:'documented'},
 {id:'royal-enclave',at:manduSite('jahaj-mahal'),title:'The royal and central groups',text:'The 2025 NMA draft coordinate anchors Jahaz Mahal; the named nearby monuments are positioned from their own published points where available. ASI records Jahaz Mahal between Munj and Kapur tanks and describes Hindola Mahal as T-shaped. Building footprints, orientations and tank shorelines remain schematic; the Kapur Talao cue is centred on the published site point. The undated water placeholders appear only in the present scene.',source:'https://ignca.gov.in/Asi_data/37526.pdf',ev:'documented',positionEvidence:'documented'},
 {id:'masjid',at:manduSite('jama-masjid'),r:18,title:'Jami Masjid and Ashrafi Mahal',text:'The published GPS point anchors the Jami Masjid; Ashrafi Mahal is separately aligned to its published site point. ASI dates the mosque’s completion to 1454 and describes the attached madrasa complex. Simplified footprints and orientations still need survey-plan registration.',source:manAsi,ev:'documented',positionEvidence:'documented'},
 {id:'rewa',at:[-22,-50],r:10,title:'Rewa Kund palace: early core and later additions',text:'ASI/NMA dates the palace now known as Baz Bahadur’s Palace to 1500–1510, then records additions to the palace and Rewa Kund monuments in 1534–1561. Its outline and precise addition areas remain schematic.',source:manAsi,ev:'documented'},
 {id:'heritage',at:[25,-65],title:'Rupmati’s Pavilion',text:'ASI records several construction stages at the pavilion, including a main hall and later upper levels. Its position and dimensions in this scene are not measured.',source:man,ev:'documented'},
 {id:'hoshang-tomb-measured',at:manduSite('hoshang-tomb'),title:'Hoshang Shah’s Tomb · published dimensions and GPS point',text:'UNESCO/ASI describes a square interior 14.9 m across and walls 9.6 m above the marble platform, with a large central dome and four small corner domes. The NMA GPS point anchors the blockout centre. Its 17.3 m outside width is an inferred allowance for the enclosing walls; footprint orientation and exact relation of the GPS point to the building centre need survey-plan registration.',source:man,ev:'documented',positionEvidence:'documented'},
 ...asiCoordinatePois]
});
export const raisen=makeFort({
 id:'raisen',name:'Raisen Fort',native:{text:'Raisen',lang:'en',script:'latn'},region:'Raisen · Madhya Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[23.330,77.788],
 type:'hill',seed:313,units:{planScale:3,vScale:4},size:{rx:95,ry:70},hill:{h:34,cliff:10,skirt:45},guard:'guard-deccan',people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1550',year:'c. 1550',label:'Sixteenth-century interpretation',short:'Post-1543 period',lens:'engraving',summary:'An illustrative garrison after Sher Shah Suri’s 1543 capture.',basis:'Raisen district records rule by Mandu’s sultans and Rajputs before the 1543 capture.',conjecture:'The exact 1550 garrison, fortification phase, hill, buildings, dimensions and guard appearance are inferred.',sources:['RAI-MP-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic hill fort.',basis:'The district describes the historic sandstone fort and its changing political history.',conjecture:'The actual hill, fortifications, structures and present condition are not surveyed.',sources:['RAI-MP-01']}],
 pois:[{id:'capture',at:[35,20],title:'The 1543 capture',text:'The district records Sher Shah Suri’s capture of Raisen in 1543. This scene does not simulate the event.',source:rai},
 {id:'hill',at:[-30,15],title:'Sandstone fort',text:'The district describes a sandstone fort on a hill. The terrain and walls in this scene are illustrative.',source:rai},
 {id:'phases',at:[0,-20],title:'Changes of rule',text:'The district describes changing rulers before and after 1543; precise architectural phases still need research.',source:rai}]
});
