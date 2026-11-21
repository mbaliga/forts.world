# Vestiges de la première enceinte de Bruxelles (mur)

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestiges-de-la-premiere-enceinte-de-bruxelles-mu-q42418052` |
| Coordinates | 50.84475, 4.34849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84475/4.34849)) |
| Wikidata | [Q42418052](https://www.wikidata.org/wiki/Q42418052) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Brussels |
| Designations | protected monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 6, road 373, building 117, wall 7, zone 23, water 23, retaining-wall 18).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 4, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1019259724 historic=castle Q2628206 641 m from ledger point
- roads capped: kept the 150 longest of 373 mapped (trace size budget); minor lanes are not drawn
- origin moved 641 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84475/4.34849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q42418052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/vestiges-de-la-premiere-enceinte-de-bruxelles-mu-q42418052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
