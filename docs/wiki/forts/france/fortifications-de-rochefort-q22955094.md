# Fortifications de Rochefort

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-de-rochefort-q22955094` |
| Coordinates | 45.93751, -0.9651 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.93751/-0.9651)) |
| Wikidata | [Q22955094](https://www.wikidata.org/wiki/Q22955094) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Rochefort |
| Inception | 1676 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, marker 2, road 37, building 683, water 1, wall 1).

Evidence: documented 0, mapped 162, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/544671668 historic=yes Q22955092 321 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 683 mapped (trace size budget); the rest of the town is not drawn
- origin moved 321 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.93751/-0.9651) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q22955094 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 162 elements); data/traces/fortifications-de-rochefort-q22955094.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
