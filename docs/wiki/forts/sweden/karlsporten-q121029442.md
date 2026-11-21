# Karlsporten

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karlsporten-q121029442` |
| Coordinates | 57.70266, 11.95652 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.70266/11.95652)) |
| Wikidata | [Q121029442](https://www.wikidata.org/wiki/Q121029442) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `website` | https://kronhuset.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 119 elements (outline 1, road 72, building 37, waterway 3, zone 1, wall 3, retaining-wall 1, cliff 1).

Evidence: documented 0, mapped 119, inferred 0, derived 0; heights documented 11, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44697495 historic=building Q4572534 714 m from ledger point
- origin moved 716 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.70266/11.95652) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q121029442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 119 elements); data/traces/karlsporten-q121029442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
