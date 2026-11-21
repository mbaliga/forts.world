# Palácio dos Marqueses de Vila Real

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-marqueses-de-vila-real-q134489591` |
| Coordinates | 41.29684, -7.74572 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.29684/-7.74572)) |
| Wikidata | [Q134489591](https://www.wikidata.org/wiki/Q134489591) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Vila Real |
| Inception | C16 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 40, road 163, waterway 3, building 455, water 1, zone 10, wall 44).

Evidence: documented 0, mapped 369, inferred 0, derived 0; heights documented 1, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1133892111 historic=castle Q134489591 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 455 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.29684/-7.74572) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q134489591 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 369 elements); data/traces/palacio-dos-marqueses-de-vila-real-q134489591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
