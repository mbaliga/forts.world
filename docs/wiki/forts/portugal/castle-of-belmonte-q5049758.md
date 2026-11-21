# Castle of Belmonte

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-belmonte-q5049758` |
| Coordinates | 40.35917, -7.34833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.35917/-7.34833)) |
| Wikidata | [Q5049758](https://www.wikidata.org/wiki/Q5049758) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Belmonte e Colmeal da Torre |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 1, road 70, zone 9, building 295, retaining-wall 1).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 0, inferred 0, unknown 297.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/163145175 historic=castle Q5049758 29 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.35917/-7.34833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=5; wikidata:Q5049758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/castle-of-belmonte-q5049758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
