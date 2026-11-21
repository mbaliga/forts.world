# Wąbrzeźno Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wabrzezno-castle-q30908308` |
| Coordinates | 53.28333, 18.93833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.28333/18.93833)) |
| Wikidata | [Q30908308](https://www.wikidata.org/wiki/Q30908308) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Wąbrzeźno |
| Inception | 1311 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 100 elements (outline 1, water 1, road 64, building 30, zone 3, wall 1).

Evidence: documented 0, mapped 100, inferred 0, derived 0; heights documented 4, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1564804187 historic=castle Q30908308 6 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.28333/18.93833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q30908308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 100 elements); data/traces/wabrzezno-castle-q30908308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
