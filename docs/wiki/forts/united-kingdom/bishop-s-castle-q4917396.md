# Bishop's Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bishop-s-castle-q4917396` |
| Coordinates | 55.8628, -4.23639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.8628/-4.23639)) |
| Wikidata | [Q4917396](https://www.wikidata.org/wiki/Q4917396) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Glasgow City |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |
| OSM `description` | Ornamental arcaded facade built by the Merchants's House of Glasgow as a monumental focal point to its new ornamental cemetery and entrance to a proposed system of catacombs that was never completed. |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 9, road 235, zone 17, waterway 2, building 43, wall 55, retaining-wall 36, cliff 2).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 20, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387063804 historic=monument 219 m from ledger point
- origin moved 219 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.8628/-4.23639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q4917396 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/bishop-s-castle-q4917396.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
