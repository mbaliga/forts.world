# Clérans Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clerans-castle-q134881612` |
| Coordinates | 45.00913, 1.08883 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00913/1.08883)) |
| Wikidata | [Q134881612](https://www.wikidata.org/wiki/Q134881612) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Saint-Léon-sur-Vézère |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, marker 1, road 51, zone 4, waterway 1, building 116, water 2, wall 14).

Evidence: documented 0, mapped 190, inferred 0, derived 0; heights documented 25, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/364311725 historic=castle 2 m from ledger point
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00913/1.08883) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q134881612 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/clerans-castle-q134881612.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
