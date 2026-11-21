# Hiroshima Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hiroshima-castle-q41977` |
| Coordinates | 34.40275, 132.45903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.40275/132.45903)) |
| Wikidata | [Q41977](https://www.wikidata.org/wiki/Q41977) (CC0) |
| Wikidata class | castle |
| Types | museum\|Japanese castle\|hirajiro |
| Administrative area | Motomachi |
| Inception | 1592 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 18, road 568, building 381, waterway 1, zone 34, retaining-wall 30, wall 9, water 2).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 46, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145661233 historic=castle Q41977 113 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 381 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 568 mapped (trace size budget); minor lanes are not drawn
- origin moved 123 m from the ledger point to the outline centroid
- 86 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.40275/132.45903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; museum\|Japanese castle\|hirajiro; sitelinks=31; wikidata:Q41977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/hiroshima-castle-q41977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
