# hôtel Dedons de Pierrefeu

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-dedons-de-pierrefeu-q22999406` |
| Coordinates | 43.52597, 5.44845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.52597/5.44845)) |
| Wikidata | [Q22999406](https://www.wikidata.org/wiki/Q22999406) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|private mansion |
| Administrative area | Aix-en-Provence |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 17, road 122, building 499, wall 40, retaining-wall 3).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 39, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88612341 historic=castle Q22999406 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 499 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.52597/5.44845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|private mansion; sitelinks=2; wikidata:Q22999406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/hotel-dedons-de-pierrefeu-q22999406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
