# The Bunker

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-bunker-q5980658` |
| Coordinates | 41.41928, 2.16171 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.41928/2.16171)) |
| Wikidata | [Q5980658](https://www.wikidata.org/wiki/Q5980658) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Barcelona |
| Designations | public art in Barcelona |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |
| OSM `website` | https://www.barcelona.cat/museuhistoria/es/patrimonios/los-espacios-del-muhba/muhba-turo-de-la-rovira |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 2, road 116, building 269, wall 14, cliff 3, waterway 2, zone 2, retaining-wall 3).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 112, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142894789 historic=fort Q99463635 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.41928/2.16171) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=3; wikidata:Q5980658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/the-bunker-q5980658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
