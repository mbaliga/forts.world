# Ram Fortress

> Serbia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ram-fortress-q3396212` |
| Coordinates | 44.81278, 21.33 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.81278/21.33)) |
| Wikidata | [Q3396212](https://www.wikidata.org/wiki/Q3396212) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Veliko Gradište |
| Inception | 1483 |
| Designations | Immovable Cultural Heritage of Great Importance\|Monument of Culture of Great Importance |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 124 elements (outline 1, marker 2, road 26, building 76, wall 12, zone 6, cliff 1).

Evidence: documented 0, mapped 124, inferred 0, derived 0; heights documented 0, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11114156 historic=castle Q3396212 17 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- 41 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.81278/21.33) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=16; wikidata:Q3396212 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 124 elements); data/traces/ram-fortress-q3396212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/serbia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
