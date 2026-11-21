# Rodoni Fortress

> Albania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rodoni-fortress-q3301160` |
| Coordinates | 41.5858, 19.4482 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.5858/19.4482)) |
| Wikidata | [Q3301160](https://www.wikidata.org/wiki/Q3301160) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `location-only`, 18 elements (marker 1, coastline 2, road 7, wall 5, cliff 1, water 2).

Evidence: documented 0, mapped 18, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":732,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":445,"medianInside":0,"medianOutside":0}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.5858/19.4482) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=8; wikidata:Q3301160 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 18 elements); data/traces/rodoni-fortress-q3301160.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
