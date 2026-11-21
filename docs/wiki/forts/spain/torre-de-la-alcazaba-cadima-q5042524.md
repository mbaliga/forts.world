# Torre de la Alcazaba Cadima

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-alcazaba-cadima-q5042524` |
| Coordinates | 37.18167, -3.59444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.18167/-3.59444)) |
| Wikidata | [Q5042524](https://www.wikidata.org/wiki/Q5042524) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Granada |
| Inception | 1010 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 7, road 810, wall 92, building 1584, zone 11, retaining-wall 8, cliff 1, waterway 1).

Evidence: documented 0, mapped 392, inferred 0, derived 0; heights documented 120, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41337206 historic=citywalls 103 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1584 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 810 mapped (trace size budget); minor lanes are not drawn
- origin moved 103 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.18167/-3.59444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=4; wikidata:Q5042524 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/torre-de-la-alcazaba-cadima-q5042524.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
