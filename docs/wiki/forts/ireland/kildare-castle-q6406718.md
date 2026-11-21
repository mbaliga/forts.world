# Kildare Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kildare-castle-q6406718` |
| Coordinates | 53.1572, -6.9091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1572/-6.9091)) |
| Wikidata | [Q6406718](https://www.wikidata.org/wiki/Q6406718) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 6, road 115, zone 12, building 254, wall 38).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 8, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/758579489 historic=castle 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 254 mapped (trace size budget); the rest of the town is not drawn
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1572/-6.9091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q6406718 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/kildare-castle-q6406718.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
