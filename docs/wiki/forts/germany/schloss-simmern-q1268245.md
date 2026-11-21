# Schloss Simmern

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-simmern-q1268245` |
| Coordinates | 49.98292, 7.52016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.98292/7.52016)) |
| Wikidata | [Q1268245](https://www.wikidata.org/wiki/Q1268245) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Rhineland-Palatinate |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.simmern.de/kultur-tourismus/sehenswuerdigkeiten/neues-schloss |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, road 189, waterway 1, building 177, zone 10, wall 1).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 3, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83714176 historic=castle Q1268245 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.98292/7.52016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q1268245 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/schloss-simmern-q1268245.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
