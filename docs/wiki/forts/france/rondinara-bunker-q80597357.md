# Rondinara bunker

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rondinara-bunker-q80597357` |
| Coordinates | 41.46626, 9.27019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.46626/9.27019)) |
| Wikidata | [Q80597357](https://www.wikidata.org/wiki/Q80597357) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Bonifacio |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 25 elements (road 14, coastline 2, building 3, zone 2, cliff 2, water 2).

Evidence: documented 0, mapped 25, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":39,"medianInside":0,"medianOutside":2.8}
- sea-1: DEM check ok {"cells":86,"medianInside":0,"medianOutside":4.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.46626/9.27019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q80597357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 25 elements); data/traces/rondinara-bunker-q80597357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
