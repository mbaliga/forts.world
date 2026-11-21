# Burgturm Burg Eisenhardt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgturm-burg-eisenhardt-q76632621` |
| Coordinates | 52.13746, 12.58413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.13746/12.58413)) |
| Wikidata | [Q76632621](https://www.wikidata.org/wiki/Q76632621) (CC0) |
| Wikidata class | fortification |
| Types | museum\|Bergfried\|scenic viewpoint |
| Administrative area | Bad Belzig |
| Inception | 1200 |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 5, road 121, water 2, building 255, zone 21, waterway 18, wall 3, retaining-wall 2).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 4, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1015071 historic=castle Q881036 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 255 mapped (trace size budget); the rest of the town is not drawn
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.13746/12.58413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|Bergfried\|scenic viewpoint; sitelinks=1; wikidata:Q76632621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/burgturm-burg-eisenhardt-q76632621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
