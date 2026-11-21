# Navaginskiy Fort

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `navaginskiy-fort-q16679255` |
| Coordinates | 43.57989, 39.72164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.57989/39.72164)) |
| Wikidata | [Q16679255](https://www.wikidata.org/wiki/Q16679255) (CC0) |
| Wikidata class | fort |
| Types | historic site\|fort |
| Administrative area | Tsentralny City District |
| Inception | 1838 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 277 elements (marker 3, road 170, building 67, zone 17, water 14, coastline 1, retaining-wall 4, wall 1).

Evidence: documented 0, mapped 277, inferred 0, derived 1; heights documented 54, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":3,"medianInside":0.4,"medianOutside":13}
- 57 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.57989/39.72164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic site\|fort; sitelinks=2; wikidata:Q16679255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 277 elements); data/traces/navaginskiy-fort-q16679255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
