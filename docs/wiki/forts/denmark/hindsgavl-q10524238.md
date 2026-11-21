# Hindsgavl

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hindsgavl-q10524238` |
| Coordinates | 55.50517, 9.68953 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.50517/9.68953)) |
| Wikidata | [Q10524238](https://www.wikidata.org/wiki/Q10524238) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|manor house |
| Administrative area | Middelfart Municipality |
| Inception | 1200 |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 158 elements (outline 1, road 93, building 14, water 6, coastline 1, zone 41, waterway 2).

Evidence: documented 0, mapped 158, inferred 0, derived 1; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72236120 historic=castle Q10524238 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":7.9,"medianOutside":19.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.50517/9.68953) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|manor house; sitelinks=4; wikidata:Q10524238 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 158 elements); data/traces/hindsgavl-q10524238.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
