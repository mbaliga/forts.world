# Ramparts of Mont Saint-Michel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-mont-saint-michel-q3078509` |
| Coordinates | 48.6353, -1.50972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6353/-1.50972)) |
| Wikidata | [Q3078509](https://www.wikidata.org/wiki/Q3078509) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Le Mont Saint-Michel |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 11, road 542, wall 263, retaining-wall 179, building 104, zone 30, coastline 1, waterway 2, water 1).

Evidence: documented 0, mapped 275, inferred 0, derived 1; heights documented 39, inferred 0, unknown 182.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41666003 historic=building Q22963320 67 m from ledger point
- pruned to the outline plus 60 m: 1134 -> 547 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 73 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 269 mapped (trace size budget); minor lanes are not drawn
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":277,"medianInside":0,"medianOutside":0.4}
- 47 DEM cells below -3 m (bathymetry) clamped to -3 m
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6353/-1.50972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q3078509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/ramparts-of-mont-saint-michel-q3078509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
