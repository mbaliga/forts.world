# Siyu West Fort

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `siyu-west-fort-q15932826` |
| Coordinates | 23.56407, 119.48928 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.56407/119.48928)) |
| Wikidata | [Q15932826](https://www.wikidata.org/wiki/Q15932826) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Xiyu Township |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 12 elements (outline 1, road 7, coastline 1, building 2, water 1).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/495190905 historic=fort 23 m from ledger point
- origin moved 27 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":126,"medianInside":7.1,"medianOutside":47.8}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.56407/119.48928) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q15932826 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 12 elements); data/traces/siyu-west-fort-q15932826.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
