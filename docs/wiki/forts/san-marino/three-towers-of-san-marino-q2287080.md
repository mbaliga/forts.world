# Three Towers of San Marino

> San Marino · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `three-towers-of-san-marino-q2287080` |
| Coordinates | 43.935, 12.45 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.935/12.45)) |
| Wikidata | [Q2287080](https://www.wikidata.org/wiki/Q2287080) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.sanmarinosite.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 5, road 158, building 120, wall 9, zone 11, cliff 7, retaining-wall 4).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 12, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59305144 historic=castle Q2711604 65 m from ledger point
- origin moved 65 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.935/12.45) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=28; wikidata:Q2287080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/three-towers-of-san-marino-q2287080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/san-marino.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
