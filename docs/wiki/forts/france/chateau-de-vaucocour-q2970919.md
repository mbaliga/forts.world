# Château de Vaucocour

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vaucocour-q2970919` |
| Coordinates | 45.41444, 0.92194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.41444/0.92194)) |
| Wikidata | [Q2970919](https://www.wikidata.org/wiki/Q2970919) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Thiviers |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, road 87, building 360, wall 24, retaining-wall 9, zone 5).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 0, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/452108211 historic=castle Q2970919 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 360 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.41444/0.92194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q2970919 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/chateau-de-vaucocour-q2970919.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
