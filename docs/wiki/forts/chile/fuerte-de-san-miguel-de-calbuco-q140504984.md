# Fuerte de San Miguel de Calbuco

> Chile · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-san-miguel-de-calbuco-q140504984` |
| Coordinates | -41.76867, -73.12631 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-41.76867/-73.12631)) |
| Wikidata | [Q140504984](https://www.wikidata.org/wiki/Q140504984) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Calbuco |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 96 elements (road 28, building 64, zone 1, coastline 2, water 1).

Evidence: documented 0, mapped 96, inferred 0, derived 1; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":249,"medianInside":2.6,"medianOutside":14}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-41.76867/-73.12631) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q140504984 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 96 elements); data/traces/fuerte-de-san-miguel-de-calbuco-q140504984.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
