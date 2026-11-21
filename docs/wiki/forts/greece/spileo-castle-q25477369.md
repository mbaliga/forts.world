# Spileo Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spileo-castle-q25477369` |
| Coordinates | 40.00667, 21.28333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.00667/21.28333)) |
| Wikidata | [Q25477369](https://www.wikidata.org/wiki/Q25477369) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Grevena Municipality |
| Designations | protected building in Greece |
| Wikipedia language editions | 2 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 13, building 5, cliff 1).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1084225471 historic=monastery 346 m from ledger point
- origin moved 354 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.00667/21.28333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q25477369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/spileo-castle-q25477369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
