# Castle of Cognac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-cognac-q2240557` |
| Coordinates | 45.69833, -0.33 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.69833/-0.33)) |
| Wikidata | [Q2240557](https://www.wikidata.org/wiki/Q2240557) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cognac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | chateau |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 1, road 163, water 2, wall 26, building 481, waterway 4, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1021866 historic=castle Q2240557 49 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 481 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 46 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.69833/-0.33) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q2240557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/castle-of-cognac-q2240557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
