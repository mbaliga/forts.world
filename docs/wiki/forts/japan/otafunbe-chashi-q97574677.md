# Otafunbe Chashi

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `otafunbe-chashi-q97574677` |
| Coordinates | 42.82535, 143.843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.82535/143.843)) |
| Wikidata | [Q97574677](https://www.wikidata.org/wiki/Q97574677) (CC0) |
| Wikidata class | fortification |
| Types | chashi |
| Administrative area | Urahoro |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 6 elements (coastline 1, waterway 2, road 2, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":78,"medianInside":0.4,"medianOutside":6.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.82535/143.843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; chashi; sitelinks=1; wikidata:Q97574677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/otafunbe-chashi-q97574677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
