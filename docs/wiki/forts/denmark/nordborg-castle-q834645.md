# Nordborg Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nordborg-castle-q834645` |
| Coordinates | 55.05907, 9.74877 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.05907/9.74877)) |
| Wikidata | [Q834645](https://www.wikidata.org/wiki/Q834645) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Sønderborg Municipality |
| Inception | 1150 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, road 64, building 100, zone 2, wall 1, water 1, waterway 1).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 3, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96612520 historic=castle Q834645 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.05907/9.74877) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=7; wikidata:Q834645 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 170 elements); data/traces/nordborg-castle-q834645.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
