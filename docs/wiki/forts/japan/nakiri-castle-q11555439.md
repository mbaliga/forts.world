# Nakiri Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nakiri-castle-q11555439` |
| Coordinates | 34.27594, 136.89881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.27594/136.89881)) |
| Wikidata | [Q11555439](https://www.wikidata.org/wiki/Q11555439) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Shima |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 69 elements (road 23, coastline 26, building 13, zone 2, wall 1, water 4).

Evidence: documented 0, mapped 69, inferred 0, derived 4; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (854 m2) cut out of sea-0
- island ring (1398 m2) cut out of sea-0
- island ring (442 m2) cut out of sea-0
- island ring (713 m2) cut out of sea-0
- sea-0: DEM check failed {"cells":391,"medianInside":3.7,"medianOutside":2.7}
- sea-1: DEM check ok {"cells":271,"medianInside":2.1,"medianOutside":7.9}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":3.7}
- sea-3: DEM check ok {"cells":399,"medianInside":3.7,"medianOutside":3.8}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.27594/136.89881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11555439 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 69 elements); data/traces/nakiri-castle-q11555439.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
