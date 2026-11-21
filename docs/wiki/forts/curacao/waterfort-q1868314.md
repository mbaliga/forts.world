# Waterfort

> Curaçao · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waterfort-q1868314` |
| Coordinates | 12.10361, -68.93472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.10361/-68.93472)) |
| Wikidata | [Q1868314](https://www.wikidata.org/wiki/Q1868314) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Curaçao |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 270 elements (outline 1, marker 3, road 137, building 261, coastline 4, zone 1, water 4).

Evidence: documented 0, mapped 270, inferred 0, derived 4; heights documented 43, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312133432 historic=fort Q1868314 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":900,"medianInside":3.3,"medianOutside":null}
- sea-1: DEM check failed {"cells":10,"medianInside":6.9,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":580,"medianInside":1.3,"medianOutside":8.6}
- sea-3: DEM check ok {"cells":877,"medianInside":3.2,"medianOutside":5.4}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.10361/-68.93472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q1868314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 270 elements); data/traces/waterfort-q1868314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/curacao.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
