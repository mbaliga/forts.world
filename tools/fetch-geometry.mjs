// Fetch raw open geometry for fort sites. Runs where the internet is available (GitHub Actions or your machine).
// Usage: node tools/fetch-geometry.mjs <site_id[,site_id...]> [radiusM=1200]
// Reads lat/lon from docs/fort-fidelity/ledger.csv; writes data/geometry/<id>/{osm.json,terrarium/*.png,meta.json}.
// Data: OpenStreetMap (c) contributors, ODbL; Terrarium tiles (Mapzen/AWS Open Data, SRTM etc.). Raw only, never edited.
import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(new URL('..',import.meta.url).pathname);
const spec=(process.argv[2]||'').split(',').filter(Boolean);const R0=+(process.argv[3]||1200);
// site ids may carry their own radius: gwalior:2400 (large forts whose outline is longer than the default window)
const ids=spec.map(s=>s.split(':')[0]);const RAD=Object.fromEntries(spec.map(s=>{const[a,b]=s.split(':');return[a,+b||R0]}));
if(!ids.length){console.error('usage: fetch-geometry.mjs id[,id] [radius]');process.exit(1)}
const rows=fs.readFileSync(path.join(root,'docs/fort-fidelity/ledger.csv'),'utf8').trim().split('\n').slice(1).map(l=>l.match(/("([^"]|"")*"|[^,]*)(,|$)/g).map(s=>s.replace(/,$/,'').replace(/^"|"$/g,'')));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
for(const id of ids){const R=RAD[id];
  const row=rows.find(r=>r[0]===id);if(!row){console.error('not in ledger',id);continue}
  const lat=+row[4],lon=+row[5],out=path.join(root,'data/geometry',id);fs.mkdirSync(path.join(out,'terrarium'),{recursive:true});
  const q=`[out:json][timeout:90];(way["historic"](around:${R},${lat},${lon});way["barrier"~"wall|city_wall"](around:${R},${lat},${lon});way["building"](around:${R},${lat},${lon});way["natural"~"water|coastline|cliff|bare_rock"](around:${R},${lat},${lon});way["waterway"](around:${R},${lat},${lon});way["highway"](around:${R},${lat},${lon});way["landuse"](around:${R},${lat},${lon});relation["historic"](around:${R},${lat},${lon});node["historic"](around:${R},${lat},${lon}););out geom;`;
  // Overpass is often overloaded: try each mirror up to 3 rounds with backoff before giving up (meta.osm=false means it never answered)
  let ok=false;for(let round=0;round<3&&!ok;round++){for(const ep of['https://overpass.openstreetmap.fr/api/interpreter','https://overpass-api.de/api/interpreter','https://overpass.private.coffee/api/interpreter','https://overpass.kumi.systems/api/interpreter']){
    try{const r=await fetch(ep,{method:'POST',body:'data='+encodeURIComponent(q),headers:{'content-type':'application/x-www-form-urlencoded','user-agent':'forts.world-fort-fidelity/1.0 (https://github.com/mbaliga/forts.world)'},signal:AbortSignal.timeout(120000)});if(r.ok){const t=await r.text();if(/"remark"\s*:\s*"[^"]*(error|timed out|out of memory)/i.test(t)){console.error(id,ep,'remark');await sleep(5000);continue}fs.writeFileSync(path.join(out,'osm.json'),t);ok=true;break}console.error(id,ep,r.status);await sleep(5000)}catch(e){console.error(id,ep,e.message);await sleep(5000)}}
    if(!ok)await sleep(20000*(round+1))}
  const z=15,n=2**z,tx=(lo)=>Math.floor((lo+180)/360*n),ty=(la)=>{const s=Math.sin(la*Math.PI/180);return Math.floor((0.5-Math.log((1+s)/(1-s))/(4*Math.PI))*n)};
  const dLat=R/111320,dLon=R/(111320*Math.cos(lat*Math.PI/180)),tiles=[];
  for(let x=tx(lon-dLon);x<=tx(lon+dLon);x++)for(let y=ty(lat+dLat);y<=ty(lat-dLat);y++)tiles.push([x,y]);
  for(const[x,y]of tiles){try{const r=await fetch(`https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${x}/${y}.png`);if(r.ok)fs.writeFileSync(path.join(out,'terrarium',`${z}_${x}_${y}.png`),Buffer.from(await r.arrayBuffer()))}catch(e){console.error(id,'tile',x,y,e.message)}}
  fs.writeFileSync(path.join(out,'meta.json'),JSON.stringify({id,lat,lon,radiusM:R,osm:ok,tiles:tiles.length,fetched:new Date().toISOString(),licence:'OSM ODbL; Terrarium per AWS Open Data docs'},null,1));
  console.log(id,'osm',ok,'tiles',tiles.length);await sleep(3000);
}
