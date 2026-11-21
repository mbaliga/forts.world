# Kutahya Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kutahya-castle-q6022256` |
| Coordinates | 39.41947, 29.96967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.41947/29.96967)) |
| Wikidata | [Q6022256](https://www.wikidata.org/wiki/Q6022256) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kütahya |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, road 42, zone 1, building 9, wall 2).

Evidence: documented 0, mapped 55, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192214684 historic=castle 148 m from ledger point
- origin moved 145 m from the ledger point to the outline centroid
- 2405 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.41947/29.96967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q6022256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/kutahya-castle-q6022256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
