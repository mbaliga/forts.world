// Regional modern overview. The source DEM cells are 0.25°, not a tactical map.
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import BASE from '../data/basemap.js';
import {FORTS} from '../data/forts.js';
import {STRATEGIC_DEM,sampleStrategicDEM} from '../game/strategic-terrain.js';
import {HYDRO_RIVERS,decodeHydroPolyline} from '../data/hydrorivers.js';
import goaForts from '../goa/forts.json';

const [west,south,east,north]=BASE.bbox, width=(east-west)*Math.cos(22*Math.PI/180), depth=north-south, exaggeration=15;
const xOf=lon=>(lon-west)/(east-west)*width-width/2, zOf=lat=>(north-lat)/(north-south)*depth-depth/2;
const elevation=(lon,lat)=>sampleStrategicDEM(STRATEGIC_DEM,lon,lat);
const yOf=(lon,lat)=>Math.max(0,elevation(lon,lat)??0)/111320*exaggeration;
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0xd5e1df);document.body.append(renderer.domElement);
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.02,600);camera.position.set(31,43,47);
scene.add(new THREE.HemisphereLight(0xffffff,0x6a8173,2));const sun=new THREE.DirectionalLight(0xfff5dc,1.35);sun.position.set(-35,60,-30);scene.add(sun);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.minDistance=.6;controls.maxDistance=160;controls.maxPolarAngle=Math.PI/2.05;controls.target.set(5,0,3);

// The Natural Earth polygons supply the outline, independently of the much
// coarser elevation grid. Shapes are not proof of precise local shorelines.
const tw=1695,th=1050,mask=document.createElement('canvas');mask.width=tw;mask.height=th;const mc=mask.getContext('2d',{willReadFrequently:true});mc.fillStyle='#fff';
for(const country of BASE.countries)for(const ring of country.rings){if(ring.length<3)continue;mc.beginPath();ring.forEach(([lon,lat],i)=>{const x=(lon-west)/(east-west)*tw,y=(north-lat)/(north-south)*th;i?mc.lineTo(x,y):mc.moveTo(x,y)});mc.closePath();mc.fill();}
const land=mc.getImageData(0,0,tw,th).data;
const base=document.createElement('canvas');base.width=tw;base.height=th;const bc=base.getContext('2d'),img=bc.createImageData(tw,th);
function reliefColor(h){if(h===null)return [164,163,151];if(h<100)return [175,183,137];if(h<350)return [167,176,126];if(h<800)return [177,164,118];if(h<1600)return [161,147,110];if(h<3000)return [148,141,119];if(h<4500)return [168,164,148];return [217,216,205];}
for(let y=0;y<th;y++)for(let x=0;x<tw;x++){const i=(y*tw+x)*4,lon=west+(x+.5)/tw*(east-west),lat=north-(y+.5)/th*(north-south),rgb=land[i+3]>127?reliefColor(elevation(lon,lat)):[91,143,158];img.data[i]=rgb[0];img.data[i+1]=rgb[1];img.data[i+2]=rgb[2];img.data[i+3]=255;}
bc.putImageData(img,0,0);
const surface=document.createElement('canvas');surface.width=tw;surface.height=th;const ctx=surface.getContext('2d');const texture=new THREE.CanvasTexture(surface);texture.colorSpace=THREE.SRGBColorSpace;
function redraw(){ctx.clearRect(0,0,tw,th);ctx.drawImage(base,0,0);if(document.getElementById('rivers').checked){ctx.save();ctx.strokeStyle='#498ca2';ctx.lineWidth=1.2;ctx.beginPath();for(const [,order,encoded] of HYDRO_RIVERS){if(order<6)continue;for(const part of encoded.split('!')){const pts=decodeHydroPolyline(part);if(pts.length<2)continue;pts.forEach(([lon,lat],i)=>{const x=(lon-west)/(east-west)*tw,y=(north-lat)/(north-south)*th;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});}}ctx.stroke();ctx.restore();}texture.needsUpdate=true;}
redraw();document.getElementById('rivers').addEventListener('change',redraw);

const nx=453,ny=281,vertices=new Float32Array(nx*ny*3),uvs=new Float32Array(nx*ny*2),triangles=new Uint32Array((nx-1)*(ny-1)*6);
for(let row=0;row<ny;row++)for(let col=0;col<nx;col++){const i=row*nx+col,lon=west+col/(nx-1)*(east-west),lat=north-row/(ny-1)*(north-south),mx=Math.min(tw-1,Math.round(col/(nx-1)*(tw-1))),my=Math.min(th-1,Math.round(row/(ny-1)*(th-1)));vertices.set([xOf(lon),land[(my*tw+mx)*4+3]>127?yOf(lon,lat):0,zOf(lat)],i*3);uvs.set([col/(nx-1),1-row/(ny-1)],i*2);}
for(let row=0,k=0;row<ny-1;row++)for(let col=0;col<nx-1;col++){const a=row*nx+col,b=a+1,c=a+nx,d=c+1;triangles.set([a,c,b,b,c,d],k);k+=6;}
const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(vertices,3));geo.setAttribute('uv',new THREE.BufferAttribute(uvs,2));geo.setIndex(new THREE.BufferAttribute(triangles,1));geo.computeVertexNormals();scene.add(new THREE.Mesh(geo,new THREE.MeshLambertMaterial({map:texture,side:THREE.DoubleSide})));
const markerGroup=new THREE.Group();scene.add(markerGroup);const markerGeo=new THREE.SphereGeometry(.055,8,6),markerMaterial=new THREE.MeshBasicMaterial({color:0xd55b2c});
const forts=FORTS.filter(f=>Number.isFinite(f.lat)&&Number.isFinite(f.lon)&&f.lon>=west&&f.lon<=east&&f.lat>=south&&f.lat<=north);
for(const f of goaForts){if(!forts.some(p=>Math.hypot((p.lon-f.lon)*Math.cos(f.lat*Math.PI/180),p.lat-f.lat)<.003))forts.push({...f,region:'Goa',country:'India'});}
forts.sort((a,b)=>a.name.localeCompare(b.name));
const select=document.getElementById('sites'),detail=document.getElementById('detail');
function focus(f){const x=xOf(f.lon),z=zOf(f.lat),y=yOf(f.lon,f.lat);controls.target.set(x,y,z);camera.position.set(x+2.6,y+3.8,z+4.2);controls.update();select.value=String(forts.indexOf(f));detail.textContent=`${f.name} · ${f.region}, ${f.country} · ${f.lat.toFixed(4)}°, ${f.lon.toFixed(4)}°. Catalogue position is approximate; this marker is not a reconstructed fort.`;}
forts.forEach((f,i)=>{const opt=document.createElement('option');opt.value=i;opt.textContent=`${f.name} · ${f.region}`;select.append(opt);const m=new THREE.Mesh(markerGeo,markerMaterial);m.position.set(xOf(f.lon),yOf(f.lon,f.lat)+.08,zOf(f.lat));m.userData.fort=f;markerGroup.add(m)});
select.addEventListener('change',()=>{if(select.value!=='')focus(forts[+select.value])});document.getElementById('markers').addEventListener('change',e=>markerGroup.visible=e.target.checked);
document.getElementById('count').textContent=`${forts.length} existing catalogue markers in this extent; the inventory is incomplete.`;
const ray=new THREE.Raycaster(),mouse=new THREE.Vector2();renderer.domElement.addEventListener('click',e=>{if(!markerGroup.visible)return;mouse.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);ray.setFromCamera(mouse,camera);const hit=ray.intersectObjects(markerGroup.children)[0];if(hit)focus(hit.object.userData.fort)});
document.getElementById('reset').onclick=()=>{controls.target.set(5,0,3);camera.position.set(31,43,47);select.value='';detail.textContent='Choose a fort to look at its approximate location.'};
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
function frame(){requestAnimationFrame(frame);controls.update();renderer.render(scene,camera)}frame();
