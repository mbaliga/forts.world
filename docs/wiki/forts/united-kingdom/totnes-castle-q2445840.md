# Totnes Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `totnes-castle-q2445840` |
| Coordinates | 50.432, -3.69068 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.432/-3.69068)) |
| Wikidata | [Q2445840](https://www.wikidata.org/wiki/Q2445840) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle\|independent museum |
| Administrative area | Totnes |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |
| OSM `castle_type` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/totnes-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, road 150, wall 18, zone 7, building 357, waterway 4, retaining-wall 2, water 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 10, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1361427961 historic=ruins Q2445840 51 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- origin moved 52 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.432/-3.69068) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle\|independent museum; sitelinks=9; wikidata:Q2445840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/totnes-castle-q2445840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
