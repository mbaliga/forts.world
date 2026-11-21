# Castillo de Pinos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-pinos-q43162820` |
| Coordinates | 37.25397, -3.74743 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.25397/-3.74743)) |
| Wikidata | [Q43162820](https://www.wikidata.org/wiki/Q43162820) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Pinos Puente |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 206 elements (outline 1, marker 1, road 76, waterway 2, building 730, retaining-wall 3, zone 3).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 120, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/617014530 historic=building 215 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 730 mapped (trace size budget); the rest of the town is not drawn
- origin moved 213 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.25397/-3.74743) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=0; wikidata:Q43162820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 206 elements); data/traces/castillo-de-pinos-q43162820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
