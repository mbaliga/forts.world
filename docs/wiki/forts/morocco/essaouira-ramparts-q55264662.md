# Essaouira Ramparts

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `essaouira-ramparts-q55264662` |
| Coordinates | 31.51419, -9.77169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.51419/-9.77169)) |
| Wikidata | [Q55264662](https://www.wikidata.org/wiki/Q55264662) (CC0) |
| Wikidata class | fortification |
| Types | city walls\|cultural heritage\|old town\|urban area |
| Administrative area | Essaouira |
| Designations | Moroccan cultural heritage\|part of UNESCO World Heritage Site\|Heritage of Portuguese Influence |
| UNESCO WHC id | 753-001 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 124 elements (outline 1, marker 1, road 84, wall 9, coastline 3, zone 1, building 23, water 2).

Evidence: documented 0, mapped 124, inferred 0, derived 2; heights documented 3, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/156025473 historic=castle 69 m from ledger point
- origin moved 69 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":6,"medianInside":2.3,"medianOutside":2.2}
- sea-1: DEM check ok {"cells":181,"medianInside":1.5,"medianOutside":8.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.51419/-9.77169) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls\|cultural heritage\|old town\|urban area; sitelinks=1; wikidata:Q55264662 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 124 elements); data/traces/essaouira-ramparts-q55264662.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
