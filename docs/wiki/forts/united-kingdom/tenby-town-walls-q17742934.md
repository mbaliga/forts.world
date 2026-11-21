# Tenby Town Walls

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tenby-town-walls-q17742934` |
| Coordinates | 51.67133, -4.70076 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.67133/-4.70076)) |
| Wikidata | [Q17742934](https://www.wikidata.org/wiki/Q17742934) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Tenby |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `ruins` | wall |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 373 elements (marker 18, road 442, building 878, coastline 2, wall 184, zone 27, water 2).

Evidence: documented 0, mapped 373, inferred 0, derived 2; heights documented 0, inferred 0, unknown 244.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18608800 historic=citywalls Q17742934 37 m from ledger point
- site is a site relation of 5 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (229 x 386 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 878 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 442 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":190,"medianInside":9,"medianOutside":22.7}
- sea-1: DEM check ok {"cells":192,"medianInside":9.2,"medianOutside":22.8}
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.67133/-4.70076) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q17742934 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/tenby-town-walls-q17742934.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
