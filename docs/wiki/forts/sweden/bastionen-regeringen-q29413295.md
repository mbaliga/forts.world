# Bastionen Regeringen

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastionen-regeringen-q29413295` |
| Coordinates | 56.66528, 16.37259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.66528/16.37259)) |
| Wikidata | [Q29413295](https://www.wikidata.org/wiki/Q29413295) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kalmar Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 105 elements (coastline 2, road 39, zone 1, building 56, wall 5, water 2).

Evidence: documented 0, mapped 105, inferred 0, derived 2; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":384,"medianInside":1.2,"medianOutside":1.7}
- sea-1: DEM check ok {"cells":234,"medianInside":-1,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.66528/16.37259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q29413295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 105 elements); data/traces/bastionen-regeringen-q29413295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
