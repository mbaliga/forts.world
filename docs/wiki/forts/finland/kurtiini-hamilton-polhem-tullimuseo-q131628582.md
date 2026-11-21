# Kurtiini Hamilton-Polhem(Tullimuseo)

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kurtiini-hamilton-polhem-tullimuseo-q131628582` |
| Coordinates | 60.14444, 24.98147 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.14444/24.98147)) |
| Wikidata | [Q131628582](https://www.wikidata.org/wiki/Q131628582) (CC0) |
| Wikidata class | fortification |
| Types | curtain wall |
| Administrative area | Helsinki |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 15, road 463, building 117, water 11, retaining-wall 63, coastline 4, cliff 25, wall 7, waterway 8, zone 71).

Evidence: documented 0, mapped 332, inferred 0, derived 4; heights documented 4, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1622785 historic=castle Q1292442 98 m from ledger point
- pruned to the outline plus 150 m: 785 -> 727 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 100 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 435 mapped (trace size budget); minor lanes are not drawn
- origin moved 355 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":2024,"medianInside":18.9,"medianOutside":17.5}
- sea-1: DEM check failed {"cells":1837,"medianInside":17.5,"medianOutside":28.3}
- sea-3: DEM check failed {"cells":633,"medianInside":16.8,"medianOutside":23.3}
- sea-4: DEM check failed {"cells":11,"medianInside":17,"medianOutside":18.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.14444/24.98147) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; curtain wall; sitelinks=1; wikidata:Q131628582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/kurtiini-hamilton-polhem-tullimuseo-q131628582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
