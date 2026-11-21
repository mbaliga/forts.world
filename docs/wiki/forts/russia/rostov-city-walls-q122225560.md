# Rostov City Walls

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rostov-city-walls-q122225560` |
| Coordinates | 57.18339, 39.41373 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.18339/39.41373)) |
| Wikidata | [Q122225560](https://www.wikidata.org/wiki/Q122225560) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site\|architectural landmark |
| Administrative area | Rostov Veliky |
| Inception | 1629 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 9, road 331, building 296, water 4, zone 4, wall 41, waterway 2).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 96, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7327619 historic=castle Q4398506 188 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 331 mapped (trace size budget); minor lanes are not drawn
- origin moved 183 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.18339/39.41373) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site\|architectural landmark; sitelinks=2; wikidata:Q122225560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/rostov-city-walls-q122225560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
