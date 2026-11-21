# Ananuri

> Georgia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ananuri-q2600596` |
| Coordinates | 42.16361, 44.70389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.16361/44.70389)) |
| Wikidata | [Q2600596](https://www.wikidata.org/wiki/Q2600596) (CC0) |
| Wikidata class | castle |
| Types | castle\|monastery |
| Administrative area | Mtskheta-Mtianeti |
| Inception | 1600 |
| Designations | Tentative World Heritage Site\|Cultural Monuments of National Importance of Georgia |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, marker 3, road 42, building 10, waterway 1).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122022625 historic=castle Q2600596 63 m from ledger point
- origin moved 58 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.16361/44.70389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monastery; sitelinks=26; wikidata:Q2600596 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 58 elements); data/traces/ananuri-q2600596.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/georgia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
