# Matyášova brána

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `matyasova-brana-q66541040` |
| Coordinates | 49.06675, 17.45871 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.06675/17.45871)) |
| Wikidata | [Q66541040](https://www.wikidata.org/wiki/Q66541040) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Uherské Hradiště |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 349 elements (marker 3, road 190, waterway 1, building 176, wall 15, zone 60).

Evidence: documented 0, mapped 349, inferred 0, derived 0; heights documented 45, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 176 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.06675/17.45871) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q66541040 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 349 elements); data/traces/matyasova-brana-q66541040.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
