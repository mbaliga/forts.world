# Guérande city walls

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `guerande-city-walls-q3424617` |
| Coordinates | 47.3273, -2.42709 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3273/-2.42709)) |
| Wikidata | [Q3424617](https://www.wikidata.org/wiki/Q3424617) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Guérande |
| Inception | 1301 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 4, road 155, zone 7, building 612, water 3, wall 15).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 7, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71794829 historic=citywalls 112 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 612 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 112 m from the ledger point to the centre of the mapped site
- 38 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3273/-2.42709) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/guerande-city-walls-q3424617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
