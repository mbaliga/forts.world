# Richmond Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `richmond-castle-q6645746` |
| Coordinates | 54.40219, -1.73751 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.40219/-1.73751)) |
| Wikidata | [Q6645746](https://www.wikidata.org/wiki/Q6645746) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Richmond |
| Inception | 1071 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/richmond-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 1, road 138, waterway 1, building 145, water 1, wall 45, zone 3, retaining-wall 1).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 1, inferred 0, unknown 190.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/228989320 historic=castle Q6645746 59 m from ledger point
- origin moved 60 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.40219/-1.73751) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=12; wikidata:Q6645746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/richmond-castle-q6645746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
