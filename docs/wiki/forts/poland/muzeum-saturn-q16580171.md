# Muzeum Saturn

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muzeum-saturn-q16580171` |
| Coordinates | 50.30761, 19.06713 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.30761/19.06713)) |
| Wikidata | [Q16580171](https://www.wikidata.org/wiki/Q16580171) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|cultural property |
| Administrative area | Czeladź |
| Inception | 2009 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 2, waterway 1, road 262, zone 45, building 174, wall 4, cliff 1, water 2, retaining-wall 1).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 113, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/219276662 historic=castle Q16580171 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 174 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 262 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.30761/19.06713) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|cultural property; sitelinks=2; wikidata:Q16580171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/muzeum-saturn-q16580171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
