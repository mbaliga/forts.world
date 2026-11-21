# Castle of Saint Anthony of Salgar

> Colombia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-saint-anthony-of-salgar-q2970621` |
| Coordinates | 11.0182, -74.9417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.0182/-74.9417)) |
| Wikidata | [Q2970621](https://www.wikidata.org/wiki/Q2970621) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Salgar |
| Designations | National Monuments of Colombia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, road 12, building 1, coastline 1, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/671836025 historic=castle Q2970621 7 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":218,"medianInside":2.2,"medianOutside":19}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.0182/-74.9417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q2970621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/castle-of-saint-anthony-of-salgar-q2970621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/colombia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
