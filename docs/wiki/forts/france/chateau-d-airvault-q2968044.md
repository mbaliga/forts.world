# Château d'Airvault

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-airvault-q2968044` |
| Coordinates | 46.8275, -0.13806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8275/-0.13806)) |
| Wikidata | [Q2968044](https://www.wikidata.org/wiki/Q2968044) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Airvault |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, marker 2, building 579, road 123, wall 71, zone 26, retaining-wall 3).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 0, inferred 0, unknown 194.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64523013 historic=castle 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 579 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8275/-0.13806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2968044 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/chateau-d-airvault-q2968044.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
