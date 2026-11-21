// Connected Konkan prototype. Dimensions and all local placements are inferred gameplay geometry.
import {makeFort} from './gen.js';
const source='https://gazetteers.maharashtra.gov.in/cultural.maharashtra.gov.in/english/gazetteer/KOLABA/places_Underi.html';
export default makeFort({
  id:'underi', name:'Underi', native:{text:'उंदेरी',lang:'mr',script:'deva'},
  region:'Raigad · Maharashtra',typeLabel:'Island fort · inferred prototype',coords:[18.700,72.830],
  type:'sea',seed:47,units:{planScale:2,vScale:2},size:{rx:52,ry:49,rot:0},margin:75,
  bastionStep:24,bastionR:3,wallH:5,people:5,visitors:0,guard:'guard-siddi',flag:false,
  gates:[{a:45,name:'Northeastern landing · inferred gate',main:true}],
  buildings:[{name:'Garrison shelter · inferred',x:-12,y:-8,w:12,d:7,kind:'barracks'}],
  eras:[
    {id:'1680',year:'1680',label:'Siddi fortification begins',short:'Siddi outpost',lens:'engraving',
     summary:'Explore a schematic Siddi island outpost opposite Thal, near Khanderi.',
     basis:'The Kolaba Gazetteer records Siddi Kasim taking possession in January 1680 and beginning fortification.',
     conjecture:'The completed defensive circuit is a gameplay abstraction of works begun in 1680. Dimensions, bastion count, gate, shelter, troop numbers, dress and coordinates are inferred; the construction sequence is unknown.',sources:['UND-01']},
    {id:'today',year:'Today',label:'Ruined island fort',short:'Ruins',lens:'none',
     summary:'Explore the same schematic island with ruined buildings and no historical garrison.',
     basis:'The MMR heritage inventory describes surviving fortification in a ruined condition.',
     conjecture:'This is not a survey of present remains. Geometry and access are illustrative; the model does not establish safe visitor access.',sources:['UND-02']}
  ],
  pois:[
    {id:'cove',at:[25,24],title:'Northeastern boat cove',text:'The gazetteer describes a small boat cove on the northeastern side of the rocky island.',ev:'documented',source},
    {id:'fortification',at:[-12,4],title:'Fortification begins',text:'Siddi Kasim occupied Underi and began fortifying it in January 1680. The completed walls shown here are a schematic abstraction.',ev:'documented',source},
    {id:'khanderi',at:[-22,-20],title:'The neighbouring island',text:'Underi and Khanderi formed paired landmarks near the entrance to Bombay harbour. Use the fort chooser to explore Khanderi; this is not a simulated sea crossing.',ev:'documented',source},
    {id:'evidence',at:[10,-12],title:'What remains uncertain',text:'The footprint, wall dimensions, internal shelter and unit placement have not been surveyed. Water storage and the detailed building sequence remain unknown.',ev:'unknown',source}
  ]
});
