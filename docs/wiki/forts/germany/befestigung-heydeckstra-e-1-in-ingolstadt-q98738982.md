# Befestigung Heydeckstraße 1 in Ingolstadt

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `befestigung-heydeckstra-e-1-in-ingolstadt-q98738982` |
| Coordinates | 48.76852, 11.43192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.76852/11.43192)) |
| Wikidata | [Q98738982](https://www.wikidata.org/wiki/Q98738982) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Ingolstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `location-only`, 315 elements (marker 17, waterway 1, road 245, building 141, wall 23, zone 4).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 22, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6180405 historic=castle Q82878 419 m from ledger point
- site is a site relation of 11 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (123 x 116 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 141 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 418 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.76852/11.43192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q98738982 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 315 elements); data/traces/befestigung-heydeckstra-e-1-in-ingolstadt-q98738982.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
