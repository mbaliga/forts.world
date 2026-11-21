# Sonakanda Fort

> Bangladesh · Narayanganj · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sonakanda` |
| Coordinates | 23.606922, 90.512012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.606922/90.512012)) |
| Programme catalogue | confidence medium, significance rank 3204; sources catalogue:sonakanda;smith-newton:r3781 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 142 elements (outline 1, water 3, road 15, building 497, waterway 2, zone 1).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/540169762 historic=monument 813 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 497 mapped (trace size budget); the rest of the town is not drawn
- origin moved 812 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.606922/90.512012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from smith-newton (was 23.616,90.511) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 142 elements); data/traces/sonakanda.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bangladesh.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
