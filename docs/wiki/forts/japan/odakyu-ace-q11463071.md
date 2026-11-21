# Odakyu Ace

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `odakyu-ace-q11463071` |
| Coordinates | 35.69188, 139.69876 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.69188/139.69876)) |
| Wikidata | [Q11463071](https://www.wikidata.org/wiki/Q11463071) (CC0) |
| Wikidata class | fortification |
| Types | shopping center\|underground city |
| Administrative area | Nishi-Shinjuku |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 310 elements (marker 1, road 638, building 131, zone 10, wall 29).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 105, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 131 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 638 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.69188/139.69876) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; shopping center\|underground city; sitelinks=2; wikidata:Q11463071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 310 elements); data/traces/odakyu-ace-q11463071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
