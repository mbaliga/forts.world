# Burg Bentheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-bentheim-q877031` |
| Coordinates | 52.30253, 7.15718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.30253/7.15718)) |
| Wikidata | [Q877031](https://www.wikidata.org/wiki/Q877031) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Bad Bentheim |
| Inception | 1020 |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 24, road 233, retaining-wall 6, building 263, zone 93, water 2, wall 12).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 1, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115559437 historic=castle Q877031 16 m from ledger point
- pruned to the outline plus 150 m: 634 -> 442 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.30253/7.15718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=11; wikidata:Q877031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/burg-bentheim-q877031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
