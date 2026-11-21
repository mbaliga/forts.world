# Château d'Aiguèze

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-aigueze-q5118715` |
| Coordinates | 44.30306, 4.55667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.30306/4.55667)) |
| Wikidata | [Q5118715](https://www.wikidata.org/wiki/Q5118715) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 3, road 134, building 247, water 1, waterway 2, cliff 4, zone 8, wall 7, retaining-wall 1).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1108539364 historic=castle 46 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 247 mapped (trace size budget); the rest of the town is not drawn
- origin moved 45 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.30306/4.55667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q5118715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/chateau-d-aigueze-q5118715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
