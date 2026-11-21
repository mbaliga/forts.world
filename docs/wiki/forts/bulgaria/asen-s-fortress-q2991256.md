# Asen's Fortress

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `asen-s-fortress-q2991256` |
| Coordinates | 41.98667, 24.87333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.98667/24.87333)) |
| Wikidata | [Q2991256](https://www.wikidata.org/wiki/Q2991256) (CC0) |
| Wikidata class | ruin |
| Types | fortress\|ruins |
| Administrative area | Plovdiv |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.asenovakrepost.eu |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, road 20, building 9, wall 9, cliff 4, waterway 1, zone 4).

Evidence: documented 0, mapped 48, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297002890 historic=castle Q2991256 10 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.98667/24.87333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fortress\|ruins; sitelinks=18; wikidata:Q2991256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/asen-s-fortress-q2991256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
