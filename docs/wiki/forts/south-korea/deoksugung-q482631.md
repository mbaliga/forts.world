# Deoksugung

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `deoksugung-q482631` |
| Coordinates | 37.56613, 126.97505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.56613/126.97505)) |
| Wikidata | [Q482631](https://www.wikidata.org/wiki/Q482631) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Seoul |
| Designations | Historic sites of South Korea |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 5, road 193, building 270, wall 12, zone 41, water 1, retaining-wall 6).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 12, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26658458 historic=castle Q482631 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 270 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid
- 59 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.56613/126.97505) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=32; wikidata:Q482631 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/deoksugung-q482631.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
