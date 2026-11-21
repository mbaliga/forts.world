# Deganwy Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `deganwy-castle-q2969121` |
| Coordinates | 53.29796, -3.82872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.29796/-3.82872)) |
| Wikidata | [Q2969121](https://www.wikidata.org/wiki/Q2969121) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|Welsh princes' castles |
| Inception | 1080 |
| Designations | National Monument of Wales\|Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, coastline 2, road 101, zone 14, building 248, wall 4, cliff 4, waterway 1, water 1).

Evidence: documented 0, mapped 376, inferred 0, derived 1; heights documented 0, inferred 0, unknown 252.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1278599366 historic=ruins Q2969121 175 m from ledger point
- origin moved 178 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":93,"medianInside":10.5,"medianOutside":53.7}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.29796/-3.82872) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|Welsh princes' castles; sitelinks=12; wikidata:Q2969121 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 376 elements); data/traces/deganwy-castle-q2969121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
