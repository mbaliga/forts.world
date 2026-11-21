# Llansteffan Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `llansteffan-castle-q1936320` |
| Coordinates | 51.7655, -4.3908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7655/-4.3908)) |
| Wikidata | [Q1936320](https://www.wikidata.org/wiki/Q1936320) (CC0) |
| Wikidata class | castle |
| Types | castle\|promontory fort\|archaeological site |
| Administrative area | Llansteffan |
| Inception | 1192 |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 13 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, coastline 1, road 7, waterway 1, building 2, wall 14, zone 3, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32875828 historic=ruins Q1936320 27 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":187,"medianInside":12.1,"medianOutside":38.3}
- sea-1: DEM check failed {"cells":14,"medianInside":13.5,"medianOutside":36}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7655/-4.3908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|promontory fort\|archaeological site; sitelinks=13; wikidata:Q1936320 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/llansteffan-castle-q1936320.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
