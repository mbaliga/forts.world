# Toolse Castle

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `toolse-castle-q14956242` |
| Coordinates | 59.53467, 26.46843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.53467/26.46843)) |
| Wikidata | [Q14956242](https://www.wikidata.org/wiki/Q14956242) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Haljala Rural Municipality |
| Inception | 1471 |
| Designations | architectural monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, marker 1, coastline 4, cliff 1, road 5, water 3).

Evidence: documented 0, mapped 15, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165218771 historic=castle 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":684,"medianInside":6,"medianOutside":5.6}
- sea-1: DEM check failed {"cells":317,"medianInside":6,"medianOutside":6}
- sea-2: DEM check failed {"cells":1583,"medianInside":6,"medianOutside":6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.53467/26.46843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q14956242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/toolse-castle-q14956242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
