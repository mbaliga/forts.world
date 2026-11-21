# House Bloemendal

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `house-bloemendal-q1645763` |
| Coordinates | 50.77284, 6.01314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.77284/6.01314)) |
| Wikidata | [Q1645763](https://www.wikidata.org/wiki/Q1645763) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château\|architectural ensemble\|mansion |
| Administrative area | Vaals |
| Inception | 1992 |
| Designations | Rijksmonument complex |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, road 167, zone 12, waterway 1, building 340, wall 3, water 2).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/274187069 historic=castle Q1645763 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 340 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.77284/6.01314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château\|architectural ensemble\|mansion; sitelinks=4; wikidata:Q1645763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/house-bloemendal-q1645763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
