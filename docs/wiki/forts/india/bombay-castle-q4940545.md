# Bombay Castle

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bombay-castle-q4940545` |
| Coordinates | 18.93194, 72.83778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.93194/72.83778)) |
| Wikidata | [Q4940545](https://www.wikidata.org/wiki/Q4940545) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Mumbai |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, marker 1, road 32, building 38, wall 1, zone 3, coastline 1, water 2).

Evidence: documented 0, mapped 79, inferred 0, derived 2; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6418845 historic=fort Q4940545 49 m from ledger point
- origin moved 53 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":2.4,"medianOutside":10.4}
- sea-1: DEM check ok {"cells":106,"medianInside":5.1,"medianOutside":11}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.93194/72.83778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=8; wikidata:Q4940545; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 79 elements); data/traces/bombay-castle-q4940545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
