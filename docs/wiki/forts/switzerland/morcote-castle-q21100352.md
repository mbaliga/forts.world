# Morcote Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `morcote-castle-q21100352` |
| Coordinates | 45.9259, 8.91381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9259/8.91381)) |
| Wikidata | [Q21100352](https://www.wikidata.org/wiki/Q21100352) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|castle ruin |
| Administrative area | Morcote |
| Inception | 1400 |
| Wikipedia language editions | 4 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 3, road 177, building 116, wall 4, zone 5, waterway 2, retaining-wall 5).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 3, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/306014795 historic=tomb 288 m from ledger point
- origin moved 288 m from the ledger point to the outline centroid
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9259/8.91381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|castle ruin; sitelinks=4; wikidata:Q21100352 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/morcote-castle-q21100352.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
