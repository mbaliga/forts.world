# Lilleborg

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lilleborg-q1426598` |
| Coordinates | 55.11889, 14.89698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.11889/14.89698)) |
| Wikidata | [Q1426598](https://www.wikidata.org/wiki/Q1426598) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bornholm regional municipality |
| Inception | 1190 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `description` | Opført ca 1190 og ødelagt antageligt 1259 |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, marker 1, road 24, water 3, wall 3, zone 3, waterway 5).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171763136 historic=ruins Q1426598 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.11889/14.89698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=7; wikidata:Q1426598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/lilleborg-q1426598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
