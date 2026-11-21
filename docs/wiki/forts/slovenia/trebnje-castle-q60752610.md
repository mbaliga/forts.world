# Trebnje Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trebnje-castle-q60752610` |
| Coordinates | 45.9043, 15.0061 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9043/15.0061)) |
| Wikidata | [Q60752610](https://www.wikidata.org/wiki/Q60752610) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 74 elements (outline 1, road 39, waterway 1, building 17, zone 16).

Evidence: documented 0, mapped 74, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4599994 historic=castle Q126825060 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 492 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9043/15.0061) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q60752610 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 74 elements); data/traces/trebnje-castle-q60752610.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
