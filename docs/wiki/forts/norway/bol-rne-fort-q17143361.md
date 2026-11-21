# Bolærne Fort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bol-rne-fort-q17143361` |
| Coordinates | 59.20354, 10.57087 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.20354/10.57087)) |
| Wikidata | [Q17143361](https://www.wikidata.org/wiki/Q17143361) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Nøtterøy |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 30 elements (marker 2, coastline 2, road 19, building 4, cliff 1, water 2).

Evidence: documented 0, mapped 30, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (498 m2) cut out of sea-1
- sea-0: DEM check ok {"cells":39,"medianInside":0,"medianOutside":13.3}
- sea-1: DEM check ok {"cells":40,"medianInside":0,"medianOutside":13.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.20354/10.57087) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q17143361 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/bol-rne-fort-q17143361.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
