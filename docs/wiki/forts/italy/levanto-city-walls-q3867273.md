# Levanto city walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `levanto-city-walls-q3867273` |
| Coordinates | 44.16991, 9.61204 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.16991/9.61204)) |
| Wikidata | [Q3867273](https://www.wikidata.org/wiki/Q3867273) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Levanto |
| Inception | 1265 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 1, road 110, building 149, waterway 7, wall 7, coastline 1, zone 4, retaining-wall 6, water 1).

Evidence: documented 0, mapped 287, inferred 0, derived 1; heights documented 4, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160089242 historic=castle Q3662657 405 m from ledger point
- origin moved 404 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":85,"medianInside":0,"medianOutside":16.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.16991/9.61204) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=3; wikidata:Q3867273 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/levanto-city-walls-q3867273.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
