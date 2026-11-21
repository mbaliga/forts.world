# Loggia Longhena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `loggia-longhena-q124335428` |
| Coordinates | 45.54672, 11.53801 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54672/11.53801)) |
| Wikidata | [Q124335428](https://www.wikidata.org/wiki/Q124335428) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|loggia |
| Administrative area | Vicenza |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 269 elements (outline 1, marker 3, road 135, waterway 2, water 3, building 426, zone 2, wall 3).

Evidence: documented 0, mapped 269, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138906662 historic=castle Q124335428 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 426 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54672/11.53801) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|loggia; sitelinks=1; wikidata:Q124335428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 269 elements); data/traces/loggia-longhena-q124335428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
