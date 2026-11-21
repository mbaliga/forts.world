# Orlík Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orlik-castle-q12042921` |
| Coordinates | 49.5447, 15.3825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5447/15.3825)) |
| Wikidata | [Q12042921](https://www.wikidata.org/wiki/Q12042921) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Rozkoš |
| Inception | 1400 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.castrum.cz/hrad-orlik |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, marker 2, road 26, wall 10, building 3).

Evidence: documented 0, mapped 42, inferred 0, derived 0; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/76652048 historic=castle Q12042921 25 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5447/15.3825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=4; wikidata:Q12042921 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/orlik-castle-q12042921.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
