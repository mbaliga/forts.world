# Fort Regent

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-regent-q3078026` |
| Coordinates | 49.1813, -2.1059 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1813/-2.1059)) |
| Wikidata | [Q3078026](https://www.wikidata.org/wiki/Q3078026) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fort |
| Administrative area | Saint Helier |
| Inception | 1806 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 4, road 249, coastline 2, zone 7, building 206, water 5, wall 14, retaining-wall 7, waterway 1).

Evidence: documented 0, mapped 311, inferred 0, derived 3; heights documented 8, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166359883 historic=castle Q3078026 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 206 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":0,"medianOutside":15.9}
- sea-1: DEM check ok {"cells":35,"medianInside":0,"medianOutside":16.2}
- sea-2: DEM check ok {"cells":12,"medianInside":0,"medianOutside":16}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1813/-2.1059) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fort; sitelinks=7; wikidata:Q3078026 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/fort-regent-q3078026.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
