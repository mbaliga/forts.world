# Litice Gate

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `litice-gate-q15951685` |
| Coordinates | 49.74512, 13.37586 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.74512/13.37586)) |
| Wikidata | [Q15951685](https://www.wikidata.org/wiki/Q15951685) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vnitřní Město |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 367 elements (marker 86, road 804, building 610, wall 48, water 5, zone 63, retaining-wall 20, waterway 5).

Evidence: documented 0, mapped 367, inferred 0, derived 0; heights documented 42, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17051693 historic=citywalls 325 m from ledger point
- site is a site relation of 23 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (533 x 522 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 610 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 804 mapped (trace size budget); minor lanes are not drawn
- origin moved 310 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.74512/13.37586) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q15951685 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 367 elements); data/traces/litice-gate-q15951685.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
