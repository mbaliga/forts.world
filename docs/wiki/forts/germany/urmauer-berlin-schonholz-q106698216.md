# Urmauer Berlin-Schönholz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `urmauer-berlin-schonholz-q106698216` |
| Coordinates | 52.57177, 13.38198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.57177/13.38198)) |
| Wikidata | [Q106698216](https://www.wikidata.org/wiki/Q106698216) (CC0) |
| Wikidata class | fortification |
| Types | separation barrier\|cordon |
| Administrative area | Reinickendorf |
| Inception | 1960 |
| Designations | cultural heritage ensemble |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, road 232, building 181, zone 7, wall 4).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 54, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11786065 historic=yes 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 78 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.57177/13.38198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; separation barrier\|cordon; sitelinks=1; wikidata:Q106698216 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/urmauer-berlin-schonholz-q106698216.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
