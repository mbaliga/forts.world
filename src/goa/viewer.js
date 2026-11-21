import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import terrain from './terrain.json';
import osmForts from './forts.json';
import {FORTS} from '../data/forts.js';

const {nx,ny,bounds:[west,south,east,north]}=terrain;
const decode=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const eb=decode(terrain.elevation), heights=new Int16Array(eb.buffer), cover=decode(terrain.cover);
const W=(east-west)*111.32*Math.cos(15.35*Math.PI/180), H=(north-south)*111.32, exaggeration=6;
const pos=(lon,lat)=>[(lon-west)/(east-west)*W-W/2,(north-lat)/(north-south)*H-H/2];
const indexAt=(lon,lat)=>Math.max(0,Math.min(ny-1,Math.round((north-lat)/(north-south)*(ny-1))))*nx+Math.max(0,Math.min(nx-1,Math.round((lon-west)/(east-west)*(nx-1))));
const ground=i=>(cover[i]===80?0:Math.max(0,heights[i]))/1000*exaggeration;
const colors={10:0x47784f,20:0x79965a,30:0xa1ad70,40:0xb7b87c,50:0xcbbda3,60:0xc4b49a,70:0xe6e4db,80:0x4a8997,90:0x769a78,95:0x427a68,100:0x918f76};
const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0xd4e3df);document.body.append(renderer.domElement);
const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,0.1,1000);camera.position.set(62,105,126);
scene.add(new THREE.HemisphereLight(0xf0f6e8,0x667e6a,2.1));const sun=new THREE.DirectionalLight(0xfff5dd,2);sun.position.set(-60,100,-50);scene.add(sun);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.target.set(0,0,0);controls.minDistance=3;controls.maxDistance=280;controls.maxPolarAngle=Math.PI/2.04;
const verts=new Float32Array(nx*ny*3), cols=new Float32Array(nx*ny*3), indices=new Uint32Array((nx-1)*(ny-1)*6), color=new THREE.Color();
for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){let i=y*nx+x;verts[i*3]=x/(nx-1)*W-W/2;verts[i*3+1]=ground(i);verts[i*3+2]=y/(ny-1)*H-H/2;color.setHex(colors[cover[i]]||0xbab7a0);cols.set([color.r,color.g,color.b],i*3);}
for(let y=0,k=0;y<ny-1;y++)for(let x=0;x<nx-1;x++){const a=y*nx+x,b=a+1,c=a+nx,d=c+1;indices.set([a,c,b,b,c,d],k);k+=6;}
const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(verts,3));geo.setAttribute('color',new THREE.BufferAttribute(cols,3));geo.setIndex(new THREE.BufferAttribute(indices,1));geo.computeVertexNormals();scene.add(new THREE.Mesh(geo,new THREE.MeshLambertMaterial({vertexColors:true,side:THREE.DoubleSide})));
// Symbolic tree clusters: placed only in tree-cover cells, not individual trees.
const candidates=[];for(let y=2;y<ny-2;y+=3)for(let x=2;x<nx-2;x+=3){const i=y*nx+x;if(cover[i]!==10)continue;let near=false;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)if(cover[i+dy*nx+dx]===50)near=true;if(!near)candidates.push(i);}
const trees=new THREE.InstancedMesh(new THREE.ConeGeometry(.085,.36,5),new THREE.MeshLambertMaterial({color:0x345f3a}),candidates.length), obj=new THREE.Object3D();
candidates.forEach((i,k)=>{obj.position.set(verts[i*3],ground(i)+.18,verts[i*3+2]);obj.rotation.y=(i%19)*.33;obj.updateMatrix();trees.setMatrixAt(k,obj.matrix)});scene.add(trees);
const mapForts=FORTS.filter(f=>f.region==='Goa').map(f=>({name:f.name,lat:f.lat,lon:f.lon,source:'Project catalogue',url:'https://www.goa.gov.in/what_to_see/forts/'}));
const forts=[...mapForts];for(const f of osmForts){if(!forts.some(p=>Math.hypot((p.lon-f.lon)*Math.cos(f.lat*Math.PI/180),p.lat-f.lat)<.003))forts.push(f)}
forts.sort((a,b)=>a.name.localeCompare(b.name));
const markerGeo=new THREE.SphereGeometry(.22,12,8), markerMat=new THREE.MeshLambertMaterial({color:0xf1ad49}), poles=new THREE.MeshLambertMaterial({color:0x684b2f});
const select=document.getElementById('forts'),detail=document.getElementById('detail');
function focus(f){const [x,z]=pos(f.lon,f.lat),h=ground(indexAt(f.lon,f.lat));controls.target.set(x,h,z);camera.position.set(x+8,h+15,z+17);controls.update();select.value=String(forts.indexOf(f));detail.textContent=`${f.name} · ${f.lat.toFixed(5)}, ${f.lon.toFixed(5)} · ${f.source}. Marker location is approximate; this is not a fort model.`;}
forts.forEach((f,n)=>{let option=document.createElement('option');option.value=n;option.textContent=f.name;select.append(option);const [x,z]=pos(f.lon,f.lat),h=ground(indexAt(f.lon,f.lat));const pole=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,1.5,6),poles);pole.position.set(x,h+.75,z);scene.add(pole);const m=new THREE.Mesh(markerGeo,markerMat);m.position.set(x,h+1.6,z);m.userData.fort=f;scene.add(m)});
select.addEventListener('change',()=>{if(select.value!=='')focus(forts[+select.value])});
const ray=new THREE.Raycaster(), mouse=new THREE.Vector2();renderer.domElement.addEventListener('click',e=>{mouse.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);ray.setFromCamera(mouse,camera);const hit=ray.intersectObjects(scene.children).find(h=>h.object.userData.fort);if(hit)focus(hit.object.userData.fort)});
document.getElementById('reset').onclick=()=>{controls.target.set(0,0,0);camera.position.set(62,105,126);select.value='';detail.textContent='Select a marker or choose a site to inspect it.'};
document.getElementById('trees').onchange=e=>trees.visible=e.target.checked;
document.getElementById('count').textContent=`${forts.length} mapped or catalogue markers · inventory incomplete`;
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
function animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera)}animate();
