# Castle of Odemira

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-odemira-q17390074` |
| Coordinates | 37.59727, -8.64341 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.59727/-8.64341)) |
| Wikidata | [Q17390074](https://www.wikidata.org/wiki/Q17390074) (CC0) |
| Wikidata class | ruin |
| Types | municipal library\|castle ruin |
| Administrative area | Odemira |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 255 elements (road 128, waterway 1, building 281, water 2, zone 2, wall 2).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.59727/-8.64341) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; municipal library\|castle ruin; sitelinks=3; wikidata:Q17390074 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 255 elements); data/traces/castle-of-odemira-q17390074.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
