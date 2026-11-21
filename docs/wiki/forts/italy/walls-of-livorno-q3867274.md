# Walls of Livorno

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-livorno-q3867274` |
| Coordinates | 43.56052, 10.31518 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.56052/10.31518)) |
| Wikidata | [Q3867274](https://www.wikidata.org/wiki/Q3867274) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Livorno |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 3, road 78, building 63, waterway 1, water 2, zone 3, wall 1).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5741468 historic=castle Q3748709 763 m from ledger point
- origin moved 763 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.56052/10.31518) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q3867274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/walls-of-livorno-q3867274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
