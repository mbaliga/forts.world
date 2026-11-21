# Fort Cornwallis

> Malaysia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-cornwallis-q5470991` |
| Coordinates | 5.42062, 100.34349 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.42062/100.34349)) |
| Wikidata | [Q5470991](https://www.wikidata.org/wiki/Q5470991) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | George Town |
| Designations | national historic building of Malaysia |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `website` | https://mypenang.gov.my/culture-heritage/directory/399/?lg=en |

## What the model contains

Tier **T1**, status `outline+walls`, 250 elements (outline 1, marker 1, coastline 1, road 148, zone 7, wall 1, building 87, water 4).

Evidence: documented 0, mapped 250, inferred 0, derived 3; heights documented 18, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5827552 historic=fort Q5470991 43 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":39,"medianInside":7.6,"medianOutside":8.1}
- sea-1: DEM check failed {"cells":2491,"medianInside":8.1,"medianOutside":5.6}
- sea-2: DEM check ok {"cells":734,"medianInside":5.2,"medianOutside":8.9}
- 45 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.42062/100.34349) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=9; wikidata:Q5470991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 250 elements); data/traces/fort-cornwallis-q5470991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malaysia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
