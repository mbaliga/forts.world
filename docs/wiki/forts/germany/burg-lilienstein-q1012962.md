# Burg Lilienstein

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-lilienstein-q1012962` |
| Coordinates | 50.93046, 14.08333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.93046/14.08333)) |
| Wikidata | [Q1012962](https://www.wikidata.org/wiki/Q1012962) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bad Schandau |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 2, road 80, building 4, cliff 259, zone 631, wall 6, pit 1).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 3, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- roads capped: kept the 40 longest of 80 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 943 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.93046/14.08333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q1012962 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/burg-lilienstein-q1012962.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
