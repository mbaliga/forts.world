# Piotrków Trybunalski Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `piotrkow-trybunalski-castle-q7197073` |
| Coordinates | 51.4091, 19.70076 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4091/19.70076)) |
| Wikidata | [Q7197073](https://www.wikidata.org/wiki/Q7197073) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Piotrków Trybunalski |
| Inception | 1600 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | Zamek królewski w Piotrkowie Trybunalskim wzniesiony w XVI wieku |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 2, road 222, waterway 1, building 189, wall 15, zone 29, retaining-wall 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 22, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367519685 historic=castle Q7197073 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 189 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 222 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4091/19.70076) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q7197073 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/piotrkow-trybunalski-castle-q7197073.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
