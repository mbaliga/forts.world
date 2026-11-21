# Château de Rieux-Minervois

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-rieux-minervois-q2970371` |
| Coordinates | 43.284, 2.5857 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.284/2.5857)) |
| Wikidata | [Q2970371](https://www.wikidata.org/wiki/Q2970371) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rieux-Minervois |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 1, road 97, building 631, waterway 2, retaining-wall 1, zone 6, wall 1).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/541906166 historic=castle Q2970371 26 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 631 mapped (trace size budget); the rest of the town is not drawn
- origin moved 28 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.284/2.5857) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2970371 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/chateau-de-rieux-minervois-q2970371.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
