# Olympos Genoese Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `olympos-genoese-castle-q131902104` |
| Coordinates | 36.39463, 30.47818 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.39463/30.47818)) |
| Wikidata | [Q131902104](https://www.wikidata.org/wiki/Q131902104) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kumluca |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, coastline 5, road 11, zone 1, waterway 1, cliff 5, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164959099 historic=castle 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":159,"medianInside":0,"medianOutside":32.6}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.39463/30.47818) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q131902104 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/olympos-genoese-castle-q131902104.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
