# Castello Doria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-doria-q3662815` |
| Coordinates | 44.0511, 9.83276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.0511/9.83276)) |
| Wikidata | [Q3662815](https://www.wikidata.org/wiki/Q3662815) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Porto Venere |
| Inception | 1161 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 2, coastline 3, road 110, zone 6, wall 4, building 90, cliff 1, retaining-wall 3, waterway 2, water 3).

Evidence: documented 0, mapped 225, inferred 0, derived 3; heights documented 9, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/65017678 historic=castle Q3662815 15 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":90,"medianInside":0,"medianOutside":40.3}
- sea-1: DEM check ok {"cells":18,"medianInside":0,"medianOutside":32.5}
- sea-2: DEM check ok {"cells":9,"medianInside":-0.6,"medianOutside":31.9}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.0511/9.83276) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3662815 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/castello-doria-q3662815.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
