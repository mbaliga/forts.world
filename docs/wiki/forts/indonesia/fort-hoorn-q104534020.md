# Fort Hoorn

> Indonesia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-hoorn-q104534020` |
| Coordinates | -3.51715, 128.473 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-3.51715/128.473)) |
| Wikidata | [Q104534020](https://www.wikidata.org/wiki/Q104534020) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Pelauw |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 249 elements (road 23, waterway 1, building 223, coastline 1, water 1).

Evidence: documented 0, mapped 249, inferred 0, derived 1; heights documented 0, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":174,"medianInside":0.2,"medianOutside":6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-3.51715/128.473) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q104534020 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 249 elements); data/traces/fort-hoorn-q104534020.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
