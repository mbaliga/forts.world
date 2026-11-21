# Royal Palace

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-palace-q6057793` |
| Coordinates | 42.69635, 23.32722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.69635/23.32722)) |
| Wikidata | [Q6057793](https://www.wikidata.org/wiki/Q6057793) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace |
| Administrative area | Sofia |
| Inception | 1880 |
| Designations | monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 288 elements (outline 1, marker 17, road 273, building 94, water 2, zone 24).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 24, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157740218 historic=castle Q6057793 4 m from ledger point
- roads capped: kept the 150 longest of 273 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.69635/23.32722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace; sitelinks=7; wikidata:Q6057793 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 288 elements); data/traces/royal-palace-q6057793.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
