# City walls of Słupsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-s-upsk-q30624573` |
| Coordinates | 54.4661, 17.0329 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.4661/17.0329)) |
| Wikidata | [Q30624573](https://www.wikidata.org/wiki/Q30624573) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Słupsk |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 6, road 492, waterway 7, building 131, wall 13, zone 179, water 9).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 25, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1332677813 historic=castle Q4185884 229 m from ledger point
- pruned to the outline plus 150 m: 838 -> 613 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 84 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 364 mapped (trace size budget); minor lanes are not drawn
- origin moved 229 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.4661/17.0329) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30624573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/city-walls-of-s-upsk-q30624573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
