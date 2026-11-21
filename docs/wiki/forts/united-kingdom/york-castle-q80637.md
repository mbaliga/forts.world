# York Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `york-castle-q80637` |
| Coordinates | 53.95583, -1.08 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.95583/-1.08)) |
| Wikidata | [Q80637](https://www.wikidata.org/wiki/Q80637) (CC0) |
| Wikidata class | castle |
| Types | castle\|motte-and-bailey castle |
| Administrative area | City of York |
| Inception | 1068 |
| Designations | scheduled monument |
| Wikipedia language editions | 24 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Main building (bailery) of the original Castle of York set on a high mound (motte). Present building dates from 1259 on the site of William the Conqueror's 1068 timber castle. |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/cliffords-tower-york/ |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 13, road 293, waterway 8, wall 28, building 104, zone 13, water 5, retaining-wall 12).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 32, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2755833 historic=castle Q80637 1 m from ledger point
- roads capped: kept the 150 longest of 293 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.95583/-1.08) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|motte-and-bailey castle; sitelinks=24; wikidata:Q80637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/york-castle-q80637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
