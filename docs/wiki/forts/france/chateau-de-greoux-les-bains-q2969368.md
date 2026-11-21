# Château de Gréoux-les-Bains

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-greoux-les-bains-q2969368` |
| Coordinates | 43.75995, 5.88356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.75995/5.88356)) |
| Wikidata | [Q2969368](https://www.wikidata.org/wiki/Q2969368) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Gréoux-les-Bains |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, road 145, zone 1, building 577, wall 4, waterway 18).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 2, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5378251 historic=castle Q2969368 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 577 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.75995/5.88356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2969368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/chateau-de-greoux-les-bains-q2969368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
