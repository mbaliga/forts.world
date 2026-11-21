# Starigrad Fortress

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `starigrad-fortress-q7601914` |
| Coordinates | 43.44472, 16.7 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.44472/16.7)) |
| Wikidata | [Q7601914](https://www.wikidata.org/wiki/Q7601914) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Omiš |
| Inception | 1500 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, zone 1, road 20, building 12, water 1, waterway 1, wall 1).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145033136 historic=castle Q7601914 40 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.44472/16.7) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=6; wikidata:Q7601914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/starigrad-fortress-q7601914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
