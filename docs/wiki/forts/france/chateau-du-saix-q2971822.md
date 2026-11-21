# Château du Saix

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-saix-q2971822` |
| Coordinates | 46.0669, 6.31444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.0669/6.31444)) |
| Wikidata | [Q2971822](https://www.wikidata.org/wiki/Q2971822) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | La Roche-sur-Foron |
| Inception | 1200 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 221 elements (outline 1, marker 7, road 91, building 302, zone 2).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111116755 historic=castle Q2971822 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 302 mapped (trace size budget); the rest of the town is not drawn
- origin moved 40 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.0669/6.31444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2971822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 221 elements); data/traces/chateau-du-saix-q2971822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
