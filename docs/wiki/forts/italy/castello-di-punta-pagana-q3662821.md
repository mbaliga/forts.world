# Castello di Punta Pagana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-punta-pagana-q3662821` |
| Coordinates | 44.33554, 9.22547 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.33554/9.22547)) |
| Wikidata | [Q3662821](https://www.wikidata.org/wiki/Q3662821) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rapallo |
| Inception | 1625 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, road 8, coastline 1, building 8, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204694244 historic=castle Q3662821 2 m from ledger point
- sea-0: DEM check ok {"cells":287,"medianInside":0,"medianOutside":5.2}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.33554/9.22547) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/castello-di-punta-pagana-q3662821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
