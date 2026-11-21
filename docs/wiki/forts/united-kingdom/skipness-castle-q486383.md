# Skipness Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skipness-castle-q486383` |
| Coordinates | 55.768, -5.3364 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.768/-5.3364)) |
| Wikidata | [Q486383](https://www.wikidata.org/wiki/Q486383) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/skipness-castle-and-chapel/ |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, coastline 1, waterway 1, road 9, building 3, wall 3).

Evidence: documented 0, mapped 18, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243856789 historic=castle Q486383 9 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.768/-5.3364) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=11; wikidata:Q486383 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/skipness-castle-q486383.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
