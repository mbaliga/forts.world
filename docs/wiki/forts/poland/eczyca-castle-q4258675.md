# Łęczyca Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eczyca-castle-q4258675` |
| Coordinates | 52.05894, 19.20384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.05894/19.20384)) |
| Wikidata | [Q4258675](https://www.wikidata.org/wiki/Q4258675) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Łęczyca |
| Inception | 1400 |
| Designations | immovable monument in Poland\|monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Zamek królewski w Łęczycy wzniesiony w XIV w |
| OSM `website` | http://www.zamek.leczyca.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 3, road 185, building 182, wall 4, waterway 1, zone 54).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 6, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/908503079 historic=castle Q4258675 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 182 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.05894/19.20384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q4258675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/eczyca-castle-q4258675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
