# Palazzo Tori-Massoni

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-tori-massoni-q54874233` |
| Coordinates | 43.93713, 10.30536 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.93713/10.30536)) |
| Wikidata | [Q54874233](https://www.wikidata.org/wiki/Q54874233) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|historic building |
| Administrative area | Camaiore |
| Inception | 1600 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 204 elements (outline 1, road 79, waterway 3, building 538, zone 1).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 118, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4100110 historic=castle Q54874233 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 538 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.93713/10.30536) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|historic building; sitelinks=1; wikidata:Q54874233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 204 elements); data/traces/palazzo-tori-massoni-q54874233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
