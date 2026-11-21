# Fort Delgrès

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-delgres-q3077840` |
| Coordinates | 15.9886, -61.7231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.9886/-61.7231)) |
| Wikidata | [Q3077840](https://www.wikidata.org/wiki/Q3077840) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Basse-Terre |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 381 elements (outline 1, road 48, waterway 1, coastline 1, building 330).

Evidence: documented 0, mapped 381, inferred 0, derived 0; heights documented 1, inferred 0, unknown 329.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66442882 historic=castle Q3146075 428 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 429 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.9886/-61.7231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q3077840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 381 elements); data/traces/fort-delgres-q3077840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
