# Groenestein (Groningen)

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `groenestein-groningen-q2329102` |
| Coordinates | 53.20078, 6.58802 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.20078/6.58802)) |
| Wikidata | [Q2329102](https://www.wikidata.org/wiki/Q2329102) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|mansion |
| Administrative area | Groningen |
| Inception | 1685 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 243 elements (outline 1, road 81, building 333, waterway 1, zone 35, water 5).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 2, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47510178 historic=castle Q2329102 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.20078/6.58802) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|mansion; sitelinks=2; wikidata:Q2329102 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 243 elements); data/traces/groenestein-groningen-q2329102.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
