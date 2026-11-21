# Palais Lieben-Auspitz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-lieben-auspitz-q2047079` |
| Coordinates | 48.21162, 16.36162 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21162/16.36162)) |
| Wikidata | [Q2047079](https://www.wikidata.org/wiki/Q2047079) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Innere Stadt |
| Inception | 1872 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 26, road 405, building 41, zone 74, wall 7, water 1, retaining-wall 6).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 35, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11951566 historic=castle Q2047079 3 m from ledger point
- roads capped: kept the 150 longest of 405 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21162/16.36162) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=6; wikidata:Q2047079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/palais-lieben-auspitz-q2047079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
