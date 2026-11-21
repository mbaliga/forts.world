# Castle of the Counts and Dukes of Bar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-the-counts-and-dukes-of-bar-q2612600` |
| Coordinates | 48.7717, 5.1562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7717/5.1562)) |
| Wikidata | [Q2612600](https://www.wikidata.org/wiki/Q2612600) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bar-le-Duc |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, road 79, building 558, waterway 2, retaining-wall 11, wall 37, zone 4).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 0, inferred 0, unknown 168.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69296353 historic=castle Q2612600 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 558 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7717/5.1562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2612600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/castle-of-the-counts-and-dukes-of-bar-q2612600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
