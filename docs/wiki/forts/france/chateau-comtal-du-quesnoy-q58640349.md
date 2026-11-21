# Château comtal du Quesnoy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-comtal-du-quesnoy-q58640349` |
| Coordinates | 50.2456, 3.63636 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2456/3.63636)) |
| Wikidata | [Q58640349](https://www.wikidata.org/wiki/Q58640349) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Le Quesnoy |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 1, road 72, water 6, building 487, wall 6, waterway 2, zone 1).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 4, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/85271162 historic=castle Q58640349 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 487 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2456/3.63636) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q58640349 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/chateau-comtal-du-quesnoy-q58640349.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
