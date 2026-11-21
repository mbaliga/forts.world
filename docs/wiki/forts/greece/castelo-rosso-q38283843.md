# Castelo Rosso

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-rosso-q38283843` |
| Coordinates | 38.0347, 24.43155 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.0347/24.43155)) |
| Wikidata | [Q38283843](https://www.wikidata.org/wiki/Q38283843) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Karystos Municipality |
| Inception | 1300 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, marker 1, road 14, wall 4, building 2, cliff 2, zone 4).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85620681 historic=castle Q38283843 16 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.0347/24.43155) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q38283843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/castelo-rosso-q38283843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
