# White Tower of Thessaloniki

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `white-tower-of-thessaloniki-q550576` |
| Coordinates | 40.62639, 22.94833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.62639/22.94833)) |
| Wikidata | [Q550576](https://www.wikidata.org/wiki/Q550576) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortified tower |
| Administrative area | Thessaloniki Municipality |
| Inception | 1500 |
| Designations | archaeological site in Greece\|protected building in Greece |
| Wikipedia language editions | 33 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://www.mbp.gr/en/ |

## What the model contains

Tier **T1**, status `outline+walls`, 201 elements (outline 1, marker 8, road 98, building 73, coastline 1, water 3, zone 13, wall 3, waterway 1).

Evidence: documented 0, mapped 201, inferred 0, derived 1; heights documented 23, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/730026417 historic=castle Q550576 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":560,"medianInside":0,"medianOutside":10.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.62639/22.94833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortified tower; sitelinks=33; wikidata:Q550576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 201 elements); data/traces/white-tower-of-thessaloniki-q550576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
