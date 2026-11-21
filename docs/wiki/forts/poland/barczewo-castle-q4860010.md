# Barczewo Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barczewo-castle-q4860010` |
| Coordinates | 53.82903, 20.69236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.82903/20.69236)) |
| Wikidata | [Q4860010](https://www.wikidata.org/wiki/Q4860010) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure\|bishop castle |
| Administrative area | Barczewo |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, waterway 3, road 240, zone 1, building 168, wall 17).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 45, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234912281 historic=castle 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 168 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.82903/20.69236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure\|bishop castle; sitelinks=4; wikidata:Q4860010 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/barczewo-castle-q4860010.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
