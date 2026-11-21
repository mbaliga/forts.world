# Gifhorn Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gifhorn-castle-q2241200` |
| Coordinates | 52.48947, 10.54724 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.48947/10.54724)) |
| Wikidata | [Q2241200](https://www.wikidata.org/wiki/Q2241200) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Gifhorn |
| Inception | 1525  |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 3, waterway 8, road 165, water 3, zone 6, building 64, wall 5).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 27, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/212608115 historic=castle Q2241200 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.48947/10.54724) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2241200 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/gifhorn-castle-q2241200.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
