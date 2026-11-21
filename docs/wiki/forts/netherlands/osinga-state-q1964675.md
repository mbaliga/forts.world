# Osinga State

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `osinga-state-q1964675` |
| Coordinates | 52.95838, 5.72105 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.95838/5.72105)) |
| Wikidata | [Q1964675](https://www.wikidata.org/wiki/Q1964675) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|city hall |
| Administrative area | Skarsterlân |
| Inception | 1940 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline-only`, 205 elements (outline 1, road 54, zone 16, water 11, waterway 3, building 323).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/291133002 historic=castle Q1964675 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.95838/5.72105) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|city hall; sitelinks=3; wikidata:Q1964675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 205 elements); data/traces/osinga-state-q1964675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
