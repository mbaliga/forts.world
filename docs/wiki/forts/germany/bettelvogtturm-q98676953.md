# Bettelvogtturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bettelvogtturm-q98676953` |
| Coordinates | 49.1065, 11.44182 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1065/11.44182)) |
| Wikidata | [Q98676953](https://www.wikidata.org/wiki/Q98676953) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 3, road 150, wall 20, building 356, waterway 9, zone 32, retaining-wall 1, water 1).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 2, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211939651 historic=citywalls Q98676953 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 53 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1065/11.44182) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98676953 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/bettelvogtturm-q98676953.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
