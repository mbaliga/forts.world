# Conwy Town Walls

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `conwy-town-walls-q5166765` |
| Coordinates | 53.28119, -3.83089 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.28119/-3.83089)) |
| Wikidata | [Q5166765](https://www.wikidata.org/wiki/Q5166765) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `heritage` | 1 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 8, coastline 4, road 423, zone 30, building 646, wall 141, retaining-wall 14, water 6, waterway 2).

Evidence: documented 0, mapped 340, inferred 0, derived 1; heights documented 87, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/150098557 historic=citywalls Q5166765 81 m from ledger point
- pruned to the outline plus 150 m: 1275 -> 1114 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 530 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 385 mapped (trace size budget); minor lanes are not drawn
- origin moved 81 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":357,"medianInside":7.8,"medianOutside":21.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 62 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.28119/-3.83089) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=5; wikidata:Q5166765 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/conwy-town-walls-q5166765.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
