# Gruuthusemuseum

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gruuthusemuseum-q1108949` |
| Coordinates | 51.20506, 3.22493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.20506/3.22493)) |
| Wikidata | [Q1108949](https://www.wikidata.org/wiki/Q1108949) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|cultural heritage |
| Administrative area | Bruges |
| Inception | 1876 |
| Designations | beschermd monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.museabrugge.be/bezoek-onze-musea/onze-musea-en-monumenten/gruuthusemuseum |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 18, road 237, waterway 7, water 6, building 405, wall 73, zone 32).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 9, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221477841 historic=castle Q1108949 7 m from ledger point
- pruned to the outline plus 150 m: 779 -> 458 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 203 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.20506/3.22493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|cultural heritage; sitelinks=10; wikidata:Q1108949 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/gruuthusemuseum-q1108949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
