# Jaisalmer

> India · Rajasthan · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jaisalmer` |
| Coordinates | 26.913, 70.912 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.913/70.912)) |
| Programme catalogue | confidence high, significance rank 13; sources catalogue:jaisalmer;wikidata:Q3634368;smith-newton:r71 |
| OSM `historic` | castle |
| OSM `heritage` | 1 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, marker 5, road 145, building 44, wall 1, zone 1).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 0, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/31614017 historic=castle 70 m from ledger point
- origin moved 71 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.913/70.912) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/jaisalmer-pass.md](../../../research/jaisalmer-pass.md)
- [docs/research/jaisalmer-photogrammetry-count-reconciliation.md](../../../research/jaisalmer-photogrammetry-count-reconciliation.md)

## Ledger note

src/levels/jaisalmer.trace.js (curation tools/trace/curation/jaisalmer.mjs), level src/levels/jaisalmer.js; eras 1647/today plus ~built (schematic perimeter wall 4.6 m high 2.5 m thick from Wikipedia's 15 ft outer base wall; thickness assumed). One OSM Pol node promoted to a gate; three Pols stay as gate-house footprints. No plan, survey or dated image found (Commons search returned gazetteer pages and 2012-13 photographs). 1156 foundation is legend. NOT traced: 99 bastions, real gate forms, temples, havelis. Old hand level kept as jaisalmer-hand.js. T2 needs a survey plan, heights, finer DEM. docs/research/jaisalmer-pass.md \| Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
