# Orbetello city walls

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orbetello-city-walls-q3867296` |
| Coordinates | 42.44278, 11.22472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.44278/11.22472)) |
| Wikidata | [Q3867296](https://www.wikidata.org/wiki/Q3867296) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Orbetello |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 213 elements (road 78, building 133, zone 2).

Evidence: documented 0, mapped 213, inferred 0, derived 0; heights documented 116, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- 65 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.44278/11.22472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q3867296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 213 elements); data/traces/orbetello-city-walls-q3867296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
