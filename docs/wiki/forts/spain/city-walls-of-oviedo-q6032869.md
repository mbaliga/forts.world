# City walls of Oviedo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-oviedo-q6032869` |
| Coordinates | 43.36243, -5.84135 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.36243/-5.84135)) |
| Wikidata | [Q6032869](https://www.wikidata.org/wiki/Q6032869) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|monument |
| Administrative area | Oviedo |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 13, road 133, building 308, zone 9, wall 24, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 4, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7122279 historic=castle 152 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 308 mapped (trace size budget); the rest of the town is not drawn
- origin moved 152 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.36243/-5.84135) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|monument; sitelinks=3; wikidata:Q6032869 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/city-walls-of-oviedo-q6032869.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
