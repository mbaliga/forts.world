# Castello di San Giorgio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-san-giorgio-q3662656` |
| Coordinates | 44.07301, 9.90723 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.07301/9.90723)) |
| Wikidata | [Q3662656](https://www.wikidata.org/wiki/Q3662656) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lerici |
| Inception | 1152 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 182 elements (outline 1, road 82, coastline 2, building 93, retaining-wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 182, inferred 0, derived 2; heights documented 2, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/67545649 historic=castle Q3662656 13 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":84,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":190,"medianInside":0,"medianOutside":1}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.07301/9.90723) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3662656 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 182 elements); data/traces/castello-di-san-giorgio-q3662656.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
