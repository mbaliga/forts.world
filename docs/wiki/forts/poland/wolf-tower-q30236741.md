# Wolf Tower

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wolf-tower-q30236741` |
| Coordinates | 50.66822, 17.92526 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.66822/17.92526)) |
| Wikidata | [Q30236741](https://www.wikidata.org/wiki/Q30236741) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Opole |
| Inception | 1300 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | monastery |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 8, road 250, building 195, water 5, wall 43, retaining-wall 18, zone 57, waterway 6).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 58, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207020368 historic=monastery Q16566744 234 m from ledger point
- pruned to the outline plus 150 m: 583 -> 347 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 92 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 166 mapped (trace size budget); minor lanes are not drawn
- origin moved 234 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.66822/17.92526) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q30236741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/wolf-tower-q30236741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
