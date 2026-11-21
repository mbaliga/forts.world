# Rembieliński Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rembielinski-palace-q1820898` |
| Coordinates | 52.22425, 21.02467 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.22425/21.02467)) |
| Wikidata | [Q1820898](https://www.wikidata.org/wiki/Q1820898) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|villa\|palace\|architectural heritage monument |
| Administrative area | Warsaw |
| Inception | 1865 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 21, road 201, zone 93, building 88, wall 18, retaining-wall 3).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 85, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29092781 historic=castle Q1820898 0 m from ledger point
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.22425/21.02467) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|villa\|palace\|architectural heritage monument; sitelinks=4; wikidata:Q1820898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/rembielinski-palace-q1820898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
