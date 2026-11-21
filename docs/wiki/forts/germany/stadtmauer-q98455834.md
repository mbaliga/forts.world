# Stadtmauer

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q98455834` |
| Coordinates | 50.13178, 10.03415 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.13178/10.03415)) |
| Wikidata | [Q98455834](https://www.wikidata.org/wiki/Q98455834) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Sulzthal |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 264 elements (marker 4, road 71, building 440, zone 4, waterway 6, wall 59).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 43, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 440 mapped (trace size budget); the rest of the town is not drawn
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.13178/10.03415) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98455834 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 264 elements); data/traces/stadtmauer-q98455834.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
