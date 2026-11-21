# Wolseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wolseong-q471292` |
| Coordinates | 35.83131, 129.22334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.83131/129.22334)) |
| Wikidata | [Q471292](https://www.wikidata.org/wiki/Q471292) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site |
| Administrative area | North Gyeongsang |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 8 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 10, road 144, wall 5, waterway 12, zone 31, building 94, water 7).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 1, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42437237 historic=archaeological_site 95 m from ledger point
- origin moved 96 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.83131/129.22334) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site; sitelinks=8; wikidata:Q471292 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/wolseong-q471292.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
