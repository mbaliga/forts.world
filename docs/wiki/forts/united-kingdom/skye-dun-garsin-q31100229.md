# Skye, Dun Garsin

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skye-dun-garsin-q31100229` |
| Coordinates | 57.36292, -6.3903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.36292/-6.3903)) |
| Wikidata | [Q31100229](https://www.wikidata.org/wiki/Q31100229) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|yes\|broch\|contour fort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | broch |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, coastline 1, road 3, wall 2, zone 3, water 3).

Evidence: documented 0, mapped 13, inferred 0, derived 3; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19132567 historic=archaeological_site Q31100229 0 m from ledger point
- sea-0: DEM check ok {"cells":86,"medianInside":5.7,"medianOutside":40.9}
- sea-1: DEM check failed {"cells":399,"medianInside":34.5,"medianOutside":34.2}
- sea-2: DEM check failed {"cells":390,"medianInside":35.1,"medianOutside":23}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.36292/-6.3903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|yes\|broch\|contour fort; sitelinks=0; wikidata:Q31100229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/skye-dun-garsin-q31100229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
