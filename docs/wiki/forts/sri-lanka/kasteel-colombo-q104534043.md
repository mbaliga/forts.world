# kasteel Colombo

> Sri Lanka · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasteel-colombo-q104534043` |
| Coordinates | 6.93417, 79.8461 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/6.93417/79.8461)) |
| Wikidata | [Q104534043](https://www.wikidata.org/wiki/Q104534043) (CC0) |
| Programme catalogue | confidence medium, significance rank 6330; sources wikidata:Q104534043 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 221 elements (outline 1, road 36, building 181, coastline 2, zone 1).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 18, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/441724047 historic=castle Q7241156 434 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 432 m from the ledger point to the outline centroid
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/6.93417/79.8461) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=6330; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 221 elements); data/traces/kasteel-colombo-q104534043.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
