# Malay Heritage Centre

> Singapore · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `malay-heritage-centre-q6741538` |
| Coordinates | 1.30289, 103.85982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/1.30289/103.85982)) |
| Wikidata | [Q6741538](https://www.wikidata.org/wiki/Q6741538) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|heritage centre\|history museum |
| Administrative area | Kampong Glam |
| Inception | 2004 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://malayheritage.org.sg/ |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, road 255, zone 3, building 511, waterway 1, water 1, wall 2).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 2, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/155990073 historic=castle Q6741538 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 511 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/1.30289/103.85982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|heritage centre\|history museum; sitelinks=8; wikidata:Q6741538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/malay-heritage-centre-q6741538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/singapore.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
