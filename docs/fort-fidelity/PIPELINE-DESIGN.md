# Pipeline design: location + open data → truthful playable scene

Status: design accepted for prototyping, 2026-11-03. One site (Reis Magos) built end to end; see §8.
Scope: thousands of sites of every type in MASTER-PLAN.md, without inventing detail and without hand-authoring each one.

The pipeline has four stages and one contract between them:

```
fetch (internet)  →  build-t1 (offline)  →  trace JSON  →  scene (runtime)  →  T2+ overlays (people)
Overpass+Terrarium   classify + DEM grid    data/traces/     src/levels/t1.js     plan tracing, eras
```

The contract is the trace document. Everything downstream (scene builder, evidence check, index, CI, the
future T2/T3 editors) reads only the trace. Everything upstream (OSM, DEM, excavation plans, photos) must be
reduced to it. One format for a fort, a temple, a stepwell or a university campus, differing only in which
element kinds it contains and which builder template defaults apply.

## 1. Trace schema (`in-rts.trace/1`)

File: `data/traces/<id>.trace.json`. Validator and legacy adapters: `tools/trace/schema.mjs`.

```jsonc
{
  "schema": "in-rts.trace/1",
  "id": "reis-magos", "name": "Reis Magos Fort", "type": "fort",         // type ∈ fort palace ancient-city monastery university temple stepwell tomb port other
  "tier": "T1", "status": "outline+walls",                                // status ∈ location-only | outline-only | outline+walls
  "coords": [15.49646, 73.80918], "ledgerCoords": [15.4965, 73.80913],    // coords = local origin (outline centroid); ledger point kept
  "origin": {"lat":…, "lon":…}, "bounds": [-218,-218,218,218],           // local frame: metres, x east, y north
  "units": {"plan":"metres","x":"east","y":"north","h":"m above Terrarium datum (~MSL)"},
  "region": "Goa", "country": "India", "wikidata": "Q10283654",
  "sources": [ {"id":"osm","kind":"osm","url":…,"licence":"ODbL","fetched":…,"timestamp":…}, {"id":"dem","kind":"dem",…} ],
  "site": { "historic":"fort", "name":…, "wikidata":…, "barrier":"wall", "description":…, "heritage":… },   // the OSM tags we keyed on
  "heights": { "x0","y0","stride":5,"nx","ny","data":"<base64 int16le ×20, -32768 = none>", "src":"dem:terrarium-z15",
               "nativeResolutionM":4.6, "sourceResolutionM":30, "stats":{"min","max","missing"}, "clampedBelowM":-3 },
  "elements": [
    { "id":"outline", "kind":"outline", "poly":[[x,y],…], "src":"osm:way/194550880", "ev":"mapped", "conf":0.8, "name":… },
    { "id":"outline-wall", "kind":"wall", "path":[…], "closed":true, "src":"osm:way/194550880", "ev":"mapped", "conf":0.75,
      "h": {"v":4, "src":"inferred", "note":"OSM tags barrier=wall on the outline but no height; 4 m assumed"} },
    { "id":"building-8", "kind":"building", "poly":[…], "src":"osm:way/618726579", "ev":"mapped", "conf":0.75, "name":"Reis Magos Church",
      "h": {"v":3.2,"src":"inferred","note":"no height or levels tag; one storey assumed"} },
    { "id":"sea-0", "kind":"water", "water":"sea", "poly":[…], "src":"derived:osm-coastline", "from":["osm:way/590981194",…],
      "ev":"mapped", "conf":0.6, "note":"closed along scene bounds…", "demCheck":{"medianInside":2,"medianOutside":10.3} },
    { "id":"outline-wall-opening-0", "kind":"gate", "at":[42.5,-13.5], "wall":"outline-wall", "src":"derived:road-wall-crossing",
      "from":["osm:way/…","osm:way/194550880"], "ev":"inferred", "conf":0.5, "name":"Opening · inferred from a mapped footway ending on the wall line" },
    { "id":"marker-1", "kind":"marker", "at":[x,y], "src":"osm:node/7834475987", "ev":"mapped", "conf":0.9, "name":"Henry the Navigator Marker" }
  ],
  "eras": [ {"id":"today","year":"Today","label":…,"summary":…,"basis":…,"conjecture":…,"sources":["REIS-01"]} ],
  "diffs": { "1707": { "remove":["building-8"], "add":[{…element with src…}], "modify":{"outline-wall":{"h":{"v":6,"src":"plan:lopes2018#fig7"}}} } },
  "evidence": {"documented":0,"mapped":20,"inferred":2,"derived":3,"inferredHeights":3},
  "generated": {"tool":"tools/build-t1.mjs","version":1,"date":"2026-11-03","report":{"counts":{…},"notes":[…]}}
}
```

Rules that make it one schema for every site type:

- **Element kinds** are a closed list: `outline wall retaining-wall bastion gate tower building ruin temple stupa cell-block tank well water waterway coastline cliff road stair zone marker plan-raster`. A fort uses the first row; a temple adds `temple`/`tank`; a monastery adds `stupa`/`cell-block`; an ancient city is mostly `road`/`zone`/`ruin`. New kinds are added to `KINDS` with a renderer in `t1.js`, never ad hoc per site.
- **Geometry** is one of `poly` (closed), `path` (+`closed`), or `at` (+`r`/`w`/`d`/`rot`), always in the local frame.
- **Every element carries `src`, `ev`, `conf`.** `src` grammar (STANDARD.md rule 1): `osm:<type>/<id>` · `plan:<doc>#<fig>` · `photo:<ref>` · `dem:<set>` · `derived:<method>` · `inferred`. `ev` ∈ documented | mapped | inferred. `conf` 0..1 is the builder's confidence in the geometry, separate from the evidence class.
- **Heights are separate claims.** `h: {v, src, note}`: a wall line can be mapped while its height is inferred. The validator rejects an inferred element or height that does not say so in `name`/`note`.
- **Per-era diffs** are expressed against the `today` element list: `remove` ids, `add` full elements, `modify` field overrides. Each added or modified element cites its own `src`. The runtime applies diffs (`applyDiff` in `t1.js`); nothing else changes between eras.
- **`heights`** uses the existing terrain `grid` op encoding so the runtime needs no new decoder.

Migration of the two hand traces: `kumbhalgarh.trace.js` and `janjira.trace.js` keep their files (the Janjira level reads `TRACE` fields directly). `schema.mjs` wraps each in the schema (`wrapKumbhalgarh`, `wrapJanjira`) so `check_sources.mjs` runs the same checks on them. Janjira's photo-derived elements validate as `documented` (`photo:janjira-drone-trace`); Kumbhalgarh validates as one `mapped` wall from `osm:way/254041054`. No rewrite needed until those levels are next touched; when they are, the level should read a trace JSON instead.

## 2. Auto-T1 builder (`tools/build-t1.mjs`)

Input: `data/geometry/<id>/{meta.json, osm.json, terrarium/*.png}` from `fetch-geometry.mjs`. Output: a trace. Offline, deterministic, ~0.5 s per site.

**Terrarium → heights grid** (`tools/trace/terrarium.mjs`). Tiles are z15 Web Mercator PNGs; elevation = R·256 + G + B/256 − 32768. The builder makes a bilinear sampler across tiles, walks a 5 m lattice over the scene bounds, converts each lattice point to lat/lon and samples it, then encodes int16/20 base64 in the `grid` op layout. Native pixel ≈ 4.6 m at 15° N, but the source is ~30 m SRTM, so the grid is smooth interpolation, not survey: no terraces, ditches or scarps. Terrarium blends bathymetry at coasts (cells of −100 m within a few pixels of the shore); cells below −3 m are clamped to −3 m as a rendering floor, recorded in `heights.clampedCells`. Datum stays metres above the Terrarium datum; `t1.js` sets `base` to the grid minimum.

**OSM → elements** (`tools/trace/osm.mjs`). Overpass `out geom` ways are projected to the local frame and classified by tag, in this order: coastline → wall (`barrier=wall|city_wall`, `historic=citywalls`) → retaining wall → building → water polygon → waterway line → highway → cliff → bare rock → landuse/leisure/historic zones → named/historic nodes as markers. Road and waterway widths come from a fixed table (the existing `osm2level.mjs` values). Heights: OSM `height` → `building:levels`×3.2 → default 3.2 m (buildings) / 4 m (walls), each marked `inferred` with a note.

**The site.** The closed `historic=*` way or relation nearest the ledger point wins, with wikidata or name matches preferred and fort-like tags ranked above others. Relation outer ways are joined into rings; the largest ring is the outline. The local frame is then recentred on the outline centroid (Gwalior's ledger point was 830 m from the mapped castle polygon; without recentring the fort fell outside the scene). Scene bounds are the outline bbox + 150 m margin, clamped to 200–450 m half-size.

**Walls.** If OSM tags the outline itself `barrier=wall`, the outline becomes a closed `wall` element (Reis Magos). Separate wall ways become their own elements (Aguada has nine). An outline without any wall tag is drawn as a zone only: status `outline-only` (Cabo de Rama).

**Today.** The `today` era carries the whole present-day OSM context inside the bounds: roads, buildings, zones, markers, the modern retaining wall. Historic eras start from that list and remove or alter the modern elements through `diffs` (a 1707 Reis Magos removes the reception, the parish centre and the tarmac road); nothing is drawn in a historic era that the diff does not cite.

**Openings.** None are drawn without a plan- or photo-sourced gate (decision 2, 2026-11-03). Where a mapped road or path crosses, or ends within 2.5 m of, a closed wall line, the position is recorded in `generated.report.openingCandidates` for the T2 author to confirm against a plan; it is not an element.

**Elevations.** Nothing on screen has an invented elevation (decision 3). A wall or building is drawn to a height only when the trace carries `h` with an OSM tag, plan or photo source; otherwise it is a 0.5 m kerb-high plan line named "elevation unknown". A kerb can be stepped over, so an enclosure without sourced heights is open to walk into; once the overlay supplies a height the ring seals and the player arrives outside. Heights measured from photographs and elevation drawings arrive through the overlay (§3) with `photo:`/`plan:` srcs.

**Sea.** `natural=coastline` ways are joined by shared nodes, clipped to the bounds, and closed clockwise along the bounds (OSM keeps water on the right of a coastline). Each derived polygon is checked against the DEM: the median height inside must be ≤ 10 m and lower than the median outside, otherwise `conf` drops to 0.3 and the note says the DEM disagrees. All five batch-1 sites pass (Reis Magos: 2 m inside vs 10.3 m outside).

**Location-only.** No closed `historic=*` polygon → `status: location-only`: DEM terrain, roads, water, any mapped buildings, and one card at the ledger point saying OSM has no outline here. No walls, no fort silhouette. (None of batch 1 hit this; the ledger's remaining 133 sites will.)

**Scene** (`src/levels/t1.js`, `makeT1(trace)`): terrain ops = base, grid, dig water, paint zones/outline/roads; build = water planes, walls and buildings to their sourced height or as kerbs, plan-sourced gates, zones, POIs (one honesty card at the spawn, one per named wall/building, marker and derived water, each stating its `src` and evidence), spawn on the nearest mapped road outside every closed ring.

**Overlay** (`data/traces/overlays/<id>.overlay.json`, see its README): the hand-authored T2 layer — documented heights, gates, elements, eras and diffs — merged by `build-t1.mjs` so the trace stays one document.

## 3. Type-specific builders

Shared by every type (all of §2): frame, bounds, heights grid, sea/water, roads, zones, buildings, markers, evidence model, era diffs, index, budgets, CI. That is roughly 80% of the code and 100% of the schema.

What differs is the *source of plan geometry* and the *element vocabulary*:

| Type | Plan source beyond OSM | Extra kinds | Template defaults |
|---|---|---|---|
| fort / palace | wall ways; historic plans for bastions, gates | bastion, gate, tower | wall 4 m, closed rings sealed unless a crossing exists |
| temple (Konark, Khajuraho) | ASI/Archnet plan + section → `plan-raster` georeferenced, then traced `temple`, `tank`, plinth outline | temple (with `style`, `plinth`, `vimana h`) | a `temple` element renders through `W.temple`; height from the section drawing (`plan:asi-konark#section`) or flagged inferred |
| monastery / university (Nalanda, Taxila) | excavation plans (ASI, Marshall 1951) → `plan-raster` + traced `cell-block`, `stupa`, courtyard `zone` | stupa, cell-block | low ruin walls (1–2 m, `ruin`), stupa drums as `stupa` with radius from plan |
| ancient city (Lothal, Dholavira) | excavation grid plans | ruin, road, tank, zone | mostly flat plan masses; DEM mounds |
| stepwell | section drawing | well, stair | a `well` renders as the existing `W.tank` with tiers |
| tomb / port | OSM building outlines; plans | building, water | nothing extra |

So a "type-specific builder" is: (a) a *plan-raster workflow* for T2 — register a drawing in the local frame (two control points, or OSM outline fit), trace polygons in it, emit elements with `plan:` srcs; (b) a *template* in `t1.js` keyed on `T.type` that chooses defaults (ruin height, wall rendering, palette) and POI vocabulary. T1 for a temple today is the same as for a fort: outline, DEM, surroundings, and an honest card. Nothing temple-specific is drawn until a plan exists.

The plan-raster tracer is the one tool not yet built (Phase 2). It is where Konark/Nalanda/Taxila become real; the schema already has room for it.

## 4. Evidence model

Three classes, carried on every element and every height, surfaced three ways:

| Class | Meaning | In the scene |
|---|---|---|
| documented | from a plan, survey, photo or text, cited as `plan:`/`photo:` | drawn with detail, POI cites the document |
| mapped | from OSM, cited `osm:type/id` | drawn as a plain mass or line, POI links the OSM object |
| inferred | assumed or derived (`derived:*`, `inferred`) | drawn plainly, "· inferred"/"assumed" in the name, conf < 0.6 |

Validation (`tools/check_sources.mjs`, exit 1 on error): schema valid; every `src` matches the grammar; every `osm:` reference resolves to an element in the raw dump the trace was built from (so a trace cannot cite a way that was never fetched); inferred elements and inferred heights say so in text; era `sources` ids exist in `src/data/source-catalogue.js`; budgets (§5). Runs over every trace plus the two legacy adapters. It is the evidence gate in both workflows.

What the evidence model deliberately does not do: it does not score historical accuracy. A T1 scene is "truthful" in the narrow sense that every mass on screen traces back to a line someone mapped or a flagged assumption; it says nothing about 1707.

## 5. Scale

- **Lazy loading** (wired 2026-11-03): flagship levels stay in the bundle; `build.mjs` embeds `data/traces/index.json` and writes one `dist/traces/<id>.trace.js` per trace. `src/levels/lazy.js` turns the index into explorer stubs (a trace whose id collides with a bundled level is listed as `<id>-t1`), and `app.load` resolves a stub by injecting its script and calling `makeT1` before loading. Script injection rather than `fetch` so the single-file `dist/index.html` keeps working from `file://`. The explorer shows 120 forts: 115 bundled + 5 lazy.
- **Budgets** (`tools/trace/budget.mjs`, enforced by check_sources and smoke): trace ≤ 250 KB (batch 1: 34–123 KB), heights ≤ 60k cells, ≤ 400 elements, build+finish ≤ 1.5 s in Node (×4 in CI), ≤ 600k solid tris, ≤ 40k instances.
- **Storage** (decision 5): traces stay in git under `data/traces/` while the repo is public and CI is free. Projection: 4,000 × ~80 KB ≈ 320 MB, under GitHub's soft 1 GB; revisit (git-lfs or a release asset per region shard) if it passes ~500 MB or the heights grid stride drops below 5 m. Three-quarters of each trace is the heights grid, so the first saving, if needed, is sharing DEM grids between neighbouring sites rather than compressing traces.
- **CI** (`.github/workflows/smoke-sample.yml`): every push to `dev` and every PR runs the evidence gate over all traces, `smoke.mjs --t1 20` (date-seeded sample so a different 20 run each day), and the flagship smokes.

## 6. Throughput

| Step | Where | Why |
|---|---|---|
| fetch-geometry (Overpass, Terrarium) | GitHub Actions / user's machine | the sandbox has no internet to OSM/AWS |
| build-t1, check_sources, region index, smoke | Actions (`build-traces.yml`, auto after fetch) **and** here | pure Node, deterministic |
| plan research, plan-raster tracing, era diffs | here (chat) | judgement |
| design, builder code, schema changes | here | judgement |

A batch of ~100 sites: (1) put ids on line 1 of `data/geometry/REQUEST.txt` (or `gh workflow run fetch-geometry.yml -f sites=…`); fetch sleeps 3 s per site and Overpass tolerates ~20 sites per job, so split into 5 jobs of 20 (a matrix input for `fetch-geometry.yml` is the one change still needed); (2) each fetch commit triggers `build-traces.yml`, which builds all traces, runs the gate, rebuilds the index, smokes every T1 scene and commits `data/traces/`; (3) here, `git pull`, read the build report (status per site: location-only / outline-only / outline+walls, sealed enclosures, DEM-check failures), and update ledger rows to `tier_reached=T1`. Wall-clock for 100 sites: ~15 min of Actions, ~10 min of review. The ledger stays the source of truth; the trace carries the evidence.

## 7. Decisions taken (confirmed 2026-11-03)

1. One schema, closed kind list, `src`/`ev`/`conf` on everything; heights are separate claims.
2. No invented elevation: unknown heights render as kerb-high plan lines; heights come from OSM tags or the overlay (photos, elevation drawings).
3. No invented openings: candidates are reported for T2, never drawn; a ring with a sourced height seals.
4. Sea from coastline, DEM-checked; bathymetry clamped; location-only sites get no silhouette.
5. Local frame recentred on the outline, ledger point retained.
6. Legacy traces wrapped, not rewritten; the hand `reis-magos` level stays beside `reis-magos-t1` until its research is folded into the overlay.
7. Traces live in `data/traces/` in git and load lazily; `today` always carries present-day OSM context, historic eras subtract from it.
8. Next design chat: the plan-raster / photo tracer that turns excavation plans, elevations and photographs into overlay elements (Konark, Nalanda, Taxila, and Reis Magos heights).

## 8. Reis Magos prototype: what is real, what is approximate

Screenshots: `docs/fort-fidelity/shots/reis-magos-before.jpg` (hand level), `reis-magos-after-t1.jpg` / `-close.jpg` (first pipeline pass, with the since-withdrawn 4 m default wall), `reis-magos-after-t1-kerb.jpg` (current: kerb-high plan lines, lazily loaded in the full build).

Real (traced from mapped lines): the fort outline and wall line (OSM way 194550880, tagged `barrier=wall`), the church footprint, cemetery, reception area, bare-rock patch and recreation ground, seven roads/footways, the river retaining wall (way 1155270354), the Mandovi water body (closed from the OSM coastline, DEM-checked: median 2 m inside vs 10 m outside), and the general slope of the headland from the DEM.

Unknown and shown as unknown: every height (wall, church, retaining wall: OSM has no tags, so all three are kerb-high plan lines), the gateways (three mapped paths meet the wall line; listed as candidates, not drawn). Approximate: the terrain, which shows a flat ~20 m band at 3–5 m across the fort's lower half (the lower battery terrace smeared by 30 m SRTM) and cannot show the stair between the two levels, the ditch or any scarp. A web pass found no published wall heights for Reis Magos (Wikipedia records 33 guns and the 2008 da Cunha restoration, no dimensions); heights will have to be measured from photographs against known objects, which is the overlay tool's job.

Missing compared to the hand level: the ten researched POIs with Lopes (2018) and Goa Government citations, the stair, the two lower pavilions, the church steps. Those are T2 overlay content, and the right next step is to express them as `diffs`/`documented` elements on top of this trace rather than keep two Reis Magos levels. Both levels are in the build for now (`reis-magos`, `reis-magos-t1`).

Batch-1 results from the same run: Aguada outline+walls (9 wall ways, two derived openings, one building POI unreachable because the citadel ring's openings do not connect on the DEM); Chapora outline+walls (3 walls, smoke clean); Cabo de Rama outline-only (no wall tag in OSM, smoke clean); Gwalior outline+walls (one closed castle wall, frame recentred 830 m, smoke clean, 123 KB).
