# Castle of Mourão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-mourao-q5049802` |
| Coordinates | 38.385, -7.34667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.385/-7.34667)) |
| Wikidata | [Q5049802](https://www.wikidata.org/wiki/Q5049802) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Mourão |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 2, road 72, building 354, retaining-wall 4, wall 26).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 1, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/814630621 historic=castle Q5049802 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 57 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.385/-7.34667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=5; wikidata:Q5049802 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/castle-of-mourao-q5049802.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
