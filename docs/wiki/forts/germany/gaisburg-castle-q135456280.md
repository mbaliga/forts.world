# Gaisburg Castle

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gaisburg-castle-q135456280` |
| Coordinates | 48.78601, 9.21798 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.78601/9.21798)) |
| Wikidata | [Q135456280](https://www.wikidata.org/wiki/Q135456280) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Stuttgart |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 293 elements (marker 2, road 220, building 292, zone 2, waterway 1, retaining-wall 13, wall 5).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 34, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 292 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.78601/9.21798) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=1; wikidata:Q135456280 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 293 elements); data/traces/gaisburg-castle-q135456280.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
