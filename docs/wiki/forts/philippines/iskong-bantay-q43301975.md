# Iskong Bantay

> Philippines · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `iskong-bantay-q43301975` |
| Coordinates | 14.00281, 121.92218 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/14.00281/121.92218)) |
| Wikidata | [Q43301975](https://www.wikidata.org/wiki/Q43301975) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Atimonan |
| Inception | 1752 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 161 elements (marker 1, road 38, building 877, coastline 1, water 1).

Evidence: documented 0, mapped 161, inferred 0, derived 1; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 877 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":65,"medianInside":1.6,"medianOutside":7.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/14.00281/121.92218) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q43301975 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 161 elements); data/traces/iskong-bantay-q43301975.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
