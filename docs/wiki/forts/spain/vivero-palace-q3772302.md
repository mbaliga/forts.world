# Vivero Palace

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vivero-palace-q3772302` |
| Coordinates | 41.65663, -4.72015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.65663/-4.72015)) |
| Wikidata | [Q3772302](https://www.wikidata.org/wiki/Q3772302) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|monument |
| Administrative area | Valladolid |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://www.info.valladolid.es/ |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 1, road 105, waterway 1, building 132, wall 18, water 1, zone 5).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 105, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6705066 historic=castle Q3772302 8 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.65663/-4.72015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|monument; sitelinks=8; wikidata:Q3772302 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/vivero-palace-q3772302.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
