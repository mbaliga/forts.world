# Maasi Castle

> Estonia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maasi-castle-q2024437` |
| Coordinates | 58.57565, 23.03711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.57565/23.03711)) |
| Wikidata | [Q2024437](https://www.wikidata.org/wiki/Q2024437) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Saaremaa Rural Municipality |
| Designations | architectural monument |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `location-only`, 38 elements (marker 1, road 10, coastline 2, zone 2, building 15, wall 6, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":321,"medianInside":3.6,"medianOutside":3.3}
- sea-1: DEM check ok {"cells":1598,"medianInside":3.3,"medianOutside":3.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.57565/23.03711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2024437 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/maasi-castle-q2024437.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
