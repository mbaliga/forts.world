# Château d'Oraison

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-oraison-q2968311` |
| Coordinates | 43.91608, 5.91741 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.91608/5.91741)) |
| Wikidata | [Q2968311](https://www.wikidata.org/wiki/Q2968311) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Oraison |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, waterway 14, road 134, zone 1, building 583, retaining-wall 2, water 1, wall 5).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91166525 historic=castle Q2968311 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 583 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.91608/5.91741) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2968311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/chateau-d-oraison-q2968311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
