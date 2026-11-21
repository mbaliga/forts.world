# Fort de Bellegarde

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-bellegarde-q3028584` |
| Coordinates | 42.45861, 2.85917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.45861/2.85917)) |
| Wikidata | [Q3028584](https://www.wikidata.org/wiki/Q3028584) (CC0) |
| Wikidata class | fort |
| Types | military museum\|fort |
| Administrative area | Le Perthus |
| Designations | classified historical monument |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Redoute isolée de Panissars |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, marker 3, zone 1, water 1, road 24, wall 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 1, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64608902 historic=fort Q3028584 502 m from ledger point
- origin moved 502 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.45861/2.85917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military museum\|fort; sitelinks=9; wikidata:Q3028584 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/fort-de-bellegarde-q3028584.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
