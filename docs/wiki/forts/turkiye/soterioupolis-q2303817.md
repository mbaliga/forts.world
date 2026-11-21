# Soterioupolis

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `soterioupolis-q2303817` |
| Coordinates | 43.16667, 40.33333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.16667/40.33333)) |
| Wikidata | [Q2303817](https://www.wikidata.org/wiki/Q2303817) (CC0) |
| Wikidata class | fort |
| Types | titular see\|fort |
| Inception | 1929 |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 116 elements (outline 1, road 45, waterway 11, building 42, water 4, zone 13).

Evidence: documented 0, mapped 116, inferred 0, derived 0; heights documented 14, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/753722785 historic=archaeological_site Q211318 709 m from ledger point
- origin moved 706 m from the ledger point to the outline centroid
- 532 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.16667/40.33333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; titular see\|fort; sitelinks=6; wikidata:Q2303817 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 116 elements); data/traces/soterioupolis-q2303817.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
