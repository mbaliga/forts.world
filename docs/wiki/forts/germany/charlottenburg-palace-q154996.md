# Charlottenburg Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `charlottenburg-palace-q154996` |
| Coordinates | 52.52065, 13.29534 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.52065/13.29534)) |
| Wikidata | [Q154996](https://www.wikidata.org/wiki/Q154996) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|château\|summer residence |
| Administrative area | Berlin |
| Inception | 1791 |
| Designations | Gesamtanlage\|cultural heritage monument in Berlin\|cultural heritage ensemble |
| Wikipedia language editions | 49 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, marker 11, road 748, building 258, zone 102, water 3, wall 2, waterway 1).

Evidence: documented 0, mapped 390, inferred 0, derived 0; heights documented 89, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186517395 historic=castle Q154996 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 748 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.52065/13.29534) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|château\|summer residence; sitelinks=49; wikidata:Q154996 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/charlottenburg-palace-q154996.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
