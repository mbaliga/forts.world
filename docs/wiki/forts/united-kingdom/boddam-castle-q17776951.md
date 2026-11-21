# Boddam Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `boddam-castle-q17776951` |
| Coordinates | 57.4663, -1.78146 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.4663/-1.78146)) |
| Wikidata | [Q17776951](https://www.wikidata.org/wiki/Q17776951) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aberdeenshire |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 42 elements (marker 1, road 12, coastline 3, building 24, water 2).

Evidence: documented 0, mapped 42, inferred 0, derived 2; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (742 m2) cut out of sea-1
- sea-0: DEM check ok {"cells":67,"medianInside":5.2,"medianOutside":21.4}
- sea-1: DEM check ok {"cells":15,"medianInside":3.8,"medianOutside":19.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.4663/-1.78146) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q17776951 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 42 elements); data/traces/boddam-castle-q17776951.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
