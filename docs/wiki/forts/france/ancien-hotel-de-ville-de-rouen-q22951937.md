# Ancien hôtel-de-ville de Rouen

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ancien-hotel-de-ville-de-rouen-q22951937` |
| Coordinates | 49.44149, 1.09152 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44149/1.09152)) |
| Wikidata | [Q22951937](https://www.wikidata.org/wiki/Q22951937) (CC0) |
| Wikidata class | castle |
| Types | castle\|city hall |
| Administrative area | Rouen |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 9, road 307, building 453, zone 8, water 1, wall 5).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 27, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64181280 historic=castle Q3492478 591 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 453 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 307 mapped (trace size budget); minor lanes are not drawn
- origin moved 591 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44149/1.09152) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|city hall; sitelinks=1; wikidata:Q22951937 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/ancien-hotel-de-ville-de-rouen-q22951937.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
