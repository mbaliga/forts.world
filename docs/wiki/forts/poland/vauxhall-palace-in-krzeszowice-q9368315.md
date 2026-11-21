# Vauxhall Palace in Krzeszowice

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vauxhall-palace-in-krzeszowice-q9368315` |
| Coordinates | 50.13572, 19.63176 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.13572/19.63176)) |
| Wikidata | [Q9368315](https://www.wikidata.org/wiki/Q9368315) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Krzeszowice |
| Inception | 1786 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 9, road 266, building 198, waterway 1, zone 73, water 1, wall 4).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 25, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237984000 historic=castle Q9368315 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 266 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.13572/19.63176) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q9368315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/vauxhall-palace-in-krzeszowice-q9368315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
