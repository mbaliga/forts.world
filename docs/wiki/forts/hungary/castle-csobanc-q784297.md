# Castle Csobánc

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-csobanc-q784297` |
| Coordinates | 46.87127, 17.50363 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.87127/17.50363)) |
| Wikidata | [Q784297](https://www.wikidata.org/wiki/Q784297) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Gyulakeszi |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |
| OSM `website` | http://www.csobancvar.hu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 33, building 4, wall 10, cliff 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 10, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232977924 historic=castle Q784297 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.87127/17.50363) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=2; wikidata:Q784297 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/castle-csobanc-q784297.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
