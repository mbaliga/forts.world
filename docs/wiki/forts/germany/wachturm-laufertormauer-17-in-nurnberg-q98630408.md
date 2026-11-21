# Wachturm Laufertormauer 17 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-laufertormauer-17-in-nurnberg-q98630408` |
| Coordinates | 49.45377, 11.08651 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45377/11.08651)) |
| Wikidata | [Q98630408](https://www.wikidata.org/wiki/Q98630408) (CC0) |
| Wikidata class | fortification |
| Types | gate\|watchtower |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 17, road 220, waterway 5, zone 6, water 2, wall 29, building 118, retaining-wall 4).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 109, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32566401 historic=citywalls 1 m from ledger point
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45377/11.08651) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|watchtower; sitelinks=2; wikidata:Q98630408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/wachturm-laufertormauer-17-in-nurnberg-q98630408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
