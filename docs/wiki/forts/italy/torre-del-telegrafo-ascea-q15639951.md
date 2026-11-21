# Torre del Telegrafo, Ascea

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-telegrafo-ascea-q15639951` |
| Coordinates | 40.12512, 15.18153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.12512/15.18153)) |
| Wikidata | [Q15639951](https://www.wikidata.org/wiki/Q15639951) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower\|semaphore tower |
| Administrative area | Ascea |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, coastline 1, road 7, zone 1, water 3).

Evidence: documented 0, mapped 13, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/773785072 historic=ruins Q15639951 2 m from ledger point
- sea-0: DEM check failed {"cells":22,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":158,"medianInside":0,"medianOutside":8.4}
- sea-2: DEM check ok {"cells":400,"medianInside":0,"medianOutside":9.1}
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.12512/15.18153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower\|semaphore tower; sitelinks=2; wikidata:Q15639951 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/torre-del-telegrafo-ascea-q15639951.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
