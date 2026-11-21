# Gongsanseong

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gongsanseong-q12584692` |
| Coordinates | 36.46194, 127.12722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.46194/127.12722)) |
| Wikidata | [Q12584692](https://www.wikidata.org/wiki/Q12584692) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Designations | part of UNESCO World Heritage Site\|Historic sites of South Korea |
| UNESCO WHC id | 1477-001 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | https://whc.unesco.org/en/list/1477 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, marker 2, road 100, waterway 2, building 30, water 2, zone 10).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 1, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157482752 historic=castle Q12584692 100 m from ledger point
- origin moved 99 m from the ledger point to the outline centroid
- 54 DEM cells below -3 m (bathymetry) clamped to -3 m
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.46194/127.12722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q12584692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/gongsanseong-q12584692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
