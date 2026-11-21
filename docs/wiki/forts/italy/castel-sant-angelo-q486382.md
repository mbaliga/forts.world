# Castel Sant'Angelo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-sant-angelo-q486382` |
| Coordinates | 41.90304, 12.46631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.90304/12.46631)) |
| Wikidata | [Q486382](https://www.wikidata.org/wiki/Q486382) (CC0) |
| Wikidata class | castle |
| Types | museum\|quadrangular castle\|mausoleum\|roman mausoleum\|château |
| Administrative area | Rome |
| Inception | 0139 |
| Designations | Italian national heritage |
| Wikipedia language editions | 58 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 1, road 271, wall 21, zone 23, retaining-wall 20, building 21, waterway 1, water 4).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 11, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8035487 historic=castle Q486382 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.90304/12.46631) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; museum\|quadrangular castle\|mausoleum\|roman mausoleum\|château; sitelinks=58; wikidata:Q486382 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/castel-sant-angelo-q486382.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
