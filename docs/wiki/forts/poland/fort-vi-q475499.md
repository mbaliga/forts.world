# Fort VI

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vi-q475499` |
| Coordinates | 52.18408, 20.94648 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.18408/20.94648)) |
| Wikidata | [Q475499](https://www.wikidata.org/wiki/Q475499) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural heritage monument |
| Administrative area | Warsaw |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 3, road 234, zone 44, building 390, water 1, wall 3).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 106, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237004942 historic=fort Q475499 49 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 390 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 49 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.18408/20.94648) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural heritage monument; sitelinks=3; wikidata:Q475499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/fort-vi-q475499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
