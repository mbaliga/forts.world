# Porta Nuova

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-nuova-q674831` |
| Coordinates | 45.43147, 10.98817 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.43147/10.98817)) |
| Wikidata | [Q674831](https://www.wikidata.org/wiki/Q674831) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Verona |
| Inception | 1532 |
| Designations | Italian national heritage |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 119, water 1, wall 4, building 121, zone 8, retaining-wall 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 9, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/448209474 historic=ruins 191 m from ledger point
- origin moved 192 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.43147/10.98817) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=8; wikidata:Q674831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/porta-nuova-q674831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
