# Erenstein Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `erenstein-castle-q1735307` |
| Coordinates | 50.87141, 6.05473 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.87141/6.05473)) |
| Wikidata | [Q1735307](https://www.wikidata.org/wiki/Q1735307) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Kerkrade |
| Inception | 1900 |
| Designations | Rijksmonument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, road 90, zone 56, water 8, waterway 6, building 11, wall 1).

Evidence: documented 0, mapped 173, inferred 0, derived 0; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/283237834 historic=castle Q1735307 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.87141/6.05473) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q1735307 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/erenstein-castle-q1735307.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
