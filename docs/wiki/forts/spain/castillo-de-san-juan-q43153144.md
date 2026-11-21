# Castillo de San Juan

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-juan-q43153144` |
| Coordinates | 38.23216, -1.69298 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.23216/-1.69298)) |
| Wikidata | [Q43153144](https://www.wikidata.org/wiki/Q43153144) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|monument |
| Administrative area | Calasparra |
| Inception | ~C12 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 226 elements (outline 1, road 101, waterway 1, retaining-wall 1, building 356, water 2).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/519149719 historic=monument 278 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 356 mapped (trace size budget); the rest of the town is not drawn
- origin moved 278 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.23216/-1.69298) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|monument; sitelinks=2; wikidata:Q43153144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 226 elements); data/traces/castillo-de-san-juan-q43153144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
