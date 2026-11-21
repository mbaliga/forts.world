# Atalaya Castle

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaya-castle-q2986978` |
| Coordinates | 38.63194, -0.86083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.63194/-0.86083)) |
| Wikidata | [Q2986978](https://www.wikidata.org/wiki/Q2986978) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Villena |
| Designations | bien de interés cultural |
| Wikipedia language editions | 15 |

## What the model contains

Tier **T1**, status `location-only`, 280 elements (marker 1, road 171, wall 8, building 710, zone 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 710 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.63194/-0.86083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=15; wikidata:Q2986978 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 280 elements); data/traces/atalaya-castle-q2986978.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
