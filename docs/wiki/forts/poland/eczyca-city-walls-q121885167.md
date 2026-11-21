# Łęczyca City Walls

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eczyca-city-walls-q121885167` |
| Coordinates | 52.05893, 19.20389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.05893/19.20389)) |
| Wikidata | [Q121885167](https://www.wikidata.org/wiki/Q121885167) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Łęczyca |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Zamek królewski w Łęczycy wzniesiony w XIV w |
| OSM `website` | http://www.zamek.leczyca.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 3, road 185, building 182, wall 4, waterway 1, zone 54).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 6, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/908503079 historic=castle Q4258675 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 182 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.05893/19.20389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q121885167 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/eczyca-city-walls-q121885167.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
