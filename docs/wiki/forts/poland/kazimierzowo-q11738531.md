# Kazimierzowo

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kazimierzowo-q11738531` |
| Coordinates | 54.7336, 18.5822 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7336/18.5822)) |
| Wikidata | [Q11738531](https://www.wikidata.org/wiki/Q11738531) (CC0) |
| Wikidata class | fort |
| Types | fortress\|destroyed building or structure |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 281 elements (marker 3, coastline 8, road 60, zone 4, building 204, water 2).

Evidence: documented 0, mapped 281, inferred 0, derived 2; heights documented 11, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":61,"medianInside":-5,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":74,"medianInside":-5,"medianOutside":0.1}
- 497 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7336/18.5822) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|destroyed building or structure; sitelinks=1; wikidata:Q11738531 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 281 elements); data/traces/kazimierzowo-q11738531.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
