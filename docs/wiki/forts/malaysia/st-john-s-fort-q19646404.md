# St. John's Fort

> Malaysia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-john-s-fort-q19646404` |
| Coordinates | 2.18933, 102.265 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/2.18933/102.265)) |
| Wikidata | [Q19646404](https://www.wikidata.org/wiki/Q19646404) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Malacca |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, road 70, building 142, coastline 1, zone 4, wall 5).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 35, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/945813625 historic=castle 82 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 81 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/2.18933/102.265) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q19646404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/st-john-s-fort-q19646404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malaysia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
