# Arwad Castle

> Syria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arwad-castle-q12233379` |
| Coordinates | 34.85646, 35.85768 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.85646/35.85768)) |
| Wikidata | [Q12233379](https://www.wikidata.org/wiki/Q12233379) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, coastline 1, road 43, building 11, wall 1, water 2).

Evidence: documented 0, mapped 59, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2061077 historic=castle Q12233379 25 m from ledger point
- origin moved 25 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":100,"medianInside":1.5,"medianOutside":10}
- sea-1: DEM check ok {"cells":15,"medianInside":4.6,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.85646/35.85768) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q12233379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/arwad-castle-q12233379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/syria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
