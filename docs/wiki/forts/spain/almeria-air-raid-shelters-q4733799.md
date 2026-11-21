# Almería air raid shelters

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `almeria-air-raid-shelters-q4733799` |
| Coordinates | 36.84155, -2.46466 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.84155/-2.46466)) |
| Wikidata | [Q4733799](https://www.wikidata.org/wiki/Q4733799) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|subterranea |
| Administrative area | Almería |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 3, wall 7, water 1, road 161, building 546, zone 2).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9748771 historic=citywalls 443 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 546 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 410 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.84155/-2.46466) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|subterranea; sitelinks=3; wikidata:Q4733799 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/almeria-air-raid-shelters-q4733799.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
