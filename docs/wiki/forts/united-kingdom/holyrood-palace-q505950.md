# Holyrood Palace

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `holyrood-palace-q505950` |
| Coordinates | 55.9527, -3.17207 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.9527/-3.17207)) |
| Wikidata | [Q505950](https://www.wikidata.org/wiki/Q505950) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|official residence\|country house\|Residence of the British Royal Family |
| Administrative area | City of Edinburgh |
| Designations | category A listed building |
| Wikipedia language editions | 44 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.royalcollection.org.uk/visit/palace-of-holyroodhouse |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 3, road 127, zone 44, building 85, water 3, wall 36, retaining-wall 10, waterway 2).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 34, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16769442 historic=castle Q505950 16 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.9527/-3.17207) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|official residence\|country house\|Residence of the British Royal Family; sitelinks=44; wikidata:Q505950 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/holyrood-palace-q505950.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
