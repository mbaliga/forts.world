# Burgk Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgk-castle-q1546811` |
| Coordinates | 50.55381, 11.716 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.55381/11.716)) |
| Wikidata | [Q1546811](https://www.wikidata.org/wiki/Q1546811) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château\|royal palace |
| Administrative area | Burgk |
| Inception | 1403 |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.schloss-burgk.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 77 elements (outline 1, road 39, waterway 2, water 2, building 32, zone 1).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 1, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204312840 historic=castle Q1546811 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.55381/11.716) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château\|royal palace; sitelinks=5; wikidata:Q1546811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 77 elements); data/traces/burgk-castle-q1546811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
