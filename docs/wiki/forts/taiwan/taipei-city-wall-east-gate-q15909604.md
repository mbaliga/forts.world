# Taipei City Wall-East Gate

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taipei-city-wall-east-gate-q15909604` |
| Coordinates | 25.03902, 121.51766 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.03902/121.51766)) |
| Wikidata | [Q15909604](https://www.wikidata.org/wiki/Q15909604) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|cultural heritage |
| Administrative area | Taipei |
| Designations | country-level monument |
| Wikipedia language editions | 5 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 1, road 201, wall 16, building 42, zone 4, water 1).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 27, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192642999 historic=building Q10927230 122 m from ledger point
- origin moved 122 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.03902/121.51766) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|cultural heritage; sitelinks=5; wikidata:Q15909604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/taipei-city-wall-east-gate-q15909604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
