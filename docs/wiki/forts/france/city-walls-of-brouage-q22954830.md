# City walls of Brouage

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-brouage-q22954830` |
| Coordinates | 45.86622, -1.06924 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.86622/-1.06924)) |
| Wikidata | [Q22954830](https://www.wikidata.org/wiki/Q22954830) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Hiers-Brouage |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 218 elements (outline 1, marker 2, road 86, building 374, wall 9, zone 8, retaining-wall 9, waterway 61, water 115).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 0, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1109609243 historic=castle 35 m from ledger point
- pruned to the outline plus 150 m: 665 -> 520 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 362 mapped (trace size budget); the rest of the town is not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.86622/-1.06924) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=2; wikidata:Q22954830 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 218 elements); data/traces/city-walls-of-brouage-q22954830.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
