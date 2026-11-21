# Broch of Culswick

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `broch-of-culswick-q2255388` |
| Coordinates | 60.18684, -1.54389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.18684/-1.54389)) |
| Wikidata | [Q2255388](https://www.wikidata.org/wiki/Q2255388) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, water 3, waterway 1, wall 3, road 1, coastline 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19203072 historic=archaeological_site Q2255388 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":82,"medianInside":-6,"medianOutside":14.3}
- 287 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.18684/-1.54389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=6; wikidata:Q2255388 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/broch-of-culswick-q2255388.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
