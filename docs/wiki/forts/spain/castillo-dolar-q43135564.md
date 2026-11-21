# Castillo (Dólar)

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-dolar-q43135564` |
| Coordinates | 37.18069, -2.99116 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.18069/-2.99116)) |
| Wikidata | [Q43135564](https://www.wikidata.org/wiki/Q43135564) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Dólar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 210 elements (outline 1, road 88, building 400, waterway 1).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 118, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/696323922 historic=castle Q43135564 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.18069/-2.99116) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=0; wikidata:Q43135564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 210 elements); data/traces/castillo-dolar-q43135564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
