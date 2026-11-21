# Pittenweem

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pittenweem-q1011685` |
| Coordinates | 56.21306, -2.72861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.21306/-2.72861)) |
| Wikidata | [Q1011685](https://www.wikidata.org/wiki/Q1011685) (CC0) |
| Wikidata class | fortification |
| Types | village\|small burgh |
| Administrative area | Fife |
| Wikipedia language editions | 13 |

## What the model contains

Tier **T1**, status `location-only`, 350 elements (marker 3, coastline 1, road 68, building 270, wall 5, water 3).

Evidence: documented 0, mapped 350, inferred 0, derived 3; heights documented 33, inferred 0, unknown 242.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":1,"medianInside":4,"medianOutside":18}
- sea-1: DEM check ok {"cells":64,"medianInside":3.1,"medianOutside":20.6}
- sea-2: DEM check ok {"cells":33,"medianInside":-1,"medianOutside":19.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.21306/-2.72861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; village\|small burgh; sitelinks=13; wikidata:Q1011685 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 350 elements); data/traces/pittenweem-q1011685.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
