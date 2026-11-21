# Cité de Carcassonne

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cite-de-carcassonne-q389269` |
| Coordinates | 43.20644, 2.36379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.20644/2.36379)) |
| Wikidata | [Q389269](https://www.wikidata.org/wiki/Q389269) (CC0) |
| Wikidata class | fort |
| Types | citadel\|fortress\|fortified town |
| Administrative area | Carcassonne |
| Designations | classified historical monument\|World Heritage Site |
| UNESCO WHC id | 345rev |
| Wikipedia language editions | 38 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 308 elements (marker 7, road 321, building 1408, zone 11, retaining-wall 9, wall 8, waterway 3).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 13, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2734040 historic=castle Q389269 2 m from ledger point
- site is a site relation of 108 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (363 x 456 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1408 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 321 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.20644/2.36379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|fortress\|fortified town; sitelinks=38; wikidata:Q389269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/cite-de-carcassonne-q389269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
