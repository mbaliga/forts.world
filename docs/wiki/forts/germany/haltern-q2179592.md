# Haltern

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haltern-q2179592` |
| Coordinates | 51.7395, 7.17052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7395/7.17052)) |
| Wikidata | [Q2179592](https://www.wikidata.org/wiki/Q2179592) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Haltern am See |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `description` | LWL-Ausgrabung Aliso (Westtor) |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, road 59, building 299, zone 6, wall 3).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 1, inferred 0, unknown 301.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/435021824 historic=archaeological_site 226 m from ledger point
- origin moved 228 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7395/7.17052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=4; wikidata:Q2179592 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/haltern-q2179592.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
