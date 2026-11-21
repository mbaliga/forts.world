# Naniwa Palace

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `naniwa-palace-q3608523` |
| Coordinates | 34.68065, 135.52328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.68065/135.52328)) |
| Wikidata | [Q3608523](https://www.wikidata.org/wiki/Q3608523) (CC0) |
| Wikidata class | fortification |
| Types | palace\|historic site\|capital city wall |
| Administrative area | Chūō-ku |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 45, road 267, building 61, water 6, zone 116, retaining-wall 34, wall 14).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 29, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1550234049 historic=castle Q321242 662 m from ledger point
- pruned to the outline plus 150 m: 544 -> 532 elements
- roads capped: kept the 80 longest of 262 mapped (trace size budget); minor lanes are not drawn
- origin moved 655 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.68065/135.52328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; palace\|historic site\|capital city wall; sitelinks=3; wikidata:Q3608523 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/naniwa-palace-q3608523.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
