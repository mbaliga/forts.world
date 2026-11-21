# Făgăraș Citadel

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fagaras-citadel-q1002426` |
| Coordinates | 45.84525, 24.97386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.84525/24.97386)) |
| Wikidata | [Q1002426](https://www.wikidata.org/wiki/Q1002426) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Brașov County |
| Designations | Historic Monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |
| OSM `website` | http://muzeufagaras.ro/cetatea_fagarasului.html |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 2, road 147, zone 13, waterway 2, building 234).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 9, inferred 0, unknown 226.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74301876 historic=castle Q1002426 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 8343 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.84525/24.97386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=11; wikidata:Q1002426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/fagaras-citadel-q1002426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
