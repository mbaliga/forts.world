# Castle of Csesznek

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-csesznek-q872569` |
| Coordinates | 47.3511, 17.8817 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3511/17.8817)) |
| Wikidata | [Q872569](https://www.wikidata.org/wiki/Q872569) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Csesznek |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, marker 2, road 33, zone 2, building 20, wall 27, retaining-wall 1, waterway 2, cliff 1).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 0, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2436847 historic=castle Q872569 29 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3511/17.8817) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q872569 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/castle-of-csesznek-q872569.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
