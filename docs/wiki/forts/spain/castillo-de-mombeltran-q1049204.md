# Castillo de Mombeltrán

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-mombeltran-q1049204` |
| Coordinates | 40.25741, -5.01825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.25741/-5.01825)) |
| Wikidata | [Q1049204](https://www.wikidata.org/wiki/Q1049204) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mombeltrán |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 85 elements (outline 1, marker 1, road 47, waterway 2, building 31, wall 3).

Evidence: documented 0, mapped 85, inferred 0, derived 0; heights documented 20, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70180153 historic=castle 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.25741/-5.01825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1049204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 85 elements); data/traces/castillo-de-mombeltran-q1049204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
