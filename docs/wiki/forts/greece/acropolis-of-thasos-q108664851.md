# Acropolis of Thasos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `acropolis-of-thasos-q108664851` |
| Coordinates | 40.77852, 24.71981 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.77852/24.71981)) |
| Wikidata | [Q108664851](https://www.wikidata.org/wiki/Q108664851) (CC0) |
| Wikidata class | fortification |
| Types | acropolis |
| Administrative area | Thasos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, marker 2, coastline 1, road 12, zone 6, building 3, retaining-wall 1, wall 10, cliff 4).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1485603447 historic=castle 19 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.77852/24.71981) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; acropolis; sitelinks=0; wikidata:Q108664851 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/acropolis-of-thasos-q108664851.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
