# Devanahalli Fort

> India · Bengaluru Urban district · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `devanahalli-fort-q5266481` |
| Coordinates | 13.249569, 77.708366 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.249569/77.708366)) |
| Wikidata | [Q5266481](https://www.wikidata.org/wiki/Q5266481) (CC0) |
| Wikidata class | fort |
| Types | fort\|geographical feature |
| Administrative area | Bengaluru Urban district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 8 |
| Programme catalogue | confidence high, significance rank 367; sources wikidata:Q5266481;smith-newton:r119 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 112 elements (road 93, wall 3, building 6, water 1, waterway 7, zone 2).

Evidence: documented 0, mapped 112, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8744577 historic=castle 153 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (409 x 255 m)
- origin moved 174 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.249569/77.708366) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

Alpha-Q batch (2026-11-11): 10 forts spread across A-Z starting at Q (seq 6); distinct from batch 0 and the K, H, L, X, S, T, Y, U, I sets. type=fort; confidence=high; rank=367; sources=2 \| 2026-11-14: auto-T1 built (data/traces/devanahalli-fort-q5266481.trace.json, outline+walls), smoke passes; no plan or survey yet, nothing historic drawn. docs/research/devanahalli-pass.md \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
