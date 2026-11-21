# Sinop Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sinop-castle-q6009704` |
| Coordinates | 42.0237, 35.1506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.0237/35.1506)) |
| Wikidata | [Q6009704](https://www.wikidata.org/wiki/Q6009704) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sinop |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, marker 2, road 108, zone 8, coastline 5, building 32, wall 6, water 3).

Evidence: documented 0, mapped 165, inferred 0, derived 3; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/229855105 historic=castle Q6009704 77 m from ledger point
- origin moved 80 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":40,"medianInside":0.1,"medianOutside":11.8}
- sea-1: DEM check ok {"cells":68,"medianInside":0,"medianOutside":12.4}
- sea-2: DEM check ok {"cells":68,"medianInside":0,"medianOutside":12.4}
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.0237/35.1506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q6009704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/sinop-castle-q6009704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
