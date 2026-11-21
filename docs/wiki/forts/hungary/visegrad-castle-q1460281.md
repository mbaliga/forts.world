# Visegrád Castle

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `visegrad-castle-q1460281` |
| Coordinates | 47.79361, 18.98056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.79361/18.98056)) |
| Wikidata | [Q1460281](https://www.wikidata.org/wiki/Q1460281) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Visegrád |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Fellegvár. 13. sz.-i eredetű hegyi vár, királyi tulajdonban. Fallal és kaputoronnyal védett lakópalota és öregtorony. A 14. sz.-ban bővítették két periódusban, újabb falövvel és alsó várudvarral. |
| OSM `website` | http://www.parkerdo.hu/visegradi_var |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 2, road 33, wall 16, building 8, retaining-wall 1, zone 4, cliff 5).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 2, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121239989 historic=castle Q1460281 14 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.79361/18.98056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=7; wikidata:Q1460281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/visegrad-castle-q1460281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
