# Charlton House

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `charlton-house-q3656999` |
| Coordinates | 51.48068, 0.03714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.48068/0.03714)) |
| Wikidata | [Q3656999](https://www.wikidata.org/wiki/Q3656999) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|former hospital |
| Administrative area | Royal Borough of Greenwich |
| Designations | Grade I listed building |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 1, road 157, building 215, zone 14, wall 13).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 3, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162578773 historic=castle Q3656999 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.48068/0.03714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|former hospital; sitelinks=9; wikidata:Q3656999 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/charlton-house-q3656999.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
