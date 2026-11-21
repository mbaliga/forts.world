# City walls of Funchal (Rua Major Reis Gomes)

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-funchal-rua-major-reis-gomes-q99535477` |
| Coordinates | 32.64791, -16.91333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64791/-16.91333)) |
| Wikidata | [Q99535477](https://www.wikidata.org/wiki/Q99535477) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|city walls |
| Administrative area | Sé |
| Inception | 1600 |
| Designations | Immovable Cultural Heritage of Municipal Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 5, road 435, waterway 7, building 314, water 7, retaining-wall 8, wall 4, zone 10).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 98, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1571895536 historic=citywalls 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 314 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 435 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64791/-16.91333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|city walls; sitelinks=1; wikidata:Q99535477 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/city-walls-of-funchal-rua-major-reis-gomes-q99535477.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
