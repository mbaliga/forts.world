# Novi Pazar Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `novi-pazar-fortress-q133709` |
| Coordinates | 43.13904, 20.51704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.13904/20.51704)) |
| Wikidata | [Q133709](https://www.wikidata.org/wiki/Q133709) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Novi Pazar |
| Designations | Immovable Cultural Heritage of Great Importance |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 1, road 120, waterway 2, building 520, wall 3, zone 15, water 5).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1245842695 historic=castle Q133709 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 520 mapped (trace size budget); the rest of the town is not drawn
- origin moved 52 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.13904/20.51704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=5; wikidata:Q133709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/novi-pazar-fortress-q133709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
