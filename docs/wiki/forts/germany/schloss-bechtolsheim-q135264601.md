# Schloss Bechtolsheim

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-bechtolsheim-q135264601` |
| Coordinates | 49.80497, 8.19145 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.80497/8.19145)) |
| Wikidata | [Q135264601](https://www.wikidata.org/wiki/Q135264601) (CC0) |
| Wikidata class | castle |
| Types | water castle\|château |
| Administrative area | Bechtolsheim |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 175 elements (road 53, waterway 1, building 367, zone 1).

Evidence: documented 0, mapped 175, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.80497/8.19145) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle\|château; sitelinks=1; wikidata:Q135264601 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 175 elements); data/traces/schloss-bechtolsheim-q135264601.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
