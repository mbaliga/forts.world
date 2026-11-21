# San Carlos de la Cabaña Fortress

> Cuba · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-carlos-de-la-cabana-fortress-q1757628` |
| Coordinates | 23.14722, -82.35 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.14722/-82.35)) |
| Wikidata | [Q1757628](https://www.wikidata.org/wiki/Q1757628) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Havana |
| Inception | 1762 |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 204-003 |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `location-only`, 312 elements (marker 31, road 117, wall 5, building 108, zone 30, retaining-wall 11, water 3, cliff 3, coastline 4).

Evidence: documented 0, mapped 312, inferred 0, derived 2; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2732747 historic=castle Q1757628 71 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (559 x 428 m)
- origin moved 81 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":632,"medianInside":3.9,"medianOutside":31}
- sea-1: DEM check failed {"cells":1757,"medianInside":27.1,"medianOutside":6}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.14722/-82.35) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=21; wikidata:Q1757628 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/san-carlos-de-la-cabana-fortress-q1757628.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cuba.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
