# Château de Maison-Blanche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-maison-blanche-q83716055` |
| Coordinates | 48.87586, 2.5443 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87586/2.5443)) |
| Wikidata | [Q83716055](https://www.wikidata.org/wiki/Q83716055) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Gagny |
| Inception | 1884 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, marker 1, road 42, building 601, zone 3, wall 5).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145088468 historic=castle 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 601 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87586/2.5443) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q83716055 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/chateau-de-maison-blanche-q83716055.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
