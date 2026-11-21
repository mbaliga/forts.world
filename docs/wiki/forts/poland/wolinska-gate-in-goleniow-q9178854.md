# Wolińska Gate in Goleniów

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wolinska-gate-in-goleniow-q9178854` |
| Coordinates | 53.56527, 14.82775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.56527/14.82775)) |
| Wikidata | [Q9178854](https://www.wikidata.org/wiki/Q9178854) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural heritage monument |
| Administrative area | Goleniów |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 1, road 321, waterway 2, building 132, wall 18, water 1, zone 11, retaining-wall 2).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 17, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568293758 historic=yes 220 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 132 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 321 mapped (trace size budget); minor lanes are not drawn
- origin moved 220 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.56527/14.82775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural heritage monument; sitelinks=4; wikidata:Q9178854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/wolinska-gate-in-goleniow-q9178854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
