# Motte-and-bailey castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `motte-and-bailey-castle-q56544274` |
| Coordinates | 43.7844, -0.0093 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7844/-0.0093)) |
| Wikidata | [Q56544274](https://www.wikidata.org/wiki/Q56544274) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Sainte-Christie-d'Armagnac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, marker 6, road 40, zone 8, building 54, waterway 1, wall 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 0, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/251896154 historic=castle 99 m from ledger point
- origin moved 99 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7844/-0.0093) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=0; wikidata:Q56544274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/motte-and-bailey-castle-q56544274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
