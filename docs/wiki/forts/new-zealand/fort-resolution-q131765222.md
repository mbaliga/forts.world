# Fort Resolution

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-resolution-q131765222` |
| Coordinates | -36.85083, 174.79167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-36.85083/174.79167)) |
| Wikidata | [Q131765222](https://www.wikidata.org/wiki/Q131765222) (CC0) |
| Wikidata class | fort |
| Types | heritage site\|fort |
| Administrative area | Auckland Province |
| Inception | 1885 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 154 elements (road 61, cliff 1, building 63, coastline 7, wall 1, zone 16, water 5).

Evidence: documented 0, mapped 154, inferred 0, derived 5; heights documented 1, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":140,"medianInside":10.6,"medianOutside":22.1}
- sea-1: DEM check failed {"cells":19,"medianInside":25,"medianOutside":18}
- sea-2: DEM check failed {"cells":386,"medianInside":20.8,"medianOutside":3}
- sea-3: DEM check ok {"cells":1,"medianInside":2,"medianOutside":18.1}
- sea-4: DEM check failed {"cells":400,"medianInside":20.3,"medianOutside":4.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-36.85083/174.79167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; heritage site\|fort; sitelinks=2; wikidata:Q131765222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 154 elements); data/traces/fort-resolution-q131765222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
