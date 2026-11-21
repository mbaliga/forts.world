# Castle of Quel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-quel-q10861801` |
| Coordinates | 42.22867, -2.04644 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.22867/-2.04644)) |
| Wikidata | [Q10861801](https://www.wikidata.org/wiki/Q10861801) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Quel |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, road 45, waterway 1, building 373, wall 1).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 120, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1568666290 historic=castle Q10861801 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.22867/-2.04644) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q10861801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/castle-of-quel-q10861801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
