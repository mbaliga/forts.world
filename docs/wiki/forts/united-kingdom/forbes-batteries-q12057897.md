# Forbes' Batteries

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forbes-batteries-q12057897` |
| Coordinates | 36.14708, -5.34678 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.14708/-5.34678)) |
| Wikidata | [Q12057897](https://www.wikidata.org/wiki/Q12057897) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Gibraltar |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, marker 11, road 44, cliff 3, zone 3, building 87, coastline 1, retaining-wall 18, wall 4).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 13, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/672708050 historic=fort Q12057520 205 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 205 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.14708/-5.34678) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q12057897 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/forbes-batteries-q12057897.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
