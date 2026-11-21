# Pucka Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pucka-gate-q115425093` |
| Coordinates | 54.60252, 18.24169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.60252/18.24169)) |
| Wikidata | [Q115425093](https://www.wikidata.org/wiki/Q115425093) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Wejherowo |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | Dawny spichlerz |

## What the model contains

Tier **T1**, status `outline-only`, 324 elements (outline 1, marker 1, road 168, building 264, waterway 7, zone 36, water 9).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/395888153 historic=building 177 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 178 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.60252/18.24169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q115425093 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 324 elements); data/traces/pucka-gate-q115425093.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
