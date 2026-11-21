# Pezinok Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pezinok-castle-q12045245` |
| Coordinates | 48.291, 17.26828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.291/17.26828)) |
| Wikidata | [Q12045245](https://www.wikidata.org/wiki/Q12045245) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|manor house\|château |
| Administrative area | Pezinok |
| Inception | 1300 |
| Designations | cultural heritage of Slovakia\|Cultural Heritage Monuments of Slovakia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.palacearthotel.sk/sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 4, road 214, building 180, wall 5, zone 4, waterway 1).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 4, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/558198 historic=castle Q12045245 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 180 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 214 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.291/17.26828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|manor house\|château; sitelinks=7; wikidata:Q12045245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/pezinok-castle-q12045245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
