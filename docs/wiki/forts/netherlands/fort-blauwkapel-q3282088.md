# Fort Blauwkapel

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-blauwkapel-q3282088` |
| Coordinates | 52.11586, 5.13862 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.11586/5.13862)) |
| Wikidata | [Q3282088](https://www.wikidata.org/wiki/Q3282088) (CC0) |
| Wikidata class | fort |
| Types | fort\|architectural ensemble\|fort |
| Administrative area | Utrecht |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, road 264, zone 201, water 52, retaining-wall 16, building 427, waterway 64, wall 4).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 0, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172986801 historic=fort Q3282088 41 m from ledger point
- pruned to the outline plus 150 m: 1029 -> 598 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 195 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.11586/5.13862) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|architectural ensemble\|fort; sitelinks=3; wikidata:Q3282088 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/fort-blauwkapel-q3282088.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
