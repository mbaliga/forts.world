# Ramparts of Grenoble

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-grenoble-q22966997` |
| Coordinates | 45.19082, 5.7294 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.19082/5.7294)) |
| Wikidata | [Q22966997](https://www.wikidata.org/wiki/Q22966997) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Grenoble |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 18, road 242, building 303, wall 7, zone 5, waterway 1, retaining-wall 13, water 1, cliff 12).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 95, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4262426 historic=yes Q62070763 257 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 242 mapped (trace size budget); minor lanes are not drawn
- origin moved 258 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.19082/5.7294) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=1; wikidata:Q22966997 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/ramparts-of-grenoble-q22966997.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
