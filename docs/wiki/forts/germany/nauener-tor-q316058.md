# Nauener Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nauener-tor-q316058` |
| Coordinates | 52.4035, 13.0578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4035/13.0578)) |
| Wikidata | [Q316058](https://www.wikidata.org/wiki/Q316058) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Potsdam |
| Inception | 1755 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 13 |
| OSM `historic` | building |
| OSM `heritage` | 4 |
| OSM `description` | Turmvilla; ehem. Wohnhaus des Bankier Heinrich Quistorp (30.04.1836-05.12.1902). |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 1, road 319, building 298, wall 27, zone 36).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 56, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28802037 historic=building 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 298 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 319 mapped (trace size budget); minor lanes are not drawn
- origin moved 42 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4035/13.0578) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=13; wikidata:Q316058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/nauener-tor-q316058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
