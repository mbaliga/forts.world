# Fort Geldria

> India · Tamil Nadu · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-geldria-sn195` |
| Coordinates | 13.418764, 80.315272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.418764/80.315272)) |
| Wikidata | [Q5471211](https://www.wikidata.org/wiki/Q5471211) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1613 |
| Wikipedia language editions | 4 |
| Programme catalogue | confidence medium, significance rank 5634; sources smith-newton:r195 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 68 elements (outline 1, zone 1, road 43, building 11, waterway 1, wall 2, water 9).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103450655 historic=fort Q5471211 125 m from ledger point
- origin moved 129 m from the ledger point to the outline centroid
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.418764/80.315272) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5634; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 68 elements); data/traces/fort-geldria-sn195.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
