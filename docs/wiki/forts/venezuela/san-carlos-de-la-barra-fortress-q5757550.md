# San Carlos de la Barra Fortress

> Venezuela · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-carlos-de-la-barra-fortress-q5757550` |
| Coordinates | 10.98644, -71.60762 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.98644/-71.60762)) |
| Wikidata | [Q5757550](https://www.wikidata.org/wiki/Q5757550) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Municipio Almirante Padilla |
| Designations | National historical monument of Venezuela |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, coastline 5, building 1, retaining-wall 1, road 6, wall 7, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307241974 historic=castle Q5757550 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":355,"medianInside":0.4,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.98644/-71.60762) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q5757550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/san-carlos-de-la-barra-fortress-q5757550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/venezuela.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
