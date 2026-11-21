# Gräfenberg Castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grafenberg-castle-q19276053` |
| Coordinates | 49.64454, 11.24808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.64454/11.24808)) |
| Wikidata | [Q19276053](https://www.wikidata.org/wiki/Q19276053) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gräfenberg |
| Inception | 1477 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://www.sagenhaftes-graefenberg.de/ |

## What the model contains

Tier **T1**, status `location-only`, 311 elements (marker 5, road 248, waterway 9, zone 17, building 639, wall 4, water 2, retaining-wall 4).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 18, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16048260 historic=yes 847 m from ledger point
- site is a route relation of 89 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (2066 x 1632 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 639 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 248 mapped (trace size budget); minor lanes are not drawn
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.64454/11.24808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q19276053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 311 elements); data/traces/grafenberg-castle-q19276053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
