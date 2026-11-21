# Forte da Má Ferramenta

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-da-ma-ferramenta-q5472529` |
| Coordinates | 38.65639, -27.26611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.65639/-27.26611)) |
| Wikidata | [Q5472529](https://www.wikidata.org/wiki/Q5472529) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Azores |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 171 elements (outline 1, building 127, road 24, coastline 2, retaining-wall 3, wall 5, zone 8, water 1).

Evidence: documented 0, mapped 171, inferred 0, derived 1; heights documented 4, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1076805695 historic=fort Q5472525 34 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":143,"medianInside":0,"medianOutside":11.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.65639/-27.26611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5472529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 171 elements); data/traces/forte-da-ma-ferramenta-q5472529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
