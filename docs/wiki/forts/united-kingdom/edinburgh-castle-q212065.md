# Edinburgh Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edinburgh-castle-q212065` |
| Coordinates | 55.9487, -3.20073 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9487/-3.20073)) |
| Wikidata | [Q212065](https://www.wikidata.org/wiki/Q212065) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|building complex\|archaeological site\|château |
| Administrative area | City of Edinburgh |
| Inception | 1200 |
| Designations | scheduled monument |
| Wikipedia language editions | 58 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.edinburghcastle.scot/ |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 53, road 340, building 251, cliff 55, wall 114, zone 29, retaining-wall 15).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 27, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4301292 historic=castle Q212065 2 m from ledger point
- pruned to the outline plus 80 m: 858 -> 292 elements
- roads capped: kept the 80 longest of 87 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9487/-3.20073) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|building complex\|archaeological site\|château; sitelinks=58; wikidata:Q212065 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/edinburgh-castle-q212065.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
