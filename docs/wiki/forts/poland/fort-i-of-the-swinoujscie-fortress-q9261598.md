# Fort I of the Swinoujscie Fortress

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-i-of-the-swinoujscie-fortress-q9261598` |
| Coordinates | 53.90709, 14.26881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.90709/14.26881)) |
| Wikidata | [Q9261598](https://www.wikidata.org/wiki/Q9261598) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Świnoujście |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 92 elements (road 58, waterway 1, coastline 3, building 25, zone 4, water 1).

Evidence: documented 0, mapped 92, inferred 0, derived 1; heights documented 18, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":249,"medianInside":-4,"medianOutside":-0.3}
- 983 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.90709/14.26881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q9261598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 92 elements); data/traces/fort-i-of-the-swinoujscie-fortress-q9261598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
