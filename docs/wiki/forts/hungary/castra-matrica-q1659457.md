# Castra Matrica

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-matrica-q1659457` |
| Coordinates | 47.3006, 18.918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3006/18.918)) |
| Wikidata | [Q1659457](https://www.wikidata.org/wiki/Q1659457) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Százhalombatta |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `description` | Matrica castrum (római katonai tábor és település): cohors milliaria Maurorum tábora. 155x152m. Épült az I.szd első felében. Elhagyták 430 körül. |
| OSM `ruins` | yes |
| OSM `website` | https://archeodatabase.hnm.hu/hu/node/11627 |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, marker 1, waterway 2, water 1, zone 7, road 12, building 28, wall 16).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 16, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/876151291 historic=archaeological_site Q1659457 67 m from ledger point
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3006/18.918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=5; wikidata:Q1659457 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/castra-matrica-q1659457.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
