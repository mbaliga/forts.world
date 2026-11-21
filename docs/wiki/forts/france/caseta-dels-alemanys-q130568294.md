# Caseta dels Alemanys

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caseta-dels-alemanys-q130568294` |
| Coordinates | 42.43525, 3.17099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.43525/3.17099)) |
| Wikidata | [Q130568294](https://www.wikidata.org/wiki/Q130568294) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Cerbère |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (marker 3, coastline 2, road 8, cliff 5, building 1, waterway 3, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":3,"medianInside":0,"medianOutside":121.2}
- 71 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.43525/3.17099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=2; wikidata:Q130568294 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/caseta-dels-alemanys-q130568294.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
