# Stadtbefestigung Klagenfurt

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-klagenfurt-q1029696` |
| Coordinates | 46.6222, 14.3042 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.6222/14.3042)) |
| Wikidata | [Q1029696](https://www.wikidata.org/wiki/Q1029696) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Klagenfurt am Wörthersee |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 10, road 276, building 87, zone 17, water 4, wall 6, retaining-wall 5).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 36, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1676103 historic=building Q16855528 402 m from ledger point
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 397 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.6222/14.3042) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=2; wikidata:Q1029696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/stadtbefestigung-klagenfurt-q1029696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
