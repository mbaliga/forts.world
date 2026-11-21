# Fort 3D model export

Builds a .glb for every fort from the same scene builder the game uses.

- `node tools/export.mjs <outDir> [ids] [--t1] [--era=today] [--lod=0|1]`
  - `--t1` exports auto-T1 / traced forts from `data/traces/*.trace.json` (hand-built levels are exported without it).
  - `--lod=0` full scene (terrain, walls, buildings, trees, props). `--lod=1` drops instanced props (trees, crowds, clutter).
- `tools/models/compress.mjs in.raw.glb out.glb [ratio]` welds, optionally simplifies (`0.2` = LOD2, about a fifth of the triangles), quantizes and meshopt-compresses. Needs `@gltf-transform/{core,extensions,functions}` and `meshoptimizer` (installed outside the repo; `npm i` them in a scratch folder).
- `tools/models/run-all.sh` runs the whole set, four at a time. Featured forts get all eras at LOD0 and LOD1; the rest get the `today` era at LOD1.
- LOD2 is LOD1 simplified to about 20 % of the triangles.

Models are derived data: rebuild them from the traces rather than committing them (full-detail files run 1-15 MB each).
A model is only as accurate as its trace tier: auto-T1 is outline plus ~30 m terrain, not a measured reconstruction.
