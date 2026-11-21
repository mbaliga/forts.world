# Pfalzgrafenschloss Neumarkt

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pfalzgrafenschloss-neumarkt-q1550832` |
| Coordinates | 49.28142, 11.46108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.28142/11.46108)) |
| Wikidata | [Q1550832](https://www.wikidata.org/wiki/Q1550832) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Neumarkt in der Oberpfalz |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 13, road 538, building 221, waterway 12, water 6, wall 53, zone 65, retaining-wall 4).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 10, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/18801455 historic=castle Q1550832 5 m from ledger point
- pruned to the outline plus 150 m: 913 -> 601 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 148 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 332 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.28142/11.46108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q1550832 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/pfalzgrafenschloss-neumarkt-q1550832.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
