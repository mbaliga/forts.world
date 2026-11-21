# Palau Güell

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palau-guell-q597051` |
| Coordinates | 41.37881, 2.17423 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37881/2.17423)) |
| Wikidata | [Q597051](https://www.wikidata.org/wiki/Q597051) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | El Raval |
| Inception | 1890 |
| Designations | part of UNESCO World Heritage Site\|Cultural Asset of National Interest\|bien de interés cultural |
| UNESCO WHC id | 320-002 |
| Wikipedia language editions | 33 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |
| OSM `website` | https://inici.palauguell.cat/ |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 5, road 197, building 250, water 1, waterway 4, wall 6, zone 2).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 119, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166565579 historic=castle Q597051 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 250 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37881/2.17423) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=33; wikidata:Q597051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/palau-guell-q597051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
