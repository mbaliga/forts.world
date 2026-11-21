// Prototypes: the actual landscapes, architecture and layouts are not surveyed.
import {makeFort} from './gen.js';
const war='https://warangal.telangana.gov.in/tourist-place/warangal-fort/';
const bho='https://bhongirmunicipality.telangana.gov.in/pages/about-us';
export const warangal=makeFort({
 id:'warangal',name:'Warangal Fort',native:{text:'Warangal',lang:'en',script:'latn'},region:'Warangal · Telangana',typeLabel:'Citadel · inferred prototype',coords:[17.957,79.613],
 type:'hill',seed:223,units:{planScale:3,vScale:4},size:{rx:100,ry:75},hill:{h:10,cliff:4,skirt:25},innerWall:{k:0.62,h:4,gate:60},guard:'guard-deccan',cannons:false,people:6,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1300',year:'c. 1300',label:'Kakatiya period',short:'Kakatiya period',lens:'engraving',summary:'An illustrative Kakatiya-period garrison.',basis:'The Warangal district dates the fort to the thirteenth century and describes four stone gateways.',conjecture:'The generated hill, two walls, gateways, temple, city, dimensions and guard appearance are inferred or unmodeled. No cannon are placed in this early scene.',sources:['WAR-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic fortified site.',basis:'The district describes Warangal’s surviving gateways and Kakatiya monuments.',conjecture:'The actual fort circuits, carved gateways, temple and present-day surroundings are not reconstructed.',sources:['WAR-01']}],
 pois:[{id:'gateways',at:[35,20],title:'Stone gateways',text:'The district describes four monumental stone gateways. The generic gates in this scene do not model them.',source:war},
 {id:'temple',at:[-30,15],title:'Temple and monuments',text:'The district describes a temple and other Kakatiya monuments. Their structures and positions are not reconstructed.',source:war},
 {id:'capital',at:[0,-20],title:'Kakatiya capital',text:'The district describes Warangal as a Kakatiya capital. This scene does not represent the historical city.',source:war}]
});
export const bhongir=makeFort({
 id:'bhongir',name:'Bhongir Fort',native:{text:'Bhongir',lang:'en',script:'latn'},region:'Yadadri Bhuvanagiri · Telangana',typeLabel:'Rock fort · inferred prototype',coords:[17.511,78.889],
 type:'hill',seed:227,units:{planScale:3,vScale:4},size:{rx:85,ry:70},hill:{h:45,cliff:13,skirt:45},guard:'guard-deccan',cannons:false,people:5,flag:false,
 gates:[{a:60,name:'Entrance · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],
 eras:[{id:'1250',year:'c. 1250',label:'Kakatiya interpretation',short:'Kakatiya period',lens:'engraving',summary:'An illustrative early garrison; the precise architecture at this date needs research.',basis:'The municipality describes a fort on isolated rock, an attributed Western Chalukya origin, and associations with Kakatiya rulers.',conjecture:'The rock shape, paths, wall, gateway, buildings, dimensions and guard appearance are inferred. No cannon are placed in this early scene.',sources:['BHO-01','BHO-02']},
 {id:'today',year:'Today',label:'Fort remains',short:'Remains',lens:'none',summary:'Explore a schematic rock fort.',basis:'The municipality and Hyderabad district describe a fort on a prominent rock.',conjecture:'The generated mesa does not reproduce the actual monolith, fort plan or present condition.',sources:['BHO-01','BHO-02']}],
 pois:[{id:'rock',at:[35,20],title:'An isolated rock',text:'Government accounts describe a fort on a prominent isolated rock. The generated hill here is not a survey of that monolith.',source:bho},
 {id:'origin',at:[-30,15],title:'An attributed origin',text:'The municipality attributes construction to a Western Chalukya ruler and notes later Kakatiya associations.',source:bho},
 {id:'approach',at:[0,-20],title:'Approach to the fort',text:'The paths, gates and walls in this scene are illustrative and do not map the actual approach.',source:'https://hyderabad.telangana.gov.in/adventures/'}]
});
