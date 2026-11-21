# Skoczów Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skoczow-castle-q9386737` |
| Coordinates | 49.8021, 18.7889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.8021/18.7889)) |
| Wikidata | [Q9386737](https://www.wikidata.org/wiki/Q9386737) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Skoczów |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 290 elements (outline 1, marker 6, road 223, building 222, zone 10, waterway 2, water 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243905345 historic=yes 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 222 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.8021/18.7889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q9386737 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 290 elements); data/traces/skoczow-castle-q9386737.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
