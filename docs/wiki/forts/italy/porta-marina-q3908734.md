# Porta Marina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-marina-q3908734` |
| Coordinates | 41.32304, 16.28464 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.32304/16.28464)) |
| Wikidata | [Q3908734](https://www.wikidata.org/wiki/Q3908734) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Barletta |
| Inception | 1751 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 9, road 196, wall 11, coastline 1, building 48, water 2, retaining-wall 3, zone 4).

Evidence: documented 0, mapped 275, inferred 0, derived 1; heights documented 9, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3966963 historic=castle Q2968443 391 m from ledger point
- origin moved 396 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":48,"medianInside":0,"medianOutside":7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.32304/16.28464) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/porta-marina-q3908734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
