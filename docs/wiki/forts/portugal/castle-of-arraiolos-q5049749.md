# Castle of Arraiolos

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-arraiolos-q5049749` |
| Coordinates | 38.72556, -7.9875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.72556/-7.9875)) |
| Wikidata | [Q5049749](https://www.wikidata.org/wiki/Q5049749) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Arraiolos |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, road 74, wall 35, building 315, retaining-wall 1).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/777307916 historic=castle Q5049749 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn
- origin moved 43 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.72556/-7.9875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=7; wikidata:Q5049749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/castle-of-arraiolos-q5049749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
