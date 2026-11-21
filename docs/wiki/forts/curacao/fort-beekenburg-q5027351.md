# Fort Beekenburg

> Curaçao · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-beekenburg-q5027351` |
| Coordinates | 12.07252, -68.86196 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/12.07252/-68.86196)) |
| Wikidata | [Q5027351](https://www.wikidata.org/wiki/Q5027351) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, marker 1, road 18, coastline 3, zone 3, building 5, wall 3, water 5, cliff 2).

Evidence: documented 0, mapped 41, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/520899797 historic=yes Q5027351 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":199,"medianInside":4.8,"medianOutside":8.9}
- sea-1: DEM check ok {"cells":4,"medianInside":5.4,"medianOutside":7.3}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/12.07252/-68.86196) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5027351 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/fort-beekenburg-q5027351.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/curacao.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
