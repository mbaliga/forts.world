# Castle of Castro Marim

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castro-marim-q5050374` |
| Coordinates | 37.21853, -7.44194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.21853/-7.44194)) |
| Wikidata | [Q5050374](https://www.wikidata.org/wiki/Q5050374) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Castro Marim |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 2, road 117, waterway 6, building 456, wall 64, water 3, zone 1, retaining-wall 4).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 0, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79428694 historic=citywalls 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- origin moved 34 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.21853/-7.44194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q5050374 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/castle-of-castro-marim-q5050374.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
