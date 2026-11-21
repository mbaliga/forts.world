# Castra Bonna

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-bonna-q3027848` |
| Coordinates | 50.745, 7.1 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.745/7.1)) |
| Wikidata | [Q3027848](https://www.wikidata.org/wiki/Q3027848) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Germania Inferior |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 1631-090 |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `description` | Fundament der Dietkirche |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 4, road 165, building 429, zone 23, water 2, waterway 1, wall 50, retaining-wall 1).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 89, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103171763 historic=archaeological_site Q52458354 269 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 429 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 268 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.745/7.1) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=5; wikidata:Q3027848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/castra-bonna-q3027848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
