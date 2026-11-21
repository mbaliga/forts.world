# Magdalen Tower

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `magdalen-tower-q6729840` |
| Coordinates | 53.71823, -6.35105 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.71823/-6.35105)) |
| Wikidata | [Q6729840](https://www.wikidata.org/wiki/Q6729840) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Drogheda |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, road 76, building 341, zone 8, waterway 1, wall 2).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1221394739 historic=castle Q6729840 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 341 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.71823/-6.35105) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=3; wikidata:Q6729840 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/magdalen-tower-q6729840.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
