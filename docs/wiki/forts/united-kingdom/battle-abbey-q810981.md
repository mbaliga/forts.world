# Battle Abbey

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battle-abbey-q810981` |
| Coordinates | 50.91505, 0.486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.91505/0.486)) |
| Wikidata | [Q810981](https://www.wikidata.org/wiki/Q810981) (CC0) |
| Wikidata class | castle |
| Types | castle\|monastery ruins |
| Administrative area | Battle |
| Inception | 1067 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `description` | https://historicengland.org.uk/listing/the-list/list-entry/1278698 |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/1066-battle-of-hastings-abbey-and-battlefield/ |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 12, road 157, building 198, zone 25, wall 58, waterway 2, retaining-wall 6, water 1).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 43, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/271728318 historic=castle Q810981 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 63 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.91505/0.486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monastery ruins; sitelinks=19; wikidata:Q810981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/battle-abbey-q810981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
