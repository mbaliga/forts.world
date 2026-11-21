# Schloss Waldenbuch

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-waldenbuch-q1558903` |
| Coordinates | 48.63712, 9.13122 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.63712/9.13122)) |
| Wikidata | [Q1558903](https://www.wikidata.org/wiki/Q1558903) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Waldenbuch |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 296 elements (marker 3, road 199, waterway 8, building 331, wall 9, zone 3, retaining-wall 3).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 7, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 331 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.63712/9.13122) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q1558903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 296 elements); data/traces/schloss-waldenbuch-q1558903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
