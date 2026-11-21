# Pálffy Palace

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palffy-palace-q7264050` |
| Coordinates | 48.14499, 17.10098 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14499/17.10098)) |
| Wikidata | [Q7264050](https://www.wikidata.org/wiki/Q7264050) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Bratislava |
| Inception | 1646 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 12, road 273, building 130, zone 33, wall 10, water 1, retaining-wall 12).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 71, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/58373517 historic=castle Q7264050 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 130 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 273 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14499/17.10098) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q7264050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/palffy-palace-q7264050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
