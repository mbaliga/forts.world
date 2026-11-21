# Castle of Paleochora

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-paleochora-q56450795` |
| Coordinates | 35.22849, 23.68134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.22849/23.68134)) |
| Wikidata | [Q56450795](https://www.wikidata.org/wiki/Q56450795) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Kantanos-Selino Municipality |
| Inception | 1282 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, road 64, zone 15, coastline 15, building 130, waterway 1, wall 12, retaining-wall 1, cliff 1, water 2).

Evidence: documented 0, mapped 242, inferred 0, derived 2; heights documented 1, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27604727 historic=fort 39 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":30,"medianInside":3,"medianOutside":8.6}
- sea-1: DEM check ok {"cells":3,"medianInside":2.3,"medianOutside":8.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.22849/23.68134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=4; wikidata:Q56450795 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/castle-of-paleochora-q56450795.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
