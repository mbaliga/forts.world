# Weidelsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `weidelsburg-q1621311` |
| Coordinates | 51.2729, 9.14432 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2729/9.14432)) |
| Wikidata | [Q1621311](https://www.wikidata.org/wiki/Q1621311) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Wolfhagen |
| Inception | 1225 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.weidelsburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 1, road 29, wall 7, building 3, waterway 1, zone 3, cliff 2).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 1, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/268553743 historic=castle Q1621311 22 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2729/9.14432) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q1621311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/weidelsburg-q1621311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
