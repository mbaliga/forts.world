# Wachturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-q98495875` |
| Coordinates | 49.72525, 10.00087 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.72525/10.00087)) |
| Wikidata | [Q98495875](https://www.wikidata.org/wiki/Q98495875) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Eibelstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 6, road 90, waterway 2, wall 9, building 359, zone 5).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 5, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384305114 historic=tower Q98495875 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.72525/10.00087) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98495875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 232 elements); data/traces/wachturm-q98495875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 233 elements; outline osm:way/384305114 historic=tower Q98495875 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
