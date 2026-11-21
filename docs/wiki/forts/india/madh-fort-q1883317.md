# Madh Fort

> India · Mumbai Suburban district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `madh-fort-q1883317` |
| Coordinates | 19.132283, 72.794786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.132283/72.794786)) |
| Wikidata | [Q1883317](https://www.wikidata.org/wiki/Q1883317) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Mumbai Suburban district |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 7 |
| Programme catalogue | confidence high, significance rank 3250; sources wikidata:Q1883317;smith-newton:r177 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, marker 1, coastline 1, road 10, zone 1, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6417294 historic=fort Q1883317 19 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":643,"medianInside":1.5,"medianOutside":13.1}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.132283/72.794786) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=3250; sources=2 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/madh-fort-q1883317.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
