# Donjon de Houdan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-houdan-q787233` |
| Coordinates | 48.78931, 1.59875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.78931/1.59875)) |
| Wikidata | [Q787233](https://www.wikidata.org/wiki/Q787233) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Houdan |
| Inception | 1105 |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.ledonjondehoudan.fr/ |

## What the model contains

Tier **T1**, status `outline-only`, 217 elements (outline 1, marker 3, road 84, building 529, water 4, waterway 4, zone 1).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 4, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63401778 historic=castle Q787233 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 529 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.78931/1.59875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=6; wikidata:Q787233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 217 elements); data/traces/donjon-de-houdan-q787233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
