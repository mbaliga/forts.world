# Porta Borsari

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-borsari-q1063320` |
| Coordinates | 45.44194, 10.9933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.44194/10.9933)) |
| Wikidata | [Q1063320](https://www.wikidata.org/wiki/Q1063320) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Verona |
| Designations | Italian national heritage |
| Wikipedia language editions | 14 |
| OSM `historic` | yes |
| OSM `barrier` | sally_port |

## What the model contains

Tier **T1**, status `outline-only`, 266 elements (outline 1, marker 6, road 135, waterway 1, water 2, building 395, zone 1).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 21, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/138812787 historic=yes Q1063320 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 395 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.44194/10.9933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=14; wikidata:Q1063320 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 266 elements); data/traces/porta-borsari-q1063320.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
