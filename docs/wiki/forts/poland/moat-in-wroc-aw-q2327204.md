# Moat in Wrocław

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moat-in-wroc-aw-q2327204` |
| Coordinates | 51.10426, 17.03308 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10426/17.03308)) |
| Wikidata | [Q2327204](https://www.wikidata.org/wiki/Q2327204) (CC0) |
| Wikidata class | fortification |
| Types | wet moat |
| Administrative area | Wrocław Old Town |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 381 elements (outline 1, marker 3, road 409, building 142, zone 67, wall 24, retaining-wall 16).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 84, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1003993208 historic=castle Q11814856 187 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 409 mapped (trace size budget); minor lanes are not drawn
- origin moved 188 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10426/17.03308) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; wet moat; sitelinks=4; wikidata:Q2327204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/moat-in-wroc-aw-q2327204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
