# Steintor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steintor-q2341716` |
| Coordinates | 54.0866, 12.1409 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.0866/12.1409)) |
| Wikidata | [Q2341716](https://www.wikidata.org/wiki/Q2341716) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Stadtmitte |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 4, road 406, wall 21, waterway 3, building 183, zone 16, retaining-wall 11).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 100, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34479639 historic=yes 97 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 406 mapped (trace size budget); minor lanes are not drawn
- origin moved 97 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.0866/12.1409) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q2341716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/steintor-q2341716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
