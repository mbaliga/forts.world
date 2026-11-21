# Zenobito Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zenobito-tower-q3995518` |
| Coordinates | 43.00356, 9.81104 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.00356/9.81104)) |
| Wikidata | [Q3995518](https://www.wikidata.org/wiki/Q3995518) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Capraia Isola |
| Inception | 1545 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, road 2, zone 1, cliff 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97550108 historic=ruins Q3995518 50 m from ledger point
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":270,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.00356/9.81104) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=4; wikidata:Q3995518 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/zenobito-tower-q3995518.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
