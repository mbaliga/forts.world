# Nassenfels Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nassenfels-castle-q877971` |
| Coordinates | 48.79607, 11.22917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.79607/11.22917)) |
| Wikidata | [Q877971](https://www.wikidata.org/wiki/Q877971) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Nassenfels |
| Inception | 1245 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 120 elements (outline 1, road 29, waterway 12, building 56, wall 6, zone 15, water 1).

Evidence: documented 0, mapped 120, inferred 0, derived 0; heights documented 15, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/316146555 historic=castle Q877971 13 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.79607/11.22917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=5; wikidata:Q877971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 120 elements); data/traces/nassenfels-castle-q877971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
