# Château du Lude

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-lude-q657892` |
| Coordinates | 47.6475, 0.15889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6475/0.15889)) |
| Wikidata | [Q657892](https://www.wikidata.org/wiki/Q657892) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Le Lude |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.lelude.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, road 91, building 433, wall 1, zone 13, retaining-wall 2, water 1, waterway 2).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 5, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1388797494 historic=castle Q657892 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 433 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6475/0.15889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q657892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/chateau-du-lude-q657892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
