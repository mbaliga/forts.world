# Deshengmen

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `deshengmen-q1200624` |
| Coordinates | 39.94846, 116.37337 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.94846/116.37337)) |
| Wikidata | [Q1200624](https://www.wikidata.org/wiki/Q1200624) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Desheng Subdistrict |
| Designations | Major Historical and Cultural Site Protected at the National Level |
| Wikipedia language editions | 16 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 163 elements (outline 1, road 144, waterway 1, building 14, water 1, wall 2).

Evidence: documented 0, mapped 163, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26514845 historic=yes Q1200624 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.94846/116.37337) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=16; wikidata:Q1200624 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 163 elements); data/traces/deshengmen-q1200624.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
