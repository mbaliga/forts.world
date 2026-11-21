# Castle of Cofrentes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-cofrentes-q5757249` |
| Coordinates | 39.23062, -1.06296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.23062/-1.06296)) |
| Wikidata | [Q5757249](https://www.wikidata.org/wiki/Q5757249) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cofrentes |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, road 72, water 1, waterway 2, building 264, wall 74).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 0, inferred 0, unknown 195.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/179718813 historic=castle Q5757249 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- origin moved 15 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.23062/-1.06296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5757249 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/castle-of-cofrentes-q5757249.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
