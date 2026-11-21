# Marienberg Fortress

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marienberg-fortress-q328352` |
| Coordinates | 49.78977, 9.92111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.78977/9.92111)) |
| Wikidata | [Q328352](https://www.wikidata.org/wiki/Q328352) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Würzburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 23 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://wuerzburgwiki.de/wiki/Festung_Marienberg |

## What the model contains

Tier **T1**, status `location-only`, 385 elements (marker 14, road 623, building 241, zone 26, retaining-wall 98, wall 83, waterway 10, water 3, cliff 11).

Evidence: documented 0, mapped 385, inferred 0, derived 0; heights documented 43, inferred 0, unknown 198.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2744502 historic=castle Q328352 29 m from ledger point
- site is a site relation of 42 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (372 x 361 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 241 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 623 mapped (trace size budget); minor lanes are not drawn
- origin moved 137 m from the ledger point to the centre of the mapped site
- 47 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.78977/9.92111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=23; wikidata:Q328352 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 371 elements); data/traces/marienberg-fortress-q328352.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
