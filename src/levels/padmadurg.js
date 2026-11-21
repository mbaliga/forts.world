// Schematic connected Konkan scene. Location, layout and dimensions are not surveyed.
import {makeFort} from './gen.js';
const source='https://www.gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/KOLABA/places_Padmadurg.html';
export default makeFort({
 id:'padmadurg',name:'Padmadurg (Kasa)',native:{text:'पद्मदुर्ग',lang:'mr',script:'deva'},
 region:'Raigad · Maharashtra',typeLabel:'Island fort · inferred prototype',coords:[18.322,72.948],
 type:'sea',seed:53,units:{planScale:2,vScale:2},size:{rx:70,ry:50,rot:20},margin:90,
 bastionStep:50,bastionR:3.5,wallH:6,people:4,visitors:0,trees:4,guard:'guard-maratha',flag:false,
 gates:[{a:35,name:'Sea gate · position inferred',main:true}],
 buildings:[{name:'Garrison shelter · inferred',x:-20,y:-10,w:12,d:7,kind:'barracks'}],
 tanks:[{name:'Rain-fed cistern · position inferred',x:20,y:12,rx:5,ry:4}],
 eras:[
  {id:'1693',year:'c. 1693',label:'Maratha island fort',short:'Island fort',lens:'engraving',
   summary:'A schematic view of the island fort near Janjira, with an illustrative Maratha garrison.',
   basis:'The Kolaba Gazetteer calls it Kansa or Padmadurg and mentions it among newly built Maratha forts about 1693.',
   conjecture:'The campaign currently uses an earlier inferred date of 1676; the dates have not been reconciled. Ownership, troop numbers, internal plan, wall geometry, cistern placement and coordinates need further verification.',sources:['PAD-01']},
  {id:'today',year:'Today',label:'Island fort remains',short:'Remains',lens:'none',
   summary:'Explore an illustrative reconstruction of the island fort.',
   basis:'The gazetteer describes fortifications and a rain-fed cistern; its account is historical, not a current survey.',
   conjecture:'Today’s condition and safe access are not represented as surveyed facts. Dimensions, layout and placements are inferred.',sources:['PAD-01']}
 ],
 pois:[
  {id:'cistern',at:[20,20],title:'Rain-fed cistern',text:'The gazetteer describes a large cistern filled by rain and used through the dry season. Its modeled shape and placement are guesses.',ev:'documented',source},
  {id:'walls',at:[-30,15],title:'Fortified rock',text:'The gazetteer describes walls following the rocky island, with bastions and a gateway. This model does not reproduce a measured plan.',ev:'documented',source},
  {id:'janjira',at:[-12,-22],title:'Janjira and the Rajpuri approach',text:'Padmadurg lies in the wider Janjira and Rajpuri coastal setting. Use the fort chooser to visit Janjira; the sea crossing is not simulated here.',ev:'documented',source},
  {id:'evidence',at:[25,-18],title:'A disputed chronology',text:'The campaign’s earlier construction date is inferred. The gazetteer cites an approximately 1693 mention; the evidence has not yet been reconciled.',ev:'unknown',source}
 ]
});
