# Torre de defensa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-defensa-q28712429` |
| Coordinates | 41.64821, 1.14007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.64821/1.14007)) |
| Wikidata | [Q28712429](https://www.wikidata.org/wiki/Q28712429) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Tàrrega |
| Designations | Cultural Asset part of the cultural heritage of Catalonia |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 2, road 113, wall 16, retaining-wall 2, building 389, waterway 1).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 120, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/163000645 historic=ruins 444 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- origin moved 446 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.64821/1.14007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q28712429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/torre-de-defensa-q28712429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
