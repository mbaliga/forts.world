# City walls of Piotrków Trybunalski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-piotrkow-trybunalski-q30092011` |
| Coordinates | 51.40823, 19.69579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.40823/19.69579)) |
| Wikidata | [Q30092011](https://www.wikidata.org/wiki/Q30092011) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Piotrków Trybunalski |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Zamek królewski w Piotrkowie Trybunalskim wzniesiony w XVI wieku |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 2, road 222, waterway 1, building 190, wall 15, zone 29, retaining-wall 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 22, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367519685 historic=castle Q7197073 356 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 222 mapped (trace size budget); minor lanes are not drawn
- origin moved 358 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.40823/19.69579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q30092011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/city-walls-of-piotrkow-trybunalski-q30092011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
