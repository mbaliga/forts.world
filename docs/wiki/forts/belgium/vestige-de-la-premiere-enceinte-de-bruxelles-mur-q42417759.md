# Vestige de la première enceinte de Bruxelles (mur)

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestige-de-la-premiere-enceinte-de-bruxelles-mur-q42417759` |
| Coordinates | 50.8493, 4.35711 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8493/4.35711)) |
| Wikidata | [Q42417759](https://www.wikidata.org/wiki/Q42417759) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Brussels |
| Designations | protected monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 7, road 358, building 41, retaining-wall 21, zone 23, water 23, wall 4).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 3, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019259724 historic=castle Q2628206 695 m from ledger point
- roads capped: kept the 150 longest of 358 mapped (trace size budget); minor lanes are not drawn
- origin moved 695 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8493/4.35711) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q42417759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/vestige-de-la-premiere-enceinte-de-bruxelles-mur-q42417759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
