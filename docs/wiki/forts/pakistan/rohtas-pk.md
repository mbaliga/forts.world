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
| OSM `heritage` | https://whc.unesco.org/en/list/586 |

## What the model contains

Tier **T1**, status `outline+walls`, 167 elements (outline 1, marker 8, water 2, waterway 1, road 118, wall 12, building 21, zone 4).

Evidence: documented 0, mapped 167, inferred 0, derived 0; heights documented 6, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3881907 historic=fort Q155188 254 m from ledger point
- origin moved 225 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.964/73.577) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

2026-11-16: hand level rohtasgarh.trace.js exists (Rohtasgarh, Bihar) but this Rohtas is the Pakistan fort; Commons search found only Langar Khani Gate plan 1922 (public domain, not fetched). Needs ASI/Pakistan survey drawings. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 167 elements); data/traces/rohtas-pk.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
