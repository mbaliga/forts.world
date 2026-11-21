# Fort-fidelity workflow (read this first in every new chat)

Goal: replace generic/schematic scenes with real reconstructions, ~5 forts per chat.

## Start of a chat
1. Read `docs/fort-fidelity/STANDARD.md` and this file. Open `ledger.csv`; take the lowest `batch` number with `status=todo` (rows with `status=needs-coords` have no location yet and are skipped).
2. Work on branch `dev` (or a child branch). Never push to `main`: `main` is what forts.world serves, and it changes only by merging a pull request from `dev`.
3. Everything runs from the repository root: `pnpm i` (or `npm i`), build with `node build.mjs --min`, open `dist/index.html?fort=<id>`. A single fort builds faster: `node build.mjs --level src/levels/<id>.js` writes `dist/test-<id>.html`.
4. Reading the web: in a sandboxed or unattended session, run `WebSearch` first and `WebFetch` only the URLs it returned. A URL typed from memory (even a plain Wikipedia address) is refused there, which is what blocked the daily runs of 2026-11-19 and 2026-11-21.

## Per fort
1. **Geometry**: check `data/geometry/<id>/`. If absent, dispatch the `fetch-geometry` GitHub Action (`gh workflow run fetch-geometry.yml --ref dev -f sites=<id1,id2,...>`, or put the ids on line 1 of `data/geometry/REQUEST.txt` and push), then `git pull`. The sandbox cannot reach OSM/Overpass/SRTM; Actions and the user's machine can. If neither works, ask the user to upload GeoJSON, a survey plan or aerial photos.
2. **Research**: find plans/surveys/historic photos (ASI, Archnet, Wikimedia, British Library, journal papers). Write `docs/research/<id>-pass.md` with documented vs inferred.
3. **Trace file** `src/levels/<id>.trace.js` (pattern: `kumbhalgarh.trace.js`): outline, heights grid, walls, bastions, gates, buildings, water, each with `src`.
4. **Level** `src/levels/<id>.js`: use the trace; add 2-3 eras. Replace the `gen.js` entry in `index.js`/`forts.js`.
5. **Verify**: `node tools/smoke.mjs <id>`, `node tools/check_sources.mjs`, screenshot each era, compare with the reference photos.
6. **Record**: update the row in `ledger.csv` (`status`, `tier_reached`, notes) and the audit CSV `overall_fidelity`.

## Two layers per fort (conventions from batch 2)
- **Documented / mapped layer**: the eras listed in `T.eras` (e.g. `1667`, `1765`, `today`). Everything on it is sourced (`osm:`, `plan:<doc>#<fig>`, `photo:`, `dem:`) or flagged `inferred` (carried back with `carryOver`). Unsourced heights stay kerb-high (0.5 m); no invented gates.
- **Constructed layer**: `T.constructed[]`, rendered only in sibling eras `<era>~built`. Each element has `ev: 'schematic'`, a `basis` of at least 20 characters, a name containing "schematic", an assumed `h` with its rule, and optionally `replaces[]` (documented ids it stands in for) and `stands_for`. Schematic gates need no `h`.
- **Hand levels**: keep the old level beside the new one as `<id>-hand.js` (id `<id>-hand`, unregistered).
- **Curation helpers** (`tools/trace/curation/_common.mjs`): `carryOver(T, era, keep, {note, modify})` and `levelInlandWaters(T, h)`. Inland water with no mapped level gets a derived level (lowest DEM value on its outline), because without one the pipeline digs it to sea level; the auto-T1 builder (`tools/build-t1.mjs`) does not do this yet.
- **Elements outside the terrain grid** hang in the air: clip wall lines to the grid and drop footprints that straddle its edge.
- **Elements that cannot be walked to** (a footprint in a pond, a solid schematic mass) carry `unreachableOk` and an `unreachableNote` saying why; otherwise the smoke test fails.
- **Slow builds**: add a `TIME_SCALE` entry in `tools/trace/budget.mjs` for traces whose build takes much more than 1.5 s.

## Stage 3: constructed 3D reconstruction (required for every fort that reaches T1 or T2)
The goal of the programme is a walkable 3D reconstruction as detailed as the evidence allows, like the first ten forts (`*-hand.js` levels). After the documented layer, build the constructed layer in the fort's curation file (`tools/trace/curation/<id>.mjs`), using the helpers in `_common.mjs` (`bastionRing`, `gateTowers`, `rectAt`) and the schematic element fields supported by `src/levels/t1.js`: `wall` (merlon), `bastion`/`tower` (top:'chhatri', merlon), `building` (roof, domes [[x,y,r]], chhatris, arches, merlon), `gate` (cut in a constructed wall).
1. Add eras for the historic phases the sources date (for example founding, the main rebuilding, the plan date) and give each constructed element `eras`.
2. Every element is `ev:'schematic'`, name says "schematic", `basis` cites the written description (with its source), `h` is an assumed height with its rule. Position follows a plan, an OSM feature, or is flagged as assumed. Never invent gates or heights on the documented layer.
3. Use what the evidence supports: plan labels and footprints, photos and elevations (read them, note +-m), written descriptions. List in the era `conjecture` and the ledger exactly what is not drawn and why.
4. `node tools/trace/make-trace-js.mjs <id>`, `node tools/smoke.mjs <id>` (0 failures; mark solid masses `unreachableOk` with a note), then screenshot with `node tools/world/build-reconstructions.mjs --levels <file>:<Name> out.html`.
5. A fort with only an outline still gets the constructed rampart, bastions and gates as far as written sources allow. Do not pad: a thin source means a simple layer.
6. Ledger `tier_reached` becomes e.g. `T2 (partial) + constructed (schematic)`.

## End of a chat
Commit, push the branch, and leave the ledger accurate. Report: forts done, tier reached, what evidence is missing. The ledger, not chat memory, is the handoff.

## Models
Sonnet for per-fort tracing and iteration; Opus/Fable for architecture changes, difficult research, or photoreal/art-direction decisions.
