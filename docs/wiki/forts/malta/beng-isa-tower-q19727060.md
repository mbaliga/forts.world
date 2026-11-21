# Bengħisa Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beng-isa-tower-q19727060` |
| Coordinates | 35.81183, 14.53972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.81183/14.53972)) |
| Wikidata | [Q19727060](https://www.wikidata.org/wiki/Q19727060) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Birżebbuġa |
| Inception | 1658 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, road 13, building 9, zone 2, wall 7, coastline 2, water 1).

Evidence: documented 0, mapped 35, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46780543 historic=fort Q3748520 767 m from ledger point
- origin moved 774 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":314,"medianInside":0,"medianOutside":36}
- 86 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.81183/14.53972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=4; wikidata:Q19727060 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/beng-isa-tower-q19727060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
