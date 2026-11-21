# Kingswear Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kingswear-castle-q2969487` |
| Coordinates | 50.34214, -3.55981 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.34214/-3.55981)) |
| Wikidata | [Q2969487](https://www.wikidata.org/wiki/Q2969487) (CC0) |
| Wikidata class | castle |
| Types | castle\|vacation rental |
| Administrative area | Kingswear |
| Inception | 1491 |
| Designations | Grade I listed building |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, road 7, water 2, coastline 1, building 10, zone 3).

Evidence: documented 0, mapped 24, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/527341425 historic=castle Q2969487 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":847,"medianInside":-2.3,"medianOutside":33.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.34214/-3.55981) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|vacation rental; sitelinks=9; wikidata:Q2969487 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/kingswear-castle-q2969487.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
