# Rochester Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rochester-castle-q1125527` |
| Coordinates | 51.3898, 0.50163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3898/0.50163)) |
| Wikidata | [Q1125527](https://www.wikidata.org/wiki/Q1125527) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rochester |
| Inception | 1087 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Rochester Castle, a historic Norman fortress in Kent, England, was built in 1127. Its impressive stone keep exemplifies medieval architecture. The castle played a key role in conflicts like the First Barons' War and is now a popular heritage site. |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/rochester-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, marker 4, water 1, road 234, building 128, waterway 1, wall 61, zone 23, retaining-wall 2).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 83, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3174519 historic=castle Q1125527 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 128 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3898/0.50163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=26; wikidata:Q1125527 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/rochester-castle-q1125527.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
