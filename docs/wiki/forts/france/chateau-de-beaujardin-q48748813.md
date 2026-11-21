# Château de Beaujardin

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-beaujardin-q48748813` |
| Coordinates | 47.37736, 0.70758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.37736/0.70758)) |
| Wikidata | [Q48748813](https://www.wikidata.org/wiki/Q48748813) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tours |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 380 elements (road 413, building 843, zone 446, water 2, wall 536, retaining-wall 2).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 12, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 30 nearest the outline centre of 843 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 413 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the ledger point of 1056 mapped (trace size budget); the rest are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.37736/0.70758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q48748813 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 380 elements); data/traces/chateau-de-beaujardin-q48748813.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
