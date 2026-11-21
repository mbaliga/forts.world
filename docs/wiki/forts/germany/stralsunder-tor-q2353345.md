# Stralsunder Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stralsunder-tor-q2353345` |
| Coordinates | 54.1143, 13.0426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.1143/13.0426)) |
| Wikidata | [Q2353345](https://www.wikidata.org/wiki/Q2353345) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Grimmen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://www.grimmen.de/sehenswuerdigkeiten/wasserturm/ |

## What the model contains

Tier **T1**, status `outline-only`, 187 elements (outline 1, road 64, building 369, zone 1, water 1).

Evidence: documented 0, mapped 187, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187942863 historic=yes Q1797634 402 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- origin moved 402 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.1143/13.0426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q2353345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 187 elements); data/traces/stralsunder-tor-q2353345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
