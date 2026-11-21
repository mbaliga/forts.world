# Castle of Castries

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castries-q2968791` |
| Coordinates | 43.67749, 3.98696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67749/3.98696)) |
| Wikidata | [Q2968791](https://www.wikidata.org/wiki/Q2968791) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|residential building |
| Administrative area | Castries |
| Inception | 1645 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.amischateaudecastries.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 6, road 145, wall 5, waterway 1, building 561, zone 9, water 3, retaining-wall 10).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 3, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133190319 historic=castle Q2968791 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 561 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67749/3.98696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|residential building; sitelinks=4; wikidata:Q2968791 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/castle-of-castries-q2968791.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
