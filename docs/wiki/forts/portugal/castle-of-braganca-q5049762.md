# Castle of Bragança

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-braganca-q5049762` |
| Coordinates | 41.80417, -6.74917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.80417/-6.74917)) |
| Wikidata | [Q5049762](https://www.wikidata.org/wiki/Q5049762) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Sé, Santa Maria e Meixedo |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.exercito.pt/pt/quem-somos/organizacao/ceme/vceme/dhcm/braganca |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 16, road 230, wall 88, waterway 1, building 234, zone 5, retaining-wall 29).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 2, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10662351 historic=castle Q5049762 12 m from ledger point
- pruned to the outline plus 80 m: 604 -> 283 elements
- roads capped: kept the 80 longest of 143 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.80417/-6.74917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=9; wikidata:Q5049762 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/castle-of-braganca-q5049762.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
