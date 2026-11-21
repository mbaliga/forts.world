# Château de Gien

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gien-q761920` |
| Coordinates | 47.68472, 2.63187 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.68472/2.63187)) |
| Wikidata | [Q761920](https://www.wikidata.org/wiki/Q761920) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gien |
| Designations | classified historical monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateaumuseegien.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 1, road 241, building 375, zone 9, waterway 2, wall 4, retaining-wall 6).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 3, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211501781 historic=castle Q761920 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 241 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.68472/2.63187) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q761920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/chateau-de-gien-q761920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
