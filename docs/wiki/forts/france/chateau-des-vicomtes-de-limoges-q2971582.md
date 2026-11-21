# Château des vicomtes de Limoges

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-vicomtes-de-limoges-q2971582` |
| Coordinates | 45.7944, 1.1417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.7944/1.1417)) |
| Wikidata | [Q2971582](https://www.wikidata.org/wiki/Q2971582) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aixe-sur-Vienne |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 5, road 122, waterway 3, building 262, retaining-wall 7, wall 5, cliff 1, zone 8).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 5, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/558303814 historic=castle Q2971582 225 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- origin moved 224 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.7944/1.1417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2971582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/chateau-des-vicomtes-de-limoges-q2971582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
