# York city walls

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `york-city-walls-q4205980` |
| Coordinates | 53.9553, -1.081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.9553/-1.081)) |
| Wikidata | [Q4205980](https://www.wikidata.org/wiki/Q4205980) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | City of York |
| Wikipedia language editions | 11 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (marker 37, road 1093, waterway 12, wall 324, building 804, zone 54, water 5, retaining-wall 29).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 28, inferred 0, unknown 265.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18937491 historic=citywalls Q4205980 366 m from ledger point
- site is a site relation of 143 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1433 x 1282 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 804 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 1093 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 531 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.9553/-1.081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=11; wikidata:Q4205980 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 351 elements); data/traces/york-city-walls-q4205980.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
