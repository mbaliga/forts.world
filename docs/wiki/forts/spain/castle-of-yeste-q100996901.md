# Castle of Yeste

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-yeste-q100996901` |
| Coordinates | 38.36688, -2.3179 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.36688/-2.3179)) |
| Wikidata | [Q100996901](https://www.wikidata.org/wiki/Q100996901) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Yeste |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, marker 1, zone 1, road 90, building 347, wall 6).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 1, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396094901 historic=castle Q100996901 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.36688/-2.3179) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q100996901 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/castle-of-yeste-q100996901.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
