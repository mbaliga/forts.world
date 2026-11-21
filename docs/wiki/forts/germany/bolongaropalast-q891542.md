# Bolongaropalast

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bolongaropalast-q891542` |
| Coordinates | 50.10074, 8.5526 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.10074/8.5526)) |
| Wikidata | [Q891542](https://www.wikidata.org/wiki/Q891542) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural ensemble |
| Administrative area | Frankfurt |
| Inception | 1780 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 20, water 1, road 113, building 299, wall 8, waterway 2, zone 8).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 16, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/174153979 historic=castle Q891542 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 299 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.10074/8.5526) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural ensemble; sitelinks=3; wikidata:Q891542 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/bolongaropalast-q891542.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
