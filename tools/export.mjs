// Exports each fort (each era) as a .glb model and its schematic plan as .svg, in Node.
// usage: node tools/export.mjs <outDir> [level-id ... | path/to/level.js ...] [--era=<id>] [--flat] [--no-normals]
// writes <outDir>/<level-id>/<level-id>_<era>.raw.glb and _plan.svg; then run tools/geo/compress.mjs, preview.py, sheets.py
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import fs from 'node:fs';
import path from 'node:path';
import { World } from '../src/core/world.js';
import '../src/core/arch.js';
import '../src/core/props.js';
import { gunParts } from '../src/core/props.js';
import '../src/core/camp.js';
import '../src/core/ground.js';
import { LEVELS as ALL } from '../src/levels/index.js';
import { pathToFileURL } from 'node:url';
import { buildScene } from '../src/game/scene.js';
import { renderPlan } from '../src/plan/svg.js';

globalThis.FileReader = class {
  readAsArrayBuffer(b) { b.arrayBuffer().then((r) => { this.result = r; this.onload?.({ target: this }); this.onloadend?.({ target: this }); }); }
  readAsDataURL(b) { b.arrayBuffer().then((r) => { this.result = `data:${b.type || 'application/octet-stream'};base64,` + Buffer.from(r).toString('base64'); this.onload?.({ target: this }); this.onloadend?.({ target: this }); }); }
};

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const flags = new Set(process.argv.slice(2).filter((a) => a.startsWith('--')));
const outDir = path.resolve(args[0] || 'dist/exports');
let LEVELS = ALL, only = args.slice(1);
const files = only.filter((a) => a.endsWith('.js'));
if (files.length) { LEVELS = []; for (const f of files) LEVELS.push((await import(pathToFileURL(path.resolve(f)).href)).default); only = []; }
if (flags.has('--t1')) {
  // auto-T1 / traced forts: build each data/traces/*.trace.json through the same scene builder and export it
  const { makeT1 } = await import('../src/levels/t1.js');
  const tdir = path.resolve('data/traces'), handIds = new Set(ALL.map((l) => l.id));
  const names = fs.readdirSync(tdir).filter((f) => f.endsWith('.trace.json')).sort();
  LEVELS = []; for (const f of names) { const id = f.replace('.trace.json', ''); if (handIds.has(id) && !only.includes(id)) continue; if (only.length && !only.includes(id)) continue; try { LEVELS.push(makeT1(JSON.parse(fs.readFileSync(path.join(tdir, f), 'utf8')))); } catch (err) { console.error('skip', id, err.message); } }
}
const LOD = +([...flags].find((f) => f.startsWith('--lod='))?.slice(6) ?? 0);
const eraOnly = [...flags].find((f) => f.startsWith('--era='))?.slice(6);
fs.mkdirSync(outDir, { recursive: true });

// flatten an InstancedMesh into one ordinary mesh with per-vertex colours
function bakeInstances(im, keep) {
  const g = im.geometry.index ? im.geometry.toNonIndexed() : im.geometry;
  const pos = g.attributes.position, col = g.attributes.color, nor = g.attributes.normal;
  const n = pos.count, N = im.count;
  const P = new Float32Array(n * N * 3), Cc = new Float32Array(n * N * 3), Nn = new Float32Array(n * N * 3);
  const m = new THREE.Matrix4(), nm = new THREE.Matrix3(), v = new THREE.Vector3(), c = new THREE.Color();
  let j = 0;
  for (let i = 0; i < N; i++) {
    im.getMatrixAt(i, m);
    if (keep && !keep(m.elements[12], -m.elements[14])) continue;
    nm.getNormalMatrix(m);
    if (im.instanceColor) im.getColorAt(i, c); else c.setRGB(1, 1, 1);
    for (let k = 0; k < n; k++) {
      const o = (j * n + k) * 3;
      v.fromBufferAttribute(pos, k).applyMatrix4(m); P[o] = v.x; P[o + 1] = v.y; P[o + 2] = v.z;
      if (nor) { v.fromBufferAttribute(nor, k).applyMatrix3(nm).normalize(); Nn[o] = v.x; Nn[o + 1] = v.y; Nn[o + 2] = v.z; }
      Cc[o] = (col ? col.getX(k) : 1) * c.r; Cc[o + 1] = (col ? col.getY(k) : 1) * c.g; Cc[o + 2] = (col ? col.getZ(k) : 1) * c.b;
    }
    j++;
  }
  if (!j) return null;
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(P.subarray(0, j * n * 3), 3));
  if (nor) out.setAttribute('normal', new THREE.BufferAttribute(Nn.subarray(0, j * n * 3), 3));
  out.setAttribute('color', new THREE.BufferAttribute(Cc.subarray(0, j * n * 3), 3));
  return out;
}

async function exportGLB(scene) {
  return new Promise((res, rej) => new GLTFExporter().parse(scene, (r) => res(Buffer.from(r)), rej, { binary: true }));
}

for (const def of LEVELS) {
  if (only.length && !only.includes(def.id)) continue;
  const manifest = { id: def.id, name: def.name, native: def.native?.text, region: def.region, type: def.type, coords: def.coords, planScale: def.units?.planScale ?? 1, eras: [] };
  for (const e of def.eras) {
    if (eraOnly && e.id !== eraOnly) continue;
    const W = new World(def, { era: e.id });
    def.build(W);
    W.finish();
    const view = buildScene(W);
    const scene = new THREE.Scene();
    const root = new THREE.Group(); root.name = `${def.id}-${e.id}`;
    scene.add(root);
    scene.userData = root.userData = {
      fort: def.name, native: def.native?.text, region: def.region, type: def.type, coords: def.coords,
      era: { id: e.id, year: e.year, label: e.label, summary: e.summary, basis: e.basis, conjecture: e.conjecture, sources: e.sources },
      units: 'metres (1 unit = 1 m at human scale' + (def.units?.planScale > 1 ? `; plan distances compressed about ${def.units.planScale}:1` : '') + '); +Y up, -Z north',
      view: { az: def.view?.az ?? -38, el: def.view?.el ?? 34 },
      note: 'Schematic reconstruction made for the Ten Forts of India isometric game; not a measured survey.',
    };
    const std = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
    view.group.updateMatrixWorld(true);
    // operable guns are drawn by the game itself; bake them into the model at their starting positions
    if (W.guns.length) {
      const g0 = W.guns[0], parts = gunParts(g0.len, g0.r, W.pal.iron, W.pal.wood);
      for (const g of W.guns) for (const part of [parts.barrel, parts.carriage]) {
        const geo = part.clone(); geo.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(g.x, g.h, -g.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, g.dir * Math.PI / 180, 0)), new THREE.Vector3(1, 1, 1)));
        const m = new THREE.Mesh(geo, std); m.name = 'guns'; root.add(m);
      }
    }
    view.group.traverse((o) => {
      if (!o.isMesh) return;
      if (['apron', 'backdrop', 'surf', 'clouds', 'mist', 'birds'].includes(o.name)) return;
      let geo;
      const T = W.terrain, inside = (x, y) => x >= T.x0 && x <= T.x1 && y >= T.y0 && y <= T.y1;
      if (o.isInstancedMesh) { if (LOD >= 1) return; geo = bakeInstances(o, inside); if (!geo) return; }
      else if (o.name === 'sea') {
        // the game's sea runs to the horizon; the model gets a slab of sea cut to the level's bounds
        geo = new THREE.PlaneGeometry(T.x1 - T.x0, T.y1 - T.y0, 1, 1); geo.rotateX(-Math.PI / 2);
        geo.translate((T.x0 + T.x1) / 2, W.seaLevel, -(T.y0 + T.y1) / 2);
      } else {
        const wp = new THREE.Vector3().setFromMatrixPosition(o.matrixWorld);
        if (o.parent !== view.group && !inside(wp.x, -wp.z)) return; // boats moored off-map
        geo = o.geometry.clone(); geo.applyMatrix4(o.matrixWorld);
      }
      if (flags.has('--no-normals')) geo.deleteAttribute('normal');
      let mat = std;
      if (o.name === 'sea') mat = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(...W.pal.water), roughness: 0.3, transparent: true, opacity: 0.85 });
      else if (o.name === 'tanks') mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.3, transparent: true, opacity: 0.9 });
      else if (!geo.attributes.color) {
        const src = o.material?.color || new THREE.Color(1, 1, 1);
        mat = new THREE.MeshStandardMaterial({ color: src.clone(), roughness: 0.9, side: o.material?.side ?? THREE.FrontSide });
      }
      const m = new THREE.Mesh(geo, mat); m.name = o.name || o.parent?.name || 'part';
      root.add(m);
    });
    let tris = 0; root.traverse((o) => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
    const glb = await exportGLB(scene);
    const dir = flags.has('--flat') ? outDir : path.join(outDir, def.id);
    fs.mkdirSync(dir, { recursive: true });
    const base = path.join(dir, `${def.id}_${e.id}`);
    fs.writeFileSync(base + (LOD ? `.lod${LOD}` : '') + '.raw.glb', glb);
    const meta = {
      title: `PLAN OF ${def.name.toUpperCase()}`,
      subtitle: `${def.region} · ${def.coords[0].toFixed(3)}° N, ${def.coords[1].toFixed(3)}° E`,
      era: `${e.year} · ${e.label}`,
      notes: [
        'Schematic reconstruction drawn for the Ten Forts of India game; not a measured survey.',
        def.units?.planScale && def.units.planScale !== 1 ? `Distances are compressed in plan: one drawing unit stands for about ${def.units.planScale} m, and landmark footprints are enlarged for legibility; the scale bar gives the approximate true scale.` : 'Building footprints are indicative.',
        e.basis || '',
        e.conjecture || '',
      ].filter(Boolean),
    };
    fs.writeFileSync(base + '_plan.svg', renderPlan(W, { mode: 'sheet', meta }));
    manifest.eras.push({ id: e.id, year: e.year, label: e.label, summary: e.summary, basis: e.basis, conjecture: e.conjecture, sources: e.sources, tris: Math.round(tris), pois: W.pois.map((p) => ({ n: p.n, title: p.title })) });
    console.log(`${def.id}/${e.id}: ${(tris / 1000).toFixed(0)}k tris, raw glb ${(glb.length / 1e6).toFixed(1)} MB`);
  }
  const mdir = flags.has('--flat') ? outDir : path.join(outDir, def.id);
  if (!eraOnly) fs.writeFileSync(path.join(mdir, 'manifest.json'), JSON.stringify(manifest, null, 1));
}
