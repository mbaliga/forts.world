# Landštejn Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landstejn-castle-q366444` |
| Coordinates | 49.024, 15.23 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.024/15.23)) |
| Wikidata | [Q366444](https://www.wikidata.org/wiki/Q366444) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Landštejn |
| Inception | 1222 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.hrad-landstejn.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, marker 2, road 44, water 3, building 29, wall 9, waterway 5, zone 2).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 1, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59511332 historic=castle Q366444 31 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.024/15.23) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=11; wikidata:Q366444 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/landstejn-castle-q366444.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
