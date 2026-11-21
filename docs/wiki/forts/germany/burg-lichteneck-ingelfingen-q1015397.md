# Burg Lichteneck (Ingelfingen)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-lichteneck-ingelfingen-q1015397` |
| Coordinates | 49.3019, 9.65528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.3019/9.65528)) |
| Wikidata | [Q1015397](https://www.wikidata.org/wiki/Q1015397) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Ingelfingen |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 3, road 95, zone 31, waterway 3, building 252, retaining-wall 7, wall 10).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 5, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/655760974 historic=citywalls 139 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- origin moved 139 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.3019/9.65528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q1015397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/burg-lichteneck-ingelfingen-q1015397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
