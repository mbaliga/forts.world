# Castillitos Battery

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillitos-battery-q5723507` |
| Coordinates | 37.54007, -1.12061 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.54007/-1.12061)) |
| Wikidata | [Q5723507](https://www.wikidata.org/wiki/Q5723507) (CC0) |
| Wikidata class | fort |
| Types | fort\|historical military facility |
| Administrative area | Cartagena |
| Inception | 1936 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, marker 2, road 11, building 9, coastline 1, wall 1, cliff 11, zone 20, water 1).

Evidence: documented 0, mapped 57, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/462321068 historic=fort Q5723507 39 m from ledger point
- origin moved 44 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":52,"medianInside":0,"medianOutside":198.2}
- 55 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.54007/-1.12061) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historical military facility; sitelinks=4; wikidata:Q5723507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/castillitos-battery-q5723507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
