// The generated layouts are illustrative, not surveys or models of modern facilities.
import {makeFort} from './gen.js';
const customs='https://kolkatacustoms.gov.in/page/history';
const municipal='https://kmcuat.wb.gov.in/MunicipalHistory';
const cuttack='https://cuttack.odisha.gov.in/en/about-district/history';
const profile='https://cuttack.odisha.gov.in/en/about-district/district-profile';
const tourism='https://odishatourism.gov.in/en/places/barabati-fort';
export const fortWilliam=makeFort({
 id:'fort-william',name:'Fort William, Kolkata',native:{text:'Fort William',lang:'en',script:'latn'},region:'Kolkata · West Bengal',typeLabel:'Company fort · inferred prototype',coords:[22.555,88.338],
 type:'hill',shape:'octagon',seed:499,units:{planScale:4,vScale:4},size:{rx:110,ry:80},hill:{h:6,cliff:3,skirt:18},guard:'sepoy',people:5,visitors:0,todayPeople:false,flag:false,
 gates:[{a:65,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1785',until:1786,year:'c. 1785',label:'Company period',short:'Company period',lens:'engraving',summary:'An illustrative garrison after the new fort’s completion.',basis:'Kolkata Customs distinguishes the old and new forts and dates completion of the new Fort William to 1781.',conjecture:'The actual fort plan, river, city, buildings, garrison and troop appearance are not reconstructed. This scene does not depict the older fort.',sources:['FWK-01','FWK-02']},
 {id:'today',year:'Today',label:'Fort site',short:'Present',lens:'none',summary:'Explore a fictional schematic site.',basis:'The municipality records the building of the new fort at its present site.',conjecture:'The current fort, surroundings, facilities, access and condition are not modeled. The enclosure is fictional and has no simulated visitors.',sources:['FWK-02']}],
 pois:[{id:'new',at:[35,20],title:'The new fort',text:'Kolkata Customs dates completion of the new fort to 1781. The generated enclosure is not its surveyed plan.',source:customs},
 {id:'old',at:[-30,15],title:'The earlier Fort William',text:'Kolkata’s municipal history describes the earlier fort, begun in 1697. It stood at a different site and is not modeled here.',source:municipal},
 {id:'city',at:[0,-20],title:'Kolkata setting',text:'The Hooghly, city, routes and historic settlements are not modeled.',source:municipal}]
});
export const barabati=makeFort({
 id:'barabati',name:'Barabati Fort',native:{text:'Barabati',lang:'en',script:'latn'},region:'Cuttack · Odisha',typeLabel:'Moated fort · inferred prototype',coords:[20.484,85.866],
 type:'moat',shape:'square',seed:503,units:{planScale:4,vScale:4},size:{rx:105,ry:80},moatWidth:7.6,moatOnly:'today',guard:'guard-rajput',people:5,flag:false,cannons:false,boats:[],
 gates:[{a:30,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1300',until:1301,year:'c. 1300',label:'Eastern Ganga interpretation',short:'Ganga period',lens:'engraving',summary:'An illustrative earlier fort.',basis:'Cuttack district attributes construction of Barabati Fort to Anangabhimadeva III in 1229.',conjecture:'The fort’s exact 1300 plan, waterworks, palace, garrison, settlement and terrain are not established; generic figures are placeholders. The later moat cue is omitted.',sources:['BAR-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic fort with a moat.',basis:'Cuttack district describes surviving ruins, a moat, gate and palace mound by the Mahanadi.',conjecture:'The moat’s dimensions, water level, course, access, fort plan, rivers, city and current condition are not surveyed; the scene is illustrative.',sources:['BAR-02']}],
 pois:[{id:'moat',at:[35,20],title:'Moat and gate',text:'The district describes a surviving moat and gate. This scene’s outline, causeway and water are inferred; the earlier moat phase is not modeled.',source:profile},
 {id:'palace',at:[-30,15],title:'Palace mound',text:'The district identifies a mound associated with a Ganga-dynasty palace. Neither the mound nor the palace is reconstructed.',source:profile},
 {id:'chronology',at:[0,-20],title:'Chronology and rivers',text:'The district dates the fort to 1229, while Odisha Tourism describes an earlier origin and later expansions. The differing accounts require further research; neither the Mahanadi nor Kathajodi is modeled.',source:tourism}]
});
