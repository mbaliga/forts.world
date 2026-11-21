# Sebastian Gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sebastian-gate-q109712156` |
| Coordinates | 47.56862, 10.70296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.56862/10.70296)) |
| Wikidata | [Q109712156](https://www.wikidata.org/wiki/Q109712156) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Füssen |
| Inception | 1503 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 13, road 137, zone 19, building 342, waterway 1, wall 15).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 59, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1063469539 historic=citywalls Q109712156 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 342 mapped (trace size budget); the rest of the town is not drawn
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.56862/10.70296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q109712156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/sebastian-gate-q109712156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
