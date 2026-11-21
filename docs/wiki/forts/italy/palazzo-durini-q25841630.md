# Palazzo Durini

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-durini-q25841630` |
| Coordinates | 45.46512, 9.19863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46512/9.19863)) |
| Wikidata | [Q25841630](https://www.wikidata.org/wiki/Q25841630) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Milan |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 6, road 345, building 185, wall 13, water 2, waterway 1, zone 2).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 54, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/319674 historic=castle Q25841630 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 185 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 345 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46512/9.19863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q25841630 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/palazzo-durini-q25841630.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
