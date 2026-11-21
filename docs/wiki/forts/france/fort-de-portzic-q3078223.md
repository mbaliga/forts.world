# Fort de Portzic

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-portzic-q3078223` |
| Coordinates | 48.35861, -4.53556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.35861/-4.53556)) |
| Wikidata | [Q3078223](https://www.wikidata.org/wiki/Q3078223) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Brest |
| Inception | 1693 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 113 elements (outline 1, marker 3, road 44, building 43, zone 12, coastline 2, retaining-wall 7, water 1).

Evidence: documented 0, mapped 113, inferred 0, derived 1; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/22727428 historic=fort Q3078223 267 m from ledger point
- origin moved 267 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":694,"medianInside":0,"medianOutside":53.8}
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.35861/-4.53556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078223 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 113 elements); data/traces/fort-de-portzic-q3078223.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
