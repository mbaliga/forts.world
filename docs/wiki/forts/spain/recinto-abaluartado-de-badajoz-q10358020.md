# Recinto abaluartado de Badajoz

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `recinto-abaluartado-de-badajoz-q10358020` |
| Coordinates | 38.88191, -6.96899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.88191/-6.96899)) |
| Wikidata | [Q10358020](https://www.wikidata.org/wiki/Q10358020) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Badajoz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, marker 9, road 298, building 578, zone 36, wall 51, waterway 2, water 6, cliff 6).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 0, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96592131 historic=citywalls 90 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 578 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 298 mapped (trace size budget); minor lanes are not drawn
- origin moved 91 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.88191/-6.96899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=6; wikidata:Q10358020 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/recinto-abaluartado-de-badajoz-q10358020.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
