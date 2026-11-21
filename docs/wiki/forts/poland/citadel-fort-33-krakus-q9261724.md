# Citadel Fort 33 Krakus

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadel-fort-33-krakus-q9261724` |
| Coordinates | 50.0381, 19.9585 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0381/19.9585)) |
| Wikidata | [Q9261724](https://www.wikidata.org/wiki/Q9261724) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kraków |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 15, road 400, zone 29, wall 51, building 221, cliff 7, retaining-wall 8).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 98, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1302839752 historic=fort Q122263058 509 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 221 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 400 mapped (trace size budget); minor lanes are not drawn
- origin moved 511 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0381/19.9585) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q9261724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/citadel-fort-33-krakus-q9261724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
