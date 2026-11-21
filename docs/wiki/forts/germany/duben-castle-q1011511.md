# Düben Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duben-castle-q1011511` |
| Coordinates | 51.5921, 12.5805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5921/12.5805)) |
| Wikidata | [Q1011511](https://www.wikidata.org/wiki/Q1011511) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage ensemble |
| Administrative area | Bad Düben |
| Inception | 1000 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 204 elements (outline 1, marker 1, road 80, waterway 1, zone 1, building 399).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 2, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/477487964 historic=castle Q49465241 287 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 399 mapped (trace size budget); the rest of the town is not drawn
- origin moved 287 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5921/12.5805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage ensemble; sitelinks=3; wikidata:Q1011511 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 204 elements); data/traces/duben-castle-q1011511.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
