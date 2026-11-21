# Augustenborg Palace

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `augustenborg-palace-q552920` |
| Coordinates | 54.94462, 9.86656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.94462/9.86656)) |
| Wikidata | [Q552920](https://www.wikidata.org/wiki/Q552920) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Sønderborg Municipality |
| Inception | 1664 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 183 elements (outline 1, coastline 1, road 72, building 99, zone 6, waterway 3, water 1).

Evidence: documented 0, mapped 183, inferred 0, derived 1; heights documented 0, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97597002 historic=castle Q552920 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":101,"medianInside":5.5,"medianOutside":12.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.94462/9.86656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=13; wikidata:Q552920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 183 elements); data/traces/augustenborg-palace-q552920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
