# Fort Wilhelmsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-wilhelmsburg-q64989606` |
| Coordinates | 48.41194, 9.98278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41194/9.98278)) |
| Wikidata | [Q64989606](https://www.wikidata.org/wiki/Q64989606) (CC0) |
| Wikidata class | fort |
| Types | citadel\|defence work |
| Administrative area | Ulm |
| Inception | 1849 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 3, road 267, wall 27, zone 23, building 237, waterway 1, water 1).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226934351 historic=castle 318 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 318 m from the ledger point to the centre of the mapped site
- 7735 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41194/9.98278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|defence work; sitelinks=2; wikidata:Q64989606 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/fort-wilhelmsburg-q64989606.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
