# Fort Willem I

> Sint Maarten · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-willem-i-q65143491` |
| Coordinates | 18.01667, -63.04 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.01667/-63.04)) |
| Wikidata | [Q65143491](https://www.wikidata.org/wiki/Q65143491) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Philipsburg |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 149 elements (outline 1, road 39, building 101, water 3, wall 2, coastline 2, waterway 1).

Evidence: documented 0, mapped 149, inferred 0, derived 2; heights documented 27, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261374078 historic=ruins 693 m from ledger point
- origin moved 690 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":119,"medianInside":2,"medianOutside":6.9}
- sea-1: DEM check failed {"cells":400,"medianInside":5.8,"medianOutside":4.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.01667/-63.04) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q65143491 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 149 elements); data/traces/fort-willem-i-q65143491.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sint-maarten.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
