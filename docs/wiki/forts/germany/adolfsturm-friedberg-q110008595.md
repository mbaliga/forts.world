# Adolfsturm Friedberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `adolfsturm-friedberg-q110008595` |
| Coordinates | 50.34274, 8.75304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.34274/8.75304)) |
| Wikidata | [Q110008595](https://www.wikidata.org/wiki/Q110008595) (CC0) |
| Wikidata class | fortification |
| Types | Bergfried |
| Administrative area | Friedberg |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 7, road 285, waterway 12, wall 31, building 620, zone 16, retaining-wall 37).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 30, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111644133 historic=castle 109 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 620 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 108 m from the ledger point to the centre of the mapped site
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.34274/8.75304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Bergfried; sitelinks=1; wikidata:Q110008595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/adolfsturm-friedberg-q110008595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
