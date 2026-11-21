# Toba Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `toba-castle-q657667` |
| Coordinates | 34.4808, 136.845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.4808/136.845)) |
| Wikidata | [Q657667](https://www.wikidata.org/wiki/Q657667) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|umijiro |
| Administrative area | Toba |
| Inception | 1594 |
| Wikipedia language editions | 6 |

## What the model contains

Tier **T1**, status `location-only`, 128 elements (marker 4, road 55, coastline 3, building 36, zone 2, wall 2, cliff 2, retaining-wall 21, water 3).

Evidence: documented 0, mapped 128, inferred 0, derived 3; heights documented 1, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":7.7}
- sea-1: DEM check ok {"cells":45,"medianInside":4.1,"medianOutside":7.9}
- sea-2: DEM check failed {"cells":400,"medianInside":7.8,"medianOutside":4.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.4808/136.845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|umijiro; sitelinks=6; wikidata:Q657667 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 128 elements); data/traces/toba-castle-q657667.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
