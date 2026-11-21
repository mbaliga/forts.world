# Hetlinger Schanze

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hetlinger-schanze-q1616274` |
| Coordinates | 53.6056, 9.60167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.6056/9.60167)) |
| Wikidata | [Q1616274](https://www.wikidata.org/wiki/Q1616274) (CC0) |
| Wikidata class | fortification |
| Types | beach\|sconce |
| Administrative area | Hetlingen |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 53 elements (road 25, waterway 5, zone 2, building 18, coastline 1, water 2).

Evidence: documented 0, mapped 53, inferred 0, derived 1; heights documented 1, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":4,"medianInside":-0.1,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.6056/9.60167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; beach\|sconce; sitelinks=2; wikidata:Q1616274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/hetlinger-schanze-q1616274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
