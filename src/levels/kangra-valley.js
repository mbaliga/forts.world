// Generated scenes with illustrative temples, not surveyed reproductions of these forts.
import {makeFort} from './gen.js';
const kangraSource='https://hpkangra.nic.in/tourist-place/kangra-fort/';
const temples='https://himachaltourism.gov.in/destination/architectural/';
const nurpurSource='https://hpkangra.nic.in/tourist-place/nurpur-fort/';
export function buildTempleCue(W,era,site){
 if(site==='kangra' && era!=='today') return;
 // The generic shrine is a visual cue; its plan, materials and exact location are inferred.
 const x=-42,y=-42;
 W.temple({x,y,w:5,h:7,style:'nagara',plinth:0.6,mandapa:{d:4,w:6,h:2.8,roof:'flat'},color:'stone',base:W.ground(x,y)});
}
export const kangra=makeFort({
 id:'kangra',name:'Kangra Fort',native:{text:'Kangra',lang:'en',script:'latn'},region:'Kangra · Himachal Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[32.082,76.270],
 type:'hill',seed:571,units:{planScale:4,vScale:5},size:{rx:135,ry:95},hill:{h:38,cliff:14,skirt:42},guardByEra:{'1610':'guard-rajput','1625':'guard-mughal'},people:6,flag:false,
 gates:[{a:65,name:'Ascent · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],extraBuild:(W,{era})=>buildTempleCue(W,era,'kangra'),
 eras:[{id:'1610',until:1615,year:'c. 1610',label:'Katoch interpretation',short:'Katoch',lens:'engraving',summary:'An illustrative earlier hill fort.',basis:'Kangra district associates the fort with the Katoch dynasty and records resistance to Mughal forces in 1615.',conjecture:'The 1610 fort plan, buildings, setting and garrison are unverified; troops are generic and the terrain is illustrative.',sources:['KNG-01']},
 {id:'1625',until:1626,year:'c. 1625',label:'Mughal interpretation',short:'Mughal period',lens:'engraving',summary:'An illustrative fort after the Mughal conquest.',basis:'Kangra district dates Jahangir’s conquest to 1619–1620 and describes subsequent Mughal administration.',conjecture:'The 1625 architectural phase, garrison, fort plan and landscape are not reconstructed; figures are placeholders.',sources:['KNG-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic hill fort.',basis:'Kangra district records the 1905 earthquake and Himachal Tourism describes temples within the fort.',conjecture:'The actual earthquake damage, temples, fort plan, rivers and present condition are not reconstructed; the generic temple is an illustrative cue.',sources:['KNG-01','KNG-02']}],
 pois:[{id:'temples',at:[-42,-26],title:'Temples',text:'Himachal Tourism identifies several temples within the fort. The present-day shrine is a generic cue; its position, form and historical phase are not established.',source:temples},
 {id:'control',at:[35,20],title:'Changing control',text:'District records describe Mughal, Katoch and Sikh periods. The two early scenes are snapshots and do not reconstruct the intervening or later periods.',source:kangraSource},
 {id:'earthquake',at:[-30,15],title:'1905 earthquake',text:'The district records major damage in 1905. The generated ruins do not reproduce the damage.',source:kangraSource}]
});
export const nurpur=makeFort({
 id:'nurpur',name:'Nurpur Fort',native:{text:'Nurpur',lang:'en',script:'latn'},region:'Nurpur · Himachal Pradesh',typeLabel:'Hill fort · inferred prototype',coords:[32.300,75.889],
 type:'hill',seed:577,units:{planScale:4,vScale:5},size:{rx:110,ry:80},hill:{h:30,cliff:11,skirt:35},guard:'guard-rajput',people:5,flag:false,
 gates:[{a:60,name:'Ascent · position inferred',main:true}],buildings:[{name:'Shelter · inferred',x:-15,y:-13,w:12,d:7,kind:'barracks'}],extraBuild:(W,{era})=>buildTempleCue(W,era,'nurpur'),
 eras:[{id:'1620',until:1621,year:'c. 1620',label:'Pathania interpretation',short:'Pathania period',lens:'engraving',summary:'An illustrative hill-fort settlement.',basis:'Kangra district describes the fort’s Pathania history and identifies its temple as sixteenth-century.',conjecture:'The exact 1620 plan, temple appearance, garrison, landscape and settlement are unverified. The shrine and figures are generic placeholders.',sources:['NUR-01']},
 {id:'today',year:'Today',label:'Fort remains',short:'Present',lens:'none',summary:'Explore a schematic hill fort.',basis:'Kangra district describes the ruined fort and active Brij Raj Swami Temple.',conjecture:'The actual temple, fort, river, town and present condition are not reconstructed. The generic shrine is an illustrative cue.',sources:['NUR-01']}],
 pois:[{id:'temple',at:[-42,-26],title:'Brij Raj Swami Temple',text:'The district identifies a sixteenth-century temple within the fort. The generic shrine does not reconstruct its plan, architecture or location.',source:nurpurSource},
 {id:'river',at:[35,20],title:'Jabbar river setting',text:'The district describes a hillock overlooking the Jabbar. The river, slopes and town are not modeled.',source:nurpurSource},
 {id:'damage',at:[-30,15],title:'Later damage',text:'The district records later damage and the 1905 earthquake. The scene does not reconstruct those events or the present ruins.',source:nurpurSource}]
});
