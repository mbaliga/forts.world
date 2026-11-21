// MapLibre is embedded by the standalone build. Basemap and DEM tiles stream online.
import {FORTS} from '../data/forts.js';
import goaForts from '../goa/forts.json';
import {STRATEGIC_DEM} from '../data/strategic-dem-grid.js';
import {makeReliefImage} from './national-relief.js';
import STUDY from '../data/smith-newton-2024.json';

const forts=FORTS.filter(f=>Number.isFinite(f.lat)&&Number.isFinite(f.lon)&&f.lon>=44&&f.lon<=100.5&&f.lat>=4.5&&f.lat<=39.5);
for(const f of goaForts)if(!forts.some(p=>Math.hypot((p.lon-f.lon)*Math.cos(f.lat*Math.PI/180),p.lat-f.lat)<.003))forts.push({...f,region:'Goa',country:'India'});
forts.sort((a,b)=>a.name.localeCompare(b.name));
const supplementary=STUDY.records.filter(f=>Number.isFinite(f.lat)&&Number.isFinite(f.lon)&&f.lon>=44&&f.lon<=100.5&&f.lat>=4.5&&f.lat<=39.5).map(f=>({id:f.id,name:f.name||`Unnamed record ${f.row}`,region:f.region||'Unknown region',country:f.country||'Unknown country',lat:f.lat,lon:f.lon,study:true}));
const allSites=[...forts,...supplementary];
const select=document.getElementById('sites'),detail=document.getElementById('detail'),status=document.getElementById('status'),sceneLink=document.getElementById('scene-link'),search=document.getElementById('search');
const availableScenes=new Set(__FORT_LEVEL_IDS__);
function updateOptions(){const q=search.value.trim().toLowerCase();select.replaceChildren();const placeholder=document.createElement('option');placeholder.value='';placeholder.textContent=q?'Choose a matching site…':'Choose a fort…';select.append(placeholder);for(const [i,f] of allSites.entries()){if(q&&!`${f.name} ${f.region} ${f.country}`.toLowerCase().includes(q))continue;const opt=document.createElement('option');opt.value=i;opt.textContent=`${f.name} · ${f.region}${f.study?' · study':''}`;select.append(opt)}}
updateOptions();search.addEventListener('input',updateOptions);
document.getElementById('count').textContent=`${forts.length} catalogue markers and ${supplementary.length} study records with coordinates. Some are duplicates or uncertain.`;
const map=new maplibregl.Map({container:'map',style:'https://tiles.openfreemap.org/styles/liberty',center:[79.5,23],zoom:4.2,pitch:48,bearing:0,maxPitch:75,attributionControl:true});
map.addControl(new maplibregl.NavigationControl({visualizePitch:true}),'top-right');
function hideModernInfrastructure(){for(const layer of map.getStyle().layers){const source=layer['source-layer']||'';if(['transportation','transportation_name','aeroway','aerodrome_label','building'].includes(source)||layer.id==='landuse_residential'||layer.id==='poi_transit')map.setLayoutProperty(layer.id,'visibility','none')}}
map.on('load',()=>{
 hideModernInfrastructure();
 map.addSource('regional-elevation',{type:'raster-dem',tiles:['https://tiles.mapterhorn.com/{z}/{x}/{y}.webp'],tileSize:512,encoding:'terrarium',maxzoom:12,attribution:'<a href="https://mapterhorn.com/attribution">© Mapterhorn and terrain data contributors</a>'});
 if(document.getElementById('terrain').checked)map.setTerrain({source:'regional-elevation',exaggeration:1.8});
 map.addSource('study-locations',{type:'geojson',data:{type:'FeatureCollection',features:supplementary.map((f,i)=>({type:'Feature',properties:{index:i+forts.length},geometry:{type:'Point',coordinates:[f.lon,f.lat]}}))}});
 map.addLayer({id:'study-markers',type:'circle',source:'study-locations',paint:{'circle-radius':['interpolate',['linear'],['zoom'],4,3.2,10,5],'circle-color':'#d69d26','circle-stroke-width':1,'circle-stroke-color':'#fff8dd'}});
 map.addSource('fort-locations',{type:'geojson',data:{type:'FeatureCollection',features:forts.map((f,i)=>({type:'Feature',properties:{index:i},geometry:{type:'Point',coordinates:[f.lon,f.lat]}}))}});
 map.addLayer({id:'fort-markers',type:'circle',source:'fort-locations',paint:{'circle-radius':['interpolate',['linear'],['zoom'],4,5,10,7],'circle-color':'#b73d24','circle-stroke-width':1.5,'circle-stroke-color':'#fff8dd'}});
 for(const layer of ['fort-markers','study-markers']){map.on('click',layer,e=>{const i=e.features?.[0]?.properties?.index;if(i!==undefined)focus(allSites[Number(i)])});map.on('mouseenter',layer,()=>map.getCanvas().style.cursor='pointer');map.on('mouseleave',layer,()=>map.getCanvas().style.cursor='');}
 if(!document.getElementById('markers').checked)map.setLayoutProperty('fort-markers','visibility','none');
 if(!document.getElementById('study').checked)map.setLayoutProperty('study-markers','visibility','none');
 try {
 const g=STRATEGIC_DEM,west=g.xllcorner,south=g.yllcorner,east=west+g.ncols*g.cellsize,north=south+g.nrows*g.cellsize;
 map.addSource('national-relief',{type:'image',url:makeReliefImage(g),coordinates:[[west,north],[east,north],[east,south],[west,south]]});
 const before=map.getStyle().layers.find(l=>l.id==='study-markers')?.id;
 map.addLayer({id:'national-relief',type:'raster',source:'national-relief',paint:{'raster-opacity':['interpolate',['linear'],['zoom'],4,.8,6,.65,7.5,0]}},before);
 if(!document.getElementById('relief').checked)map.setLayoutProperty('national-relief','visibility','none');
 }catch(error){console.warn('National relief unavailable:',error);}
 status.textContent='Terrain and map are loading as you explore.';
});
map.on('error',e=>{status.textContent='Some map or terrain data could not load. Check your internet connection; the offline overview remains available.';console.warn('Map data error:',e.error?.message||e.error)});
let selected=null;
function openScene(){if(!selected||!availableScenes.has(selected.id))return;const panel=document.getElementById('scene-panel'),frame=document.getElementById('scene-frame');document.getElementById('scene-title').textContent=`${selected.name} · research scene`;frame.src=`index.html?fort=${encodeURIComponent(selected.id)}`;panel.hidden=false;}
function focus(f){if(!f)return;selected=f;select.value=String(allSites.indexOf(f));const hasScene=availableScenes.has(f.id);detail.textContent=`${f.name} · ${f.region}, ${f.country} · ${f.lat.toFixed(4)}°, ${f.lon.toFixed(4)}°. ${f.study?'Study record; location and duplicates require verification.':'Approximate catalogue marker.'} ${hasScene?'Opening incomplete local research scene.':'No local 3D scene is available yet.'}`;sceneLink.hidden=!hasScene;map.flyTo({center:[f.lon,f.lat],zoom:11.3,pitch:60,bearing:0,essential:true});if(hasScene)openScene();}
select.addEventListener('change',()=>{if(select.value!=='')focus(allSites[+select.value])});
sceneLink.addEventListener('click',openScene);
document.getElementById('scene-close').addEventListener('click',()=>{document.getElementById('scene-panel').hidden=true;document.getElementById('scene-frame').src='about:blank';map.resize()});
document.getElementById('markers').onchange=e=>{if(map.getLayer('fort-markers'))map.setLayoutProperty('fort-markers','visibility',e.target.checked?'visible':'none')};
document.getElementById('study').onchange=e=>{if(map.getLayer('study-markers'))map.setLayoutProperty('study-markers','visibility',e.target.checked?'visible':'none')};
document.getElementById('terrain').onchange=e=>{if(map.getSource('regional-elevation'))map.setTerrain(e.target.checked?{source:'regional-elevation',exaggeration:1.8}:null)};
document.getElementById('relief').onchange=e=>{if(map.getLayer('national-relief'))map.setLayoutProperty('national-relief','visibility',e.target.checked?'visible':'none')};
document.getElementById('reset').onclick=()=>{map.flyTo({center:[79.5,23],zoom:4.2,pitch:48,bearing:0});search.value='';updateOptions();selected=null;sceneLink.hidden=true;detail.textContent='Choose a fort to explore its approximate location.'};
