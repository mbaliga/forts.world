# Çeşme Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cesme-castle-q28221175` |
| Coordinates | 38.32361, 26.30361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.32361/26.30361)) |
| Wikidata | [Q28221175](https://www.wikidata.org/wiki/Q28221175) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Çeşme |
| Inception | 1508 |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 4, road 98, building 183, wall 14, coastline 4, zone 1, water 1).

Evidence: documented 0, mapped 306, inferred 0, derived 1; heights documented 1, inferred 0, unknown 196.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15606421 historic=fort Q28221175 36 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":140,"medianInside":0,"medianOutside":13.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.32361/26.30361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q28221175 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/cesme-castle-q28221175.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
