# Dashan Fortress

> Taiwan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dashan-fortress-q107376699` |
| Coordinates | 23.52484, 119.55731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.52484/119.55731)) |
| Wikidata | [Q107376699](https://www.wikidata.org/wiki/Q107376699) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Magong City |
| Inception | 1902 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (road 4, coastline 2, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":128,"medianInside":8.6,"medianOutside":17.1}
- sea-1: DEM check ok {"cells":5,"medianInside":5.9,"medianOutside":14.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.52484/119.55731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q107376699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/dashan-fortress-q107376699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
