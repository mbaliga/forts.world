# Neue Residenz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neue-residenz-q1979721` |
| Coordinates | 51.48356, 11.96433 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48356/11.96433)) |
| Wikidata | [Q1979721](https://www.wikidata.org/wiki/Q1979721) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|architectural ensemble |
| Administrative area | Halle (Saale) |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 15, road 231, building 243, water 1, waterway 2, wall 8, retaining-wall 1, zone 4).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 83, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5172317 historic=castle Q1979721 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 243 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 39 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48356/11.96433) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|architectural ensemble; sitelinks=2; wikidata:Q1979721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/neue-residenz-q1979721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
