# Rocca Roveresca

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-roveresca-q1650259` |
| Coordinates | 43.71526, 13.2204 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71526/13.2204)) |
| Wikidata | [Q1650259](https://www.wikidata.org/wiki/Q1650259) (CC0) |
| Wikidata class | fortification |
| Types | Italian national museum\|rocca\|historical park museum\|Museum of the Italian Ministry of Culture\|military museum building |
| Administrative area | Senigallia |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.roccasenigallia.it |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, road 169, coastline 1, building 119, water 1, zone 5, wall 2, waterway 1).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 22, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/22781491 historic=castle Q1650259 15 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71526/13.2204) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Italian national museum\|rocca\|historical park museum\|Museum of the Italian Ministry of Culture\|military museum building; sitelinks=4; wikidata:Q1650259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/rocca-roveresca-q1650259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
