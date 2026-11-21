# Fortezza Nuova

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-nuova-q3748709` |
| Coordinates | 43.55407, 10.31161 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.55407/10.31161)) |
| Wikidata | [Q3748709](https://www.wikidata.org/wiki/Q3748709) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Livorno |
| Inception | 1590 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, marker 15, road 299, waterway 8, zone 15, building 164, water 8, wall 20).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 21, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5741468 historic=castle Q3748709 72 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 164 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 299 mapped (trace size budget); minor lanes are not drawn
- origin moved 72 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.55407/10.31161) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748709 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/fortezza-nuova-q3748709.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
