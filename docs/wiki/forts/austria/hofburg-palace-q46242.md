# Hofburg Palace

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hofburg-palace-q46242` |
| Coordinates | 48.20639, 16.36528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.20639/16.36528)) |
| Wikidata | [Q46242](https://www.wikidata.org/wiki/Q46242) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle\|museum\|official residence\|château\|tourist destination |
| Administrative area | Innere Stadt |
| Inception | 1279 |
| Wikipedia language editions | 55 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Former imperial residence: 1438 - 1583 and 1612 -1806, it was the seat of the kings and emperors of the Holy Roman Empire of the German Nation, thereafter the seat of the Emperor of Austria until 1918. Today it is the official seat of the Austrian Federal |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 62, road 919, building 183, zone 191, waterway 1, water 3, retaining-wall 10, wall 28).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 38, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3898175 historic=castle Q46242 63 m from ledger point
- pruned to the outline plus 80 m: 1398 -> 572 elements
- roads capped: kept the 80 longest of 412 mapped (trace size budget); minor lanes are not drawn
- origin moved 85 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.20639/16.36528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle\|museum\|official residence\|château\|tourist destination; sitelinks=55; wikidata:Q46242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/hofburg-palace-q46242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
