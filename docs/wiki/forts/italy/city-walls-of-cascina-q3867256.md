# city walls of Cascina

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-cascina-q3867256` |
| Coordinates | 43.67675, 10.54927 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67675/10.54927)) |
| Wikidata | [Q3867256](https://www.wikidata.org/wiki/Q3867256) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cascina |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 301 elements (marker 2, road 173, building 526, wall 27, zone 2).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 11, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8938542 historic=citywalls Q3867256 43 m from ledger point
- site is a site relation of 10 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (319 x 252 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 526 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 173 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67675/10.54927) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q3867256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 301 elements); data/traces/city-walls-of-cascina-q3867256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
