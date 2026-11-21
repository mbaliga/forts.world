# Fort George

> Guernsey · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q5471208` |
| Coordinates | 49.4463, -2.5305 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4463/-2.5305)) |
| Wikidata | [Q5471208](https://www.wikidata.org/wiki/Q5471208) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint Peter Port |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 30 elements (road 18, coastline 2, building 9, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":251,"medianInside":1.5,"medianOutside":27.5}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4463/-2.5305) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/fort-george-q5471208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/guernsey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
