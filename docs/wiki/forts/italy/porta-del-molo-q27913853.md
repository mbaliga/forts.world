# Porta del Molo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-del-molo-q27913853` |
| Coordinates | 44.40781, 8.92472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.40781/8.92472)) |
| Wikidata | [Q27913853](https://www.wikidata.org/wiki/Q27913853) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Genoa |
| Inception | 1551 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 344 elements (outline 1, marker 40, road 306, building 271, wall 7, retaining-wall 18, coastline 1, zone 6, water 1).

Evidence: documented 0, mapped 344, inferred 0, derived 1; heights documented 3, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162215977 historic=castle Q3890229 427 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 271 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 306 mapped (trace size budget); minor lanes are not drawn
- origin moved 428 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":18,"medianInside":0,"medianOutside":27.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.40781/8.92472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q27913853 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 344 elements); data/traces/porta-del-molo-q27913853.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
