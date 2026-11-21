# Castle ruin Gehren

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-ruin-gehren-q16379952` |
| Coordinates | 50.64761, 11.00533 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.64761/11.00533)) |
| Wikidata | [Q16379952](https://www.wikidata.org/wiki/Q16379952) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|yes\|château |
| Administrative area | Ilmenau |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 1, road 110, zone 6, water 2, waterway 3, building 281, wall 8).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 2, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264640794 historic=castle Q16379952 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.64761/11.00533) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|yes\|château; sitelinks=4; wikidata:Q16379952 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/castle-ruin-gehren-q16379952.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
