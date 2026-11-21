# Portal del Pont

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portal-del-pont-q106000092` |
| Coordinates | 41.99474, 1.51963 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.99474/1.51963)) |
| Wikidata | [Q106000092](https://www.wikidata.org/wiki/Q106000092) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Solsona |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 294 elements (marker 3, road 201, building 330, waterway 5, zone 6, wall 5, water 5).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 330 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.99474/1.51963) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q106000092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 294 elements); data/traces/portal-del-pont-q106000092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
