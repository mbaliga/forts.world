# Kaffa genoese fortress

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaffa-genoese-fortress-q4135566` |
| Coordinates | 45.02204, 35.4001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.02204/35.4001)) |
| Wikidata | [Q4135566](https://www.wikidata.org/wiki/Q4135566) (CC0) |
| Wikidata class | fort |
| Types | fortress\|ancient city |
| Administrative area | Feodosiia |
| Inception | 1266 |
| Designations | federal cultural heritage site in Russia\|State Register of Immovable Monuments of Ukraine |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 334 elements (marker 6, road 85, building 219, wall 11, zone 2, coastline 2, waterway 7, water 2).

Evidence: documented 0, mapped 334, inferred 0, derived 2; heights documented 4, inferred 0, unknown 226.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2390873 historic=castle Q4135566 247 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1250 x 809 m)
- sea-0: DEM check ok {"cells":336,"medianInside":0.8,"medianOutside":20.8}
- sea-1: DEM check ok {"cells":70,"medianInside":3,"medianOutside":17.4}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.02204/35.4001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|ancient city; sitelinks=7; wikidata:Q4135566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/kaffa-genoese-fortress-q4135566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
