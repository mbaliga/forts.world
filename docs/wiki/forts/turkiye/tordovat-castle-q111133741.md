# Tordovat Castle

> Türkiye · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tordovat-castle-q111133741` |
| Coordinates | 41.17067, 40.83585 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.17067/40.83585)) |
| Wikidata | [Q111133741](https://www.wikidata.org/wiki/Q111133741) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Pazar district |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (road 12, building 1, waterway 2, coastline 4, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":37,"medianInside":0,"medianOutside":19.9}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.17067/40.83585) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q111133741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/tordovat-castle-q111133741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
