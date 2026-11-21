# Redoute de Gravelle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoute-de-gravelle-q3422936` |
| Coordinates | 48.81889, 2.45444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.81889/2.45444)) |
| Wikidata | [Q3422936](https://www.wikidata.org/wiki/Q3422936) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | 12th arrondissement of Paris |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, road 133, water 4, zone 31, waterway 14, building 101, wall 4).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 0, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/90545645 historic=castle Q2945490 45 m from ledger point
- origin moved 44 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.81889/2.45444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=4; wikidata:Q3422936 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/redoute-de-gravelle-q3422936.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
