# city walls of Pisa

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-pisa-q3328004` |
| Coordinates | 43.7225, 10.4015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7225/10.4015)) |
| Wikidata | [Q3328004](https://www.wikidata.org/wiki/Q3328004) (CC0) |
| Wikidata class | fort |
| Types | fortification system\|city walls |
| Administrative area | Pisa |
| Inception | 1155 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 385 elements (marker 17, road 554, building 854, zone 51, wall 171, water 6).

Evidence: documented 0, mapped 385, inferred 0, derived 0; heights documented 22, inferred 0, unknown 209.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3813741 historic=citywalls Q3328004 568 m from ledger point
- site is a site relation of 22 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1923 x 1561 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 854 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 554 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7225/10.4015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification system\|city walls; sitelinks=3; wikidata:Q3328004 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 385 elements); data/traces/city-walls-of-pisa-q3328004.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
