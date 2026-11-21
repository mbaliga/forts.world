# Maruoka Domain Battery

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maruoka-domain-battery-q17210347` |
| Coordinates | 36.25278, 136.15394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.25278/136.15394)) |
| Wikidata | [Q17210347](https://www.wikidata.org/wiki/Q17210347) (CC0) |
| Wikidata class | fortification |
| Types | daiba |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 71 elements (marker 1, coastline 10, road 21, building 36, zone 2, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 25, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (520 m2) cut out of sea-0
- island ring (840 m2) cut out of sea-0
- island ring (2266 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":189,"medianInside":1.4,"medianOutside":14.4}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.25278/136.15394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; daiba; sitelinks=3; wikidata:Q17210347 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 71 elements); data/traces/maruoka-domain-battery-q17210347.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
