# Castle defensive walls, Olsztyn

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-defensive-walls-olsztyn-q122264616` |
| Coordinates | 53.77792, 20.47446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.77792/20.47446)) |
| Wikidata | [Q122264616](https://www.wikidata.org/wiki/Q122264616) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Olsztyn |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 9, road 412, waterway 6, building 151, wall 20, zone 37, retaining-wall 2, water 3).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 39, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104285296 historic=castle Q9386527 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 412 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.77792/20.47446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q122264616 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/castle-defensive-walls-olsztyn-q122264616.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
