# City walls of Eberswalde

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-eberswalde-q101647674` |
| Coordinates | 52.83124, 13.82153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.83124/13.82153)) |
| Wikidata | [Q101647674](https://www.wikidata.org/wiki/Q101647674) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|city walls |
| Administrative area | Eberswalde |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 309 elements (marker 26, road 233, building 434, zone 4, waterway 1, wall 7, water 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 51, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14313668 historic=citywalls Q101647674 51 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (188 x 108 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 434 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 54 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.83124/13.82153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|city walls; sitelinks=1; wikidata:Q101647674 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/city-walls-of-eberswalde-q101647674.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
