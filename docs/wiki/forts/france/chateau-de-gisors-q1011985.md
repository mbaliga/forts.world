# Château de Gisors

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gisors-q1011985` |
| Coordinates | 49.2808, 1.7745 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2808/1.7745)) |
| Wikidata | [Q1011985](https://www.wikidata.org/wiki/Q1011985) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Gisors |
| Inception | 1100 |
| Designations | classified historical monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 1, road 177, waterway 15, building 473, zone 20, water 6, wall 11).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 3, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1612435 historic=castle Q1011985 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 473 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 177 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid
- 114 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2808/1.7745) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=10; wikidata:Q1011985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/chateau-de-gisors-q1011985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
