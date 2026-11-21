# Château de Bompas

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-bompas-q21568894` |
| Coordinates | 42.73261, 2.93394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.73261/2.93394)) |
| Wikidata | [Q21568894](https://www.wikidata.org/wiki/Q21568894) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bompas |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 256 elements (marker 4, road 111, building 841, water 6, wall 3, waterway 8, retaining-wall 4).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 841 mapped (trace size budget); the rest of the town is not drawn
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.73261/2.93394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q21568894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 256 elements); data/traces/chateau-de-bompas-q21568894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
