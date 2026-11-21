# Curtain Carpelan-Gyllenborg

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `curtain-carpelan-gyllenborg-q131470141` |
| Coordinates | 60.13996, 24.98815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.13996/24.98815)) |
| Wikidata | [Q131470141](https://www.wikidata.org/wiki/Q131470141) (CC0) |
| Wikidata class | fortification |
| Types | curtain wall |
| Administrative area | Helsinki |
| Inception | 1750 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 22, road 534, building 112, water 11, retaining-wall 80, coastline 3, cliff 27, wall 6, waterway 8, zone 72).

Evidence: documented 0, mapped 357, inferred 0, derived 3; heights documented 4, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1622785 historic=castle Q1292442 686 m from ledger point
- pruned to the outline plus 150 m: 876 -> 818 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 95 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 506 mapped (trace size budget); minor lanes are not drawn
- origin moved 266 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":1837,"medianInside":17.5,"medianOutside":28.3}
- sea-2: DEM check failed {"cells":633,"medianInside":16.8,"medianOutside":23.3}
- sea-3: DEM check failed {"cells":11,"medianInside":17,"medianOutside":18.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.13996/24.98815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; curtain wall; sitelinks=1; wikidata:Q131470141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/curtain-carpelan-gyllenborg-q131470141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
