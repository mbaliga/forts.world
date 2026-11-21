# Fort of São João Baptista

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-sao-joao-baptista-q5472502` |
| Coordinates | 38.65144, -27.22686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.65144/-27.22686)) |
| Wikidata | [Q5472502](https://www.wikidata.org/wiki/Q5472502) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Sé |
| Inception | 1591 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 7 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, road 28, zone 3, building 176, coastline 1, retaining-wall 3, wall 1, water 1).

Evidence: documented 0, mapped 214, inferred 0, derived 1; heights documented 8, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1080788932 historic=yes 432 m from ledger point
- origin moved 431 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":313,"medianInside":0,"medianOutside":20.8}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.65144/-27.22686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=7; wikidata:Q5472502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/fort-of-sao-joao-baptista-q5472502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
