# Remparts de Quimper

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-quimper-q3424622` |
| Coordinates | 47.99611, -4.10611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.99611/-4.10611)) |
| Wikidata | [Q3424622](https://www.wikidata.org/wiki/Q3424622) (CC0) |
| Wikidata class | fortification |
| Types | city walls\|rampart |
| Administrative area | Quimper |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 1, road 92, waterway 2, building 210, zone 2, wall 1, retaining-wall 2).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 0, inferred 0, unknown 213.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94291110 historic=castle 655 m from ledger point
- origin moved 655 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.99611/-4.10611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls\|rampart; sitelinks=2; wikidata:Q3424622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/remparts-de-quimper-q3424622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
