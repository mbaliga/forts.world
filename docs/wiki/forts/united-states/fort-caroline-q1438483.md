# Fort Caroline

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-caroline-q1438483` |
| Coordinates | 30.3869, -81.5006 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.3869/-81.5006)) |
| Wikidata | [Q1438483](https://www.wikidata.org/wiki/Q1438483) (CC0) |
| Wikidata class | fort |
| Types | fort\|National Memorial of the United States\|historic district |
| Administrative area | New Spain |
| Inception | 1953 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 14 |

## What the model contains

Tier **T1**, status `location-only`, 13 elements (road 5, coastline 3, waterway 4, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":161,"medianInside":-1,"medianOutside":10.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.3869/-81.5006) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|National Memorial of the United States\|historic district; sitelinks=14; wikidata:Q1438483 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/fort-caroline-q1438483.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
