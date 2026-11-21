# Fort Louis

> India · Puducherry · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-louis-sn3704` |
| Coordinates | 11.933409, 79.834085 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.933409/79.834085)) |
| Wikidata | [Q2041719](https://www.wikidata.org/wiki/Q2041719) (CC0) |
| Programme catalogue | confidence medium, significance rank 5635; sources smith-newton:r3704 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, marker 1, road 28, building 110, wall 8, coastline 1, waterway 1, water 1).

Evidence: documented 0, mapped 151, inferred 0, derived 1; heights documented 1, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/326887543 historic=monument Q2041719 372 m from ledger point
- origin moved 371 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":181,"medianInside":4,"medianOutside":10.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.933409/79.834085) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5635; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 151 elements); data/traces/fort-louis-sn3704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
