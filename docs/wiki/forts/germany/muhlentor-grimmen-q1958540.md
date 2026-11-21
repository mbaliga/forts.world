# Mühlentor (Grimmen)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muhlentor-grimmen-q1958540` |
| Coordinates | 54.1123, 13.0407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.1123/13.0407)) |
| Wikidata | [Q1958540](https://www.wikidata.org/wiki/Q1958540) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Grimmen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://www.grimmen.de/sehenswuerdigkeiten/wasserturm/ |

## What the model contains

Tier **T1**, status `outline-only`, 187 elements (outline 1, road 64, building 366, zone 1, water 1).

Evidence: documented 0, mapped 187, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187942863 historic=yes Q1797634 491 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 366 mapped (trace size budget); the rest of the town is not drawn
- origin moved 491 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.1123/13.0407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q1958540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 187 elements); data/traces/muhlentor-grimmen-q1958540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
