# Casa torre di via Ulisse Dini

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-torre-di-via-ulisse-dini-q3661355` |
| Coordinates | 43.71844, 10.40153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71844/10.40153)) |
| Wikidata | [Q3661355](https://www.wikidata.org/wiki/Q3661355) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Pisa |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 363 elements (marker 26, road 723, water 7, building 1023, zone 35, wall 221, waterway 3, retaining-wall 1).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 10, inferred 0, unknown 242.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3813741 historic=citywalls Q3328004 116 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1923 x 1561 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 1023 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 723 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71844/10.40153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q3661355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 363 elements); data/traces/casa-torre-di-via-ulisse-dini-q3661355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
