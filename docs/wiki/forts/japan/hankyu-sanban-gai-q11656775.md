# Hankyu Sanban Gai

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hankyu-sanban-gai-q11656775` |
| Coordinates | 34.70464, 135.49856 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.70464/135.49856)) |
| Wikidata | [Q11656775](https://www.wikidata.org/wiki/Q11656775) (CC0) |
| Wikidata class | fortification |
| Types | shopping center\|underground city |
| Administrative area | Shibata |
| Inception | 1969 |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 4, road 123, building 498, zone 6, wall 2).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 73, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175438515 historic=yes 616 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- origin moved 617 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.70464/135.49856) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; shopping center\|underground city; sitelinks=3; wikidata:Q11656775 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/hankyu-sanban-gai-q11656775.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
