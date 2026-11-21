# Rohtas Fort

> Pakistan · Punjab · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rohtas-pk` |
| Coordinates | 32.964, 73.577 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.964/73.577)) |
| Wikidata | [Q155188](https://www.wikidata.org/wiki/Q155188) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Jhelum District |
| Designations | World Heritage Site |
| UNESCO WHC id | 586 |
| Wikipedia language editions | 47 |
| Programme catalogue | confidence high, significance rank 6; sources catalogue:rohtas-pk;wikidata:Q155188;unesco:586;osm:n14114066217;osm:r3881907;smith-newton:r15 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, water 1, waterway 1, road 22, building 14).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3881907 historic=fort Q155188 215 m from ledger point
- origin moved 446 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.964/73.577) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

2026-11-16: hand level rohtasgarh.trace.js exists (Rohtasgarh, Bihar) but this Rohtas is the Pakistan fort; Commons search found only Langar Khani Gate plan 1922 (public domain, not fetched). Needs ASI/Pakistan survey drawings. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 167 elements); data/traces/rohtas-pk.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. 2026-11-18 geometry refetched at 1500 m, auto model rebuilt (39 elements, outline-only, one relation, 14 buildings, no mapped wall or gate). Plan held: Langar Khani Gate Plan (Commons PD), one gate only. T2 needs: a full-fort ASI/Hill plan (none open found among 59 search hits), gate positions, wall line (not mapped in OSM).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
