# city wall (Bernau bei Berlin)

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-bernau-bei-berlin-q126736617` |
| Coordinates | 52.68057, 13.58999 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.68057/13.58999)) |
| Wikidata | [Q126736617](https://www.wikidata.org/wiki/Q126736617) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bernau bei Berlin |
| Inception | 1300 |
| Designations | partial heritage site |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 316 elements (marker 11, road 579, zone 7, water 3, waterway 7, building 542, wall 17, retaining-wall 1).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 34, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7547995 historic=citywalls 242 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (506 x 478 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 542 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 579 mapped (trace size budget); minor lanes are not drawn
- origin moved 220 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.68057/13.58999) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q126736617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 316 elements); data/traces/city-wall-bernau-bei-berlin-q126736617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
