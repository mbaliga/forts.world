# Findochty

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `findochty-q1010357` |
| Coordinates | 57.698, -2.902 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.698/-2.902)) |
| Wikidata | [Q1010357](https://www.wikidata.org/wiki/Q1010357) (CC0) |
| Wikidata class | fortification |
| Types | village\|small burgh |
| Administrative area | Moray |
| Wikipedia language editions | 14 |

## What the model contains

Tier **T1**, status `location-only`, 356 elements (road 39, coastline 1, building 304, cliff 4, zone 6, water 2).

Evidence: documented 0, mapped 356, inferred 0, derived 2; heights documented 0, inferred 0, unknown 304.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":73,"medianInside":1.2,"medianOutside":17.3}
- sea-1: DEM check failed {"cells":397,"medianInside":14.6,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.698/-2.902) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; village\|small burgh; sitelinks=14; wikidata:Q1010357 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 356 elements); data/traces/findochty-q1010357.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
