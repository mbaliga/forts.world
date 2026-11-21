# Lipowiec Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lipowiec-castle-q11757772` |
| Coordinates | 50.0769, 19.4447 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0769/19.4447)) |
| Wikidata | [Q11757772](https://www.wikidata.org/wiki/Q11757772) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|architectural heritage monument |
| Administrative area | Babice |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://mmz.info.pl/zamek-lipowiec-w-babicach/ |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 24, waterway 1, wall 2, building 18, zone 15, cliff 3).

Evidence: documented 0, mapped 64, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93705192 historic=castle Q11757772 19 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0769/19.4447) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|architectural heritage monument; sitelinks=8; wikidata:Q11757772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/lipowiec-castle-q11757772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
