# Izena Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `izena-castle-q10885007` |
| Coordinates | 26.9147, 127.952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.9147/127.952)) |
| Wikidata | [Q10885007](https://www.wikidata.org/wiki/Q10885007) (CC0) |
| Wikidata class | fortification |
| Types | gusuku |
| Administrative area | Izena |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (marker 2, road 9, coastline 1, building 5, water 3).

Evidence: documented 0, mapped 20, inferred 0, derived 3; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":100,"medianInside":8.3,"medianOutside":17.8}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":14.9}
- sea-2: DEM check failed {"cells":6,"medianInside":14.8,"medianOutside":14.9}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.9147/127.952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gusuku; sitelinks=3; wikidata:Q10885007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/izena-castle-q10885007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
