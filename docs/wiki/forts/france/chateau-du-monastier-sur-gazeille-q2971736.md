# Château du Monastier-sur-Gazeille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-monastier-sur-gazeille-q2971736` |
| Coordinates | 44.9399, 3.9956 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.9399/3.9956)) |
| Wikidata | [Q2971736](https://www.wikidata.org/wiki/Q2971736) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Le Monastier-sur-Gazeille |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, marker 1, zone 1, road 96, water 1, building 410, wall 11).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 0, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167635060 historic=castle Q2971736 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 410 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.9399/3.9956) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2971736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/chateau-du-monastier-sur-gazeille-q2971736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
