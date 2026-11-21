# Malaspina Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `malaspina-castle-q3662332` |
| Coordinates | 44.13567, 10.02118 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13567/10.02118)) |
| Wikidata | [Q3662332](https://www.wikidata.org/wiki/Q3662332) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|religious museum\|historic house museum\|military museum building |
| Administrative area | Fosdinovo |
| Inception | 1965 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, road 39, building 23, waterway 6, zone 2, wall 4).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 21, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16127043 historic=castle Q3662332 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13567/10.02118) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|religious museum\|historic house museum\|military museum building; sitelinks=4; wikidata:Q3662332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/malaspina-castle-q3662332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
