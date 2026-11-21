# Fuerte de San José

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-san-jose-q65076561` |
| Coordinates | 17.9806, -66.62173 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.9806/-66.62173)) |
| Wikidata | [Q65076561](https://www.wikidata.org/wiki/Q65076561) (CC0) |
| Wikidata class | fort |
| Types | fort\|destroyed building or structure |
| Administrative area | Playa |
| Inception | 1760 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 168 elements (road 18, coastline 1, building 144, zone 1, water 4).

Evidence: documented 0, mapped 168, inferred 0, derived 4; heights documented 0, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":400,"medianInside":1.8,"medianOutside":4.1}
- sea-1: DEM check ok {"cells":16,"medianInside":0.8,"medianOutside":2.1}
- sea-2: DEM check ok {"cells":399,"medianInside":1.8,"medianOutside":4.1}
- sea-3: DEM check ok {"cells":150,"medianInside":0.6,"medianOutside":3.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.9806/-66.62173) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|destroyed building or structure; sitelinks=2; wikidata:Q65076561 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 168 elements); data/traces/fuerte-de-san-jose-q65076561.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
