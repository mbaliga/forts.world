# Charlottenlund Palace

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `charlottenlund-palace-q1066641` |
| Coordinates | 55.75032, 12.58057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.75032/12.58057)) |
| Wikidata | [Q1066641](https://www.wikidata.org/wiki/Q1066641) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Gentofte Municipality |
| Inception | 1733 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 50 elements (outline 1, marker 7, road 39, coastline 1, building 2).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 1, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25556993 historic=castle Q1066641 7 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.75032/12.58057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=26; wikidata:Q1066641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 50 elements); data/traces/charlottenlund-palace-q1066641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
