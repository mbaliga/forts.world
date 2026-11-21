# Wain's Hill

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wain-s-hill-q7960135` |
| Coordinates | 51.43165, -2.87744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.43165/-2.87744)) |
| Wikidata | [Q7960135](https://www.wikidata.org/wiki/Q7960135) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|promontory fort |
| Administrative area | Clevedon |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 108 elements (outline 1, coastline 2, road 65, water 3, wall 14, building 16, zone 1, retaining-wall 4, cliff 1, waterway 1).

Evidence: documented 0, mapped 108, inferred 0, derived 1; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/214800763 historic=building 613 m from ledger point
- origin moved 613 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":200,"medianInside":-2.5,"medianOutside":7.9}
- 320 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.43165/-2.87744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|promontory fort; sitelinks=1; wikidata:Q7960135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 108 elements); data/traces/wain-s-hill-q7960135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
