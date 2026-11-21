# Eilean Donan Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eilean-donan-castle-q20816698` |
| Coordinates | 57.27389, -5.51605 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.27389/-5.51605)) |
| Wikidata | [Q20816698](https://www.wikidata.org/wiki/Q20816698) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | category A listed building |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | https://www.eileandonancastle.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, marker 3, road 40, retaining-wall 4, coastline 4, building 3, waterway 1, wall 14, zone 7, cliff 3, water 1).

Evidence: documented 0, mapped 81, inferred 0, derived 1; heights documented 3, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3825399 historic=castle Q20816698 8 m from ledger point
- island ring (7850 m2) cut out of sea-0
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1312,"medianInside":55,"medianOutside":5.4}
- 48 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.27389/-5.51605) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q20816698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 81 elements); data/traces/eilean-donan-castle-q20816698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
