# Syreneset Fort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `syreneset-fort-q12004598` |
| Coordinates | 59.1489, 5.1975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.1489/5.1975)) |
| Wikidata | [Q12004598](https://www.wikidata.org/wiki/Q12004598) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Karmøy Municipality |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (marker 1, road 1, coastline 2, building 14, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":1,"medianInside":0.1,"medianOutside":18.9}
- sea-1: DEM check ok {"cells":4,"medianInside":0.1,"medianOutside":18.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.1489/5.1975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q12004598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/syreneset-fort-q12004598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
