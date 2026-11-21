# Dunoon Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunoon-castle-q18736991` |
| Coordinates | 55.94556, -4.92389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.94556/-4.92389)) |
| Wikidata | [Q18736991](https://www.wikidata.org/wiki/Q18736991) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 136 elements (marker 5, road 78, building 46, wall 4, coastline 1, water 2).

Evidence: documented 0, mapped 136, inferred 0, derived 2; heights documented 1, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":151,"medianInside":4.8,"medianOutside":9.4}
- sea-1: DEM check ok {"cells":48,"medianInside":4.4,"medianOutside":8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.94556/-4.92389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q18736991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 136 elements); data/traces/dunoon-castle-q18736991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
