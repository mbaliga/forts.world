# Fort Randolph

> Panama · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-randolph-q5471892` |
| Coordinates | 9.38444, -79.8878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.38444/-79.8878)) |
| Wikidata | [Q5471892](https://www.wikidata.org/wiki/Q5471892) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (coastline 2, road 2, building 3, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":69,"medianInside":1,"medianOutside":3.2}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.38444/-79.8878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q5471892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/fort-randolph-q5471892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/panama.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
