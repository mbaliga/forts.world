# Château de Pau

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-pau-q1480604` |
| Coordinates | 43.2948, -0.37558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.2948/-0.37558)) |
| Wikidata | [Q1480604](https://www.wikidata.org/wiki/Q1480604) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Pau |
| Designations | classified historical monument |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `website` | https://chateau-pau.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 4, road 323, waterway 16, building 199, water 4, retaining-wall 19, wall 22, zone 17).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 17, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62884273 historic=castle Q1480604 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 199 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.2948/-0.37558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=19; wikidata:Q1480604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/chateau-de-pau-q1480604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
