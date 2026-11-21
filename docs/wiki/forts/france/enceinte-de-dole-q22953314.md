# Enceinte de Dole

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-dole-q22953314` |
| Coordinates | 47.08932, 5.49004 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.08932/5.49004)) |
| Wikidata | [Q22953314](https://www.wikidata.org/wiki/Q22953314) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Dole |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/museo/M0347 |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 1, road 148, waterway 2, zone 22, building 338, water 1, wall 12, retaining-wall 2).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80684297 historic=castle 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.08932/5.49004) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=1; wikidata:Q22953314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/enceinte-de-dole-q22953314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
