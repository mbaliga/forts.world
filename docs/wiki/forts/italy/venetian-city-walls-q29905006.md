# Venetian city walls

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `venetian-city-walls-q29905006` |
| Coordinates | 45.35995, 9.68437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.35995/9.68437)) |
| Wikidata | [Q29905006](https://www.wikidata.org/wiki/Q29905006) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls |
| Administrative area | Crema |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 387 elements (marker 2, road 499, building 1357, waterway 3, wall 86, zone 21, water 5).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 13, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18923795 historic=citywalls Q29905006 477 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (937 x 790 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1357 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 499 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.35995/9.68437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls; sitelinks=1; wikidata:Q29905006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 387 elements); data/traces/venetian-city-walls-q29905006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
