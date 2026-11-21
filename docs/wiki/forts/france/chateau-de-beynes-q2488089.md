# Château de Beynes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-beynes-q2488089` |
| Coordinates | 48.85639, 1.87444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85639/1.87444)) |
| Wikidata | [Q2488089](https://www.wikidata.org/wiki/Q2488089) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Beynes |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 199 elements (outline 1, road 74, zone 3, waterway 1, building 357).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32897798 historic=castle Q2488089 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85639/1.87444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2488089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 199 elements); data/traces/chateau-de-beynes-q2488089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
