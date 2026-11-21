# Levice Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `levice-castle-q8419287` |
| Coordinates | 48.22167, 18.60083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.22167/18.60083)) |
| Wikidata | [Q8419287](https://www.wikidata.org/wiki/Q8419287) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Levice |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.muzeumlevice.sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 4, road 268, building 108, wall 12, zone 20, waterway 5, water 1, retaining-wall 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 14, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1378187241 historic=castle Q8419287 46 m from ledger point
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.22167/18.60083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=9; wikidata:Q8419287 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/levice-castle-q8419287.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
