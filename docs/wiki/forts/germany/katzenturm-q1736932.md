# Katzenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katzenturm-q1736932` |
| Coordinates | 48.1351, 11.579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1351/11.579)) |
| Wikidata | [Q1736932](https://www.wikidata.org/wiki/Q1736932) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Munich |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `website` | https://www.residenz-muenchen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 3, road 226, zone 10, building 118, waterway 2, wall 2, retaining-wall 2).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 61, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7456359 historic=castle Q686548 686 m from ledger point
- origin moved 688 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1351/11.579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q1736932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/katzenturm-q1736932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
