# Duborg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duborg-castle-q320615` |
| Coordinates | 54.7931, 9.42528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7931/9.42528)) |
| Wikidata | [Q320615](https://www.wikidata.org/wiki/Q320615) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Flensburg |
| Inception | 1411 |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |
| OSM `website` | https://volxbad.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 385 elements (outline 1, marker 9, road 129, building 236, wall 5, water 2, coastline 1, waterway 2).

Evidence: documented 0, mapped 385, inferred 0, derived 1; heights documented 80, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165397264 historic=yes Q2531628 469 m from ledger point
- origin moved 469 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":107,"medianInside":17,"medianOutside":5.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7931/9.42528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=6; wikidata:Q320615 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 385 elements); data/traces/duborg-castle-q320615.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
