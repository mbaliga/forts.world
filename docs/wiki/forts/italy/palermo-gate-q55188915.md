# Palermo Gate

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palermo-gate-q55188915` |
| Coordinates | 37.5106, 13.07965 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.5106/13.07965)) |
| Wikidata | [Q55188915](https://www.wikidata.org/wiki/Q55188915) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sciacca |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 338 elements (outline 1, road 116, coastline 1, building 653, wall 86, retaining-wall 12, zone 2).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 0, inferred 0, unknown 218.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353714428 historic=castle 260 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 653 mapped (trace size budget); the rest of the town is not drawn
- origin moved 260 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.5106/13.07965) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q55188915 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 338 elements); data/traces/palermo-gate-q55188915.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
