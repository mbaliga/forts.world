# Skiathos Castle

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skiathos-castle-q28229919` |
| Coordinates | 39.20944, 23.46056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.20944/23.46056)) |
| Wikidata | [Q28229919](https://www.wikidata.org/wiki/Q28229919) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Skiathos Municipality |
| Designations | archaeological site in Greece\|protected building in Greece |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 38 elements (marker 1, coastline 13, zone 1, road 11, building 7, wall 1, cliff 2, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":222,"medianInside":0,"medianOutside":0.5}
- sea-1: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.20944/23.46056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=4; wikidata:Q28229919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/skiathos-castle-q28229919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
