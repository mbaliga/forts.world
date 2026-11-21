# tvrz Šeberov

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tvrz-seberov-q56860467` |
| Coordinates | 50.01199, 14.51298 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.01199/14.51298)) |
| Wikidata | [Q56860467](https://www.wikidata.org/wiki/Q56860467) (CC0) |
| Wikidata class | fort |
| Types | fortified house\|destroyed building or structure |
| Administrative area | Prague |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 356 elements (marker 2, road 168, building 195, water 3, waterway 9, wall 8, zone 64).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 71, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.01199/14.51298) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house\|destroyed building or structure; sitelinks=1; wikidata:Q56860467 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 356 elements); data/traces/tvrz-seberov-q56860467.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
