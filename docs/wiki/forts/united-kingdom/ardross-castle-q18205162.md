# Ardross Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ardross-castle-q18205162` |
| Coordinates | 56.1963, -2.79381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.1963/-2.79381)) |
| Wikidata | [Q18205162](https://www.wikidata.org/wiki/Q18205162) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 27 elements (marker 1, coastline 1, road 10, building 8, zone 6, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 5, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":180,"medianInside":3.4,"medianOutside":16.5}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.1963/-2.79381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q18205162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 27 elements); data/traces/ardross-castle-q18205162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
