# Torre Bermeja

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-bermeja-q6150046` |
| Coordinates | 36.59714, -4.51541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.59714/-4.51541)) |
| Wikidata | [Q6150046](https://www.wikidata.org/wiki/Q6150046) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Benalmádena |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 139 elements (outline 1, coastline 3, road 101, building 30, zone 1, water 3).

Evidence: documented 0, mapped 139, inferred 0, derived 3; heights documented 7, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/672949370 historic=monument 2 m from ledger point
- island ring (5815 m2) cut out of sea-0
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":385,"medianInside":10.9,"medianOutside":5.9}
- sea-1: DEM check failed {"cells":396,"medianInside":10.6,"medianOutside":10.9}
- sea-2: DEM check ok {"cells":72,"medianInside":4.6,"medianOutside":12.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.59714/-4.51541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q6150046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 139 elements); data/traces/torre-bermeja-q6150046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
