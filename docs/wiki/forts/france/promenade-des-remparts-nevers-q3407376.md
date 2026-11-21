# Promenade des Remparts (Nevers)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `promenade-des-remparts-nevers-q3407376` |
| Coordinates | 46.9853, 3.15453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.9853/3.15453)) |
| Wikidata | [Q3407376](https://www.wikidata.org/wiki/Q3407376) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Nevers |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 10, road 165, building 434, waterway 1, wall 7, zone 20, retaining-wall 2).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 28, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/127526216 historic=castle Q3361198 449 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 434 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 449 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.9853/3.15453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q3407376 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/promenade-des-remparts-nevers-q3407376.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
