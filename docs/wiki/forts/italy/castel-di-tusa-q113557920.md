# Castel di Tusa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-di-tusa-q113557920` |
| Coordinates | 38.01115, 14.25029 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.01115/14.25029)) |
| Wikidata | [Q113557920](https://www.wikidata.org/wiki/Q113557920) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tusa |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, coastline 3, road 44, building 137, wall 6, retaining-wall 3, waterway 1, pit 1, zone 1, water 1).

Evidence: documented 0, mapped 198, inferred 0, derived 1; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1088460435 historic=castle Q113557920 71 m from ledger point
- origin moved 71 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":169,"medianInside":0,"medianOutside":9.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.01115/14.25029) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q113557920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/castel-di-tusa-q113557920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
