# Egernborg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `egernborg-q54092109` |
| Coordinates | 54.47606, 9.83339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.47606/9.83339)) |
| Wikidata | [Q54092109](https://www.wikidata.org/wiki/Q54092109) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Eckernförde |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 1, road 188, zone 8, building 345, wall 36, coastline 1, waterway 2, water 2).

Evidence: documented 0, mapped 321, inferred 0, derived 2; heights documented 49, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41265800 historic=building Q2176303 268 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 345 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 268 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":184,"medianInside":2,"medianOutside":3.2}
- sea-1: DEM check ok {"cells":297,"medianInside":2,"medianOutside":5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.47606/9.83339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=1; wikidata:Q54092109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/egernborg-q54092109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
