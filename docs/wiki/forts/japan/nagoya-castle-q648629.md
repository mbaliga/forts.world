# Nagoya Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nagoya-castle-q648629` |
| Coordinates | 35.18556, 136.89861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.18556/136.89861)) |
| Wikidata | [Q648629](https://www.wikidata.org/wiki/Q648629) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirajiro |
| Administrative area | Naka-ku |
| Inception | 1532 |
| Designations | Place of Scenic Beauty\|Important Cultural Property of Japan\|Historic Site of Japan\|Special Historic Site |
| Wikipedia language editions | 40 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `website` | https://www.nagoyajo.city.nagoya.jp |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 14, road 391, building 380, zone 27, retaining-wall 37, water 8, waterway 2, wall 5).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 7, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19100633 historic=castle Q648629 200 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 380 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 391 mapped (trace size budget); minor lanes are not drawn
- origin moved 179 m from the ledger point to the outline centroid
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.18556/136.89861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirajiro; sitelinks=40; wikidata:Q648629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/nagoya-castle-q648629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
