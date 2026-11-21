# Palazzo Porto Colleoni Thiene

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-porto-colleoni-thiene-q3662920` |
| Coordinates | 45.7066, 11.47832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7066/11.47832)) |
| Wikidata | [Q3662920](https://www.wikidata.org/wiki/Q3662920) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Thiene |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.castellodithiene.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 3, road 352, building 147, wall 7, zone 4, waterway 3).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 1, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/282709588 historic=castle Q3662920 47 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 147 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 352 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7066/11.47832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/palazzo-porto-colleoni-thiene-q3662920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
