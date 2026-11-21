# Arles Roman City Walls

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arles-roman-city-walls-q21293199` |
| Coordinates | 43.67853, 4.62443 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67853/4.62443)) |
| Wikidata | [Q21293199](https://www.wikidata.org/wiki/Q21293199) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|rampart |
| Administrative area | Arles |
| Designations | classified historical monument\|monument historique inscrit |
| UNESCO WHC id | 164-005 |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 1, road 146, building 274, waterway 2, zone 9, wall 19, retaining-wall 19).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 64, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/540518205 historic=citywalls 592 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- origin moved 590 m from the ledger point to the centre of the mapped site
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67853/4.62443) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|rampart; sitelinks=3; wikidata:Q21293199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/arles-roman-city-walls-q21293199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
