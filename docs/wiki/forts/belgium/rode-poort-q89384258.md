# Rode Poort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rode-poort-q89384258` |
| Coordinates | 51.22455, 4.41457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.22455/4.41457)) |
| Wikidata | [Q89384258](https://www.wikidata.org/wiki/Q89384258) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Antwerp |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `description` | Het Hof van Liere is een 16de-eeuws stadspaleis met binnenkoeren, tuinen en galerijen. Burgemeester Arnold van Liere liet het gigantische paleis tussen 1515 en 1520 bouwen in Brabants-Gotische stijl |

## What the model contains

Tier **T1**, status `outline-only`, 243 elements (outline 1, marker 2, road 91, building 601, zone 29).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13457185 historic=castle 368 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 601 mapped (trace size budget); the rest of the town is not drawn
- origin moved 350 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.22455/4.41457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q89384258 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 243 elements); data/traces/rode-poort-q89384258.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
