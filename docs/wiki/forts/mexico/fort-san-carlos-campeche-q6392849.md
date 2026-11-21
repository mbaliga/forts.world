# Fort San Carlos, Campeche

> Mexico · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-carlos-campeche-q6392849` |
| Coordinates | 19.84444, -90.54056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.84444/-90.54056)) |
| Wikidata | [Q6392849](https://www.wikidata.org/wiki/Q6392849) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion |
| Administrative area | San Francisco de Campeche |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 116 elements (outline 1, marker 2, road 93, building 10, coastline 1, zone 1, wall 4, water 4).

Evidence: documented 0, mapped 116, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203465446 historic=castle 8 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":9,"medianInside":-0.1,"medianOutside":2.3}
- 38 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.84444/-90.54056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion; sitelinks=3; wikidata:Q6392849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 116 elements); data/traces/fort-san-carlos-campeche-q6392849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mexico.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
