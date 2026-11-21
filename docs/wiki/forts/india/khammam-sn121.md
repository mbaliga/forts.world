# Khammam

> India · Telangana · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `khammam-sn121` |
| Coordinates | 17.24506, 80.146756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.24506/80.146756)) |
| Wikidata | [Q6399985](https://www.wikidata.org/wiki/Q6399985) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Khammam |
| Wikipedia language editions | 4 |
| Programme catalogue | confidence medium, significance rank 6395; sources smith-newton:r121 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 5, road 155, building 927, water 4, wall 6, zone 1).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50090712 historic=fort Q6399985 90 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 927 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 85 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.24506/80.146756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6395; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/khammam-sn121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
