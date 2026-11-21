# Fort of Pessegueiro Island

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-pessegueiro-island-q5472489` |
| Coordinates | 37.83345, -8.79764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.83345/-8.79764)) |
| Wikidata | [Q5472489](https://www.wikidata.org/wiki/Q5472489) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Porto Covo |
| Inception | 1590 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `fortification_type` | sea_fort |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 8 elements (outline 1, coastline 2, cliff 1, zone 3).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/187999924 historic=fort Q5472489 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.83345/-8.79764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q5472489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 8 elements); data/traces/fort-of-pessegueiro-island-q5472489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
