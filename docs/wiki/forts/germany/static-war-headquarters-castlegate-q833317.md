# Static War Headquarters Castlegate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `static-war-headquarters-castlegate-q833317` |
| Coordinates | 50.98944, 6.29556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.98944/6.29556)) |
| Wikidata | [Q833317](https://www.wikidata.org/wiki/Q833317) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Linnich |
| Wikipedia language editions | 4 |
| OSM `barrier` | fence |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 1, road 38, zone 25, building 126, waterway 1, wall 23).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24908830 historic=(none; chosen by its Wikidata id) Q833317 69 m from ledger point
- origin moved 72 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.98944/6.29556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=4; wikidata:Q833317 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 74 elements); data/traces/static-war-headquarters-castlegate-q833317.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 215 elements; outline osm:way/24908830 historic=(none; chosen by its Wikidata id) Q833317 69 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
