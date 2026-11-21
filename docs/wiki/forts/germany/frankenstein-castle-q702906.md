# Frankenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frankenstein-castle-q702906` |
| Coordinates | 49.79333, 8.66833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.79333/8.66833)) |
| Wikidata | [Q702906](https://www.wikidata.org/wiki/Q702906) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mühltal |
| Inception | 1252 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://www.schloesser-hessen.de/de/burg-frankenstein |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 1, road 52, building 9, wall 4, zone 1, cliff 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 3, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24606901 historic=castle Q702906 28 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.79333/8.66833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=18; wikidata:Q702906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/frankenstein-castle-q702906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
