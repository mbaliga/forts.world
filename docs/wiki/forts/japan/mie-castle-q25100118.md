# Mie Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mie-castle-q25100118` |
| Coordinates | 26.2138, 127.6651 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.2138/127.6651)) |
| Wikidata | [Q25100118](https://www.wikidata.org/wiki/Q25100118) (CC0) |
| Wikidata class | fortification |
| Types | gusuku |
| Administrative area | Naha |
| Inception | 1546 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 108 elements (marker 2, road 60, coastline 3, zone 11, building 21, wall 7, water 4).

Evidence: documented 0, mapped 108, inferred 0, derived 4; heights documented 5, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":235,"medianInside":2.7,"medianOutside":9.1}
- sea-1: DEM check ok {"cells":386,"medianInside":4.5,"medianOutside":5.8}
- sea-2: DEM check ok {"cells":381,"medianInside":4.9,"medianOutside":5.3}
- sea-3: DEM check ok {"cells":399,"medianInside":4.6,"medianOutside":6.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.2138/127.6651) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gusuku; sitelinks=3; wikidata:Q25100118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 108 elements); data/traces/mie-castle-q25100118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
