# Fort Saint-Privat

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-privat-q32614` |
| Coordinates | 49.08194, 6.1425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.08194/6.1425)) |
| Wikidata | [Q32614](https://www.wikidata.org/wiki/Q32614) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Inception | 1872 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, road 95, building 58, wall 1, zone 2, water 2).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 1, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238878183 historic=fort Q32614 44 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.08194/6.1425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=4; wikidata:Q32614 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 159 elements); data/traces/fort-saint-privat-q32614.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
