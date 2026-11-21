# Saunatorn

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saunatorn-q12374745` |
| Coordinates | 59.43957, 24.74224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.43957/24.74224)) |
| Wikidata | [Q12374745](https://www.wikidata.org/wiki/Q12374745) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 2, road 313, wall 51, water 2, building 201, zone 41, retaining-wall 11).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 72, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3519144 historic=yes Q12374745 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 201 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.43957/24.74224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=6; wikidata:Q12374745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/saunatorn-q12374745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
