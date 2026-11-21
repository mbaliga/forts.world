# Figline city walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `figline-city-walls-q66738039` |
| Coordinates | 43.6176, 11.47082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.6176/11.47082)) |
| Wikidata | [Q66738039](https://www.wikidata.org/wiki/Q66738039) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Figline e Incisa Valdarno |
| Inception | 1356 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 371 elements (outline 1, marker 1, road 99, wall 5, zone 2, building 262, waterway 1).

Evidence: documented 0, mapped 371, inferred 0, derived 0; heights documented 1, inferred 0, unknown 266.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/518551083 historic=building 166 m from ledger point
- origin moved 166 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.6176/11.47082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q66738039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/figline-city-walls-q66738039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
