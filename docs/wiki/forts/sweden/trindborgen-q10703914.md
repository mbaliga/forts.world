# Trindborgen

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trindborgen-q10703914` |
| Coordinates | 59.10389, 17.68306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.10389/17.68306)) |
| Wikidata | [Q10703914](https://www.wikidata.org/wiki/Q10703914) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ytterjärna |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 5, coastline 3, waterway 1, zone 3, water 2).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/881722688 historic=building 139 m from ledger point
- origin moved 141 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":213,"medianInside":5.1,"medianOutside":8.3}
- sea-1: DEM check failed {"cells":18,"medianInside":7.1,"medianOutside":7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.10389/17.68306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q10703914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/trindborgen-q10703914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
