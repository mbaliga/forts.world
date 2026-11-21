# Shanmuckinish Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shanmuckinish-castle-q28232493` |
| Coordinates | 53.13917, -9.1025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.13917/-9.1025)) |
| Wikidata | [Q28232493](https://www.wikidata.org/wiki/Q28232493) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Drumcreehy |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, coastline 2, road 5, building 14, wall 6, zone 2, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 5, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/949532317 historic=castle Q28232493 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":26,"medianInside":4.6,"medianOutside":3.8}
- sea-1: DEM check ok {"cells":141,"medianInside":3.4,"medianOutside":4.1}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.13917/-9.1025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=2; wikidata:Q28232493 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/shanmuckinish-castle-q28232493.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
