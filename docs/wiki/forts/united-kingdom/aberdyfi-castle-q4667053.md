# Aberdyfi Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aberdyfi-castle-q4667053` |
| Coordinates | 52.55379, -3.93775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.55379/-3.93775)) |
| Wikidata | [Q4667053](https://www.wikidata.org/wiki/Q4667053) (CC0) |
| Wikidata class | castle |
| Types | castle\|motte |
| Administrative area | Ysgubor-y-coed |
| Inception | 1156 |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, waterway 1, road 11, coastline 2, building 5, zone 5, water 3).

Evidence: documented 0, mapped 28, inferred 0, derived 3; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/321914645 historic=castle 517 m from ledger point
- origin moved 517 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":355,"medianInside":10.5,"medianOutside":39.7}
- sea-1: DEM check failed {"cells":1565,"medianInside":30.4,"medianOutside":9.8}
- sea-2: DEM check failed {"cells":1592,"medianInside":29.7,"medianOutside":17.5}
- 25 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.55379/-3.93775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|motte; sitelinks=7; wikidata:Q4667053 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/aberdyfi-castle-q4667053.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
