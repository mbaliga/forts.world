# Paphos Castle

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paphos-castle-q2505824` |
| Coordinates | 34.75367, 32.40696 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.75367/32.40696)) |
| Wikidata | [Q2505824](https://www.wikidata.org/wiki/Q2505824) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Paphos |
| Wikipedia language editions | 24 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, water 3, building 12, road 22, coastline 2, wall 1, zone 1).

Evidence: documented 0, mapped 42, inferred 0, derived 2; heights documented 3, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8052789 historic=castle Q2505824 8 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":197,"medianInside":0,"medianOutside":2.5}
- sea-1: DEM check ok {"cells":77,"medianInside":0,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.75367/32.40696) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=24; wikidata:Q2505824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 42 elements); data/traces/paphos-castle-q2505824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
