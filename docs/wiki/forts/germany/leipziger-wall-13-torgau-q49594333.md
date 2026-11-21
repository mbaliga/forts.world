# Leipziger Wall 13 Torgau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leipziger-wall-13-torgau-q49594333` |
| Coordinates | 51.55662, 12.99937 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55662/12.99937)) |
| Wikidata | [Q49594333](https://www.wikidata.org/wiki/Q49594333) (CC0) |
| Wikidata class | fort |
| Types | fortification\|cultural heritage ensemble\|historic building |
| Administrative area | Torgau |
| Inception | 1836 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `heritage` | 4 |
| OSM `description` | Kasino und Anstieg des Walls der Bastion IV der Festung Torgau |

## What the model contains

Tier **T1**, status `outline+walls`, 124 elements (outline 1, marker 1, road 76, building 252, wall 30, waterway 1, zone 6).

Evidence: documented 0, mapped 124, inferred 0, derived 0; heights documented 3, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/19206131 historic=(none; chosen by its Wikidata id) Q49594333 5 m from ledger point
- pruned to the outline plus 150 m: 367 -> 207 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55662/12.99937) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|cultural heritage ensemble\|historic building; sitelinks=1; wikidata:Q49594333 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 319 elements); data/traces/leipziger-wall-13-torgau-q49594333.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 124 elements; outline osm:way/19206131 historic=(none; chosen by its Wikidata id) Q49594333 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
