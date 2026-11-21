# Gaekwad Haveli

> India · Gujarat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gaekwad-haveli-sn607` |
| Coordinates | 23.016116, 72.580671 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.016116/72.580671)) |
| Programme catalogue | confidence medium, significance rank 5655; sources smith-newton:r607 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, water 1, road 84, waterway 1, building 19, zone 3, wall 1).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 7, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1136222353 historic=fort 894 m from ledger point
- origin moved 891 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.016116/72.580671) | 2026-11-17 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-17 |

## Ledger note

type=fort; confidence=medium; rank=5655; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/gaekwad-haveli-sn607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
