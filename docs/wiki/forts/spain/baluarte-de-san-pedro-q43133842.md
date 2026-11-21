# Baluarte de San Pedro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluarte-de-san-pedro-q43133842` |
| Coordinates | 36.531, -6.30542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.531/-6.30542)) |
| Wikidata | [Q43133842](https://www.wikidata.org/wiki/Q43133842) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, marker 2, road 70, zone 14, building 33, wall 2, coastline 2, water 2).

Evidence: documented 0, mapped 127, inferred 0, derived 2; heights documented 1, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97509098 historic=castle Q8342552 294 m from ledger point
- origin moved 296 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":-0.5,"medianOutside":0}
- sea-1: DEM check ok {"cells":294,"medianInside":0,"medianOutside":7.6}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.531/-6.30542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q43133842 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/baluarte-de-san-pedro-q43133842.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
