# Kasteel De Thooren

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasteel-de-thooren-q17439656` |
| Coordinates | 51.19594, 6.01115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.19594/6.01115)) |
| Wikidata | [Q17439656](https://www.wikidata.org/wiki/Q17439656) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Roermond |
| Inception | 1400 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 218 elements (outline 1, road 58, zone 29, building 367, waterway 9, water 1).

Evidence: documented 0, mapped 218, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/290021928 historic=castle Q17439656 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.19594/6.01115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q17439656 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 218 elements); data/traces/kasteel-de-thooren-q17439656.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
