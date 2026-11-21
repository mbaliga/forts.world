# Uferbefestigung Museumsinsel 1 in München

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uferbefestigung-museumsinsel-1-in-munchen-q98739308` |
| Coordinates | 48.13135, 11.58615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.13135/11.58615)) |
| Wikidata | [Q98739308](https://www.wikidata.org/wiki/Q98739308) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Munich |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `description` | Rekonstruierter Grundriss eines Turms der Zwingermauer. Ursprünglich unter dem Grundstück Westenriederstraße 10/12 gelegen, wurden die Reste des Fundamentes 2010 hier neu aufgebaut. |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 19, road 312, waterway 2, building 205, zone 14, wall 8, water 1, retaining-wall 2).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 92, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1301148470 historic=ruins 560 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 560 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.13135/11.58615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q98739308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/uferbefestigung-museumsinsel-1-in-munchen-q98739308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
