# Mazagan

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mazagan-q555360` |
| Coordinates | 33.25656, -8.50247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.25656/-8.50247)) |
| Wikidata | [Q555360](https://www.wikidata.org/wiki/Q555360) (CC0) |
| Wikidata class | fort |
| Types | town\|parish\|fortress\|cultural heritage\|heritage\|old town\|urban area\|archaeological site\|medina quarter |
| Administrative area | El Jadida |
| Inception | 1502 |
| Designations | Moroccan cultural heritage\|Heritage of Portuguese Influence\|World Heritage Site |
| UNESCO WHC id | 1058rev |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 29, road 193, zone 6, building 449, wall 64, water 4, coastline 2).

Evidence: documented 0, mapped 376, inferred 0, derived 3; heights documented 0, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1267677369 historic=castle 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 449 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":60,"medianInside":4.9,"medianOutside":6.1}
- sea-1: DEM check ok {"cells":151,"medianInside":-0.1,"medianOutside":6.3}
- sea-2: DEM check failed {"cells":1600,"medianInside":6.1,"medianOutside":2}
- 46 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.25656/-8.50247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; town\|parish\|fortress\|cultural heritage\|heritage\|old town\|urban area\|archaeological site\|medina quarter; sitelinks=9; wikidata:Q555360 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/mazagan-q555360.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
