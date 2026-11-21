# Torre dei Visconti

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-dei-visconti-q3995396` |
| Coordinates | 43.71619, 10.40391 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71619/10.40391)) |
| Wikidata | [Q3995396](https://www.wikidata.org/wiki/Q3995396) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Pisa |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 338 elements (marker 25, road 719, water 3, building 959, waterway 13, wall 196, zone 30, retaining-wall 1).

Evidence: documented 0, mapped 338, inferred 0, derived 0; heights documented 15, inferred 0, unknown 212.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3813741 historic=citywalls Q3328004 236 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1923 x 1561 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 959 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 719 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71619/10.40391) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q3995396 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 338 elements); data/traces/torre-dei-visconti-q3995396.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
