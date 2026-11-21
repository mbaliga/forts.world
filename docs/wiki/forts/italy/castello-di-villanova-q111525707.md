# Castello di Villanova

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-villanova-q111525707` |
| Coordinates | 40.79104, 17.58579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.79104/17.58579)) |
| Wikidata | [Q111525707](https://www.wikidata.org/wiki/Q111525707) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ostuni |
| Inception | 1300 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 94 elements (marker 2, road 36, coastline 1, zone 2, building 50, wall 1, water 2).

Evidence: documented 0, mapped 94, inferred 0, derived 2; heights documented 1, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":83,"medianInside":0,"medianOutside":2.4}
- sea-1: DEM check ok {"cells":35,"medianInside":0,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.79104/17.58579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q111525707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 94 elements); data/traces/castello-di-villanova-q111525707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
