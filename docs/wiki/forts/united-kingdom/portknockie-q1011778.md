# Portknockie

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portknockie-q1011778` |
| Coordinates | 57.7027, -2.8597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.7027/-2.8597)) |
| Wikidata | [Q1011778](https://www.wikidata.org/wiki/Q1011778) (CC0) |
| Wikidata class | fortification |
| Types | village\|small burgh |
| Administrative area | Moray |
| Wikipedia language editions | 14 |

## What the model contains

Tier **T1**, status `location-only`, 200 elements (marker 3, coastline 2, road 66, building 456, cliff 2, zone 2, retaining-wall 3, water 2).

Evidence: documented 0, mapped 200, inferred 0, derived 2; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- sea-0: DEM check ok {"cells":6,"medianInside":5.5,"medianOutside":37}
- sea-1: DEM check ok {"cells":5,"medianInside":2.7,"medianOutside":37}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.7027/-2.8597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; village\|small burgh; sitelinks=14; wikidata:Q1011778 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 200 elements); data/traces/portknockie-q1011778.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
