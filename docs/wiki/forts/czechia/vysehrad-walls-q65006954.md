# Vyšehrad walls

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vysehrad-walls-q65006954` |
| Coordinates | 50.06524, 14.41978 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.06524/14.41978)) |
| Wikidata | [Q65006954](https://www.wikidata.org/wiki/Q65006954) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Vyšehrad |
| Designations | part of national cultural heritage site in the Czech Republic |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 97, road 678, wall 47, building 256, waterway 7, cliff 6, retaining-wall 30, zone 22, water 1).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 49, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8888301 historic=citywalls 146 m from ledger point
- pruned to the outline plus 150 m: 1145 -> 949 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 541 mapped (trace size budget); minor lanes are not drawn
- origin moved 147 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.06524/14.41978) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q65006954 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/vysehrad-walls-q65006954.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
