# Ľubovňa Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lubovna-castle-q1072570` |
| Coordinates | 49.31522, 20.69941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.31522/20.69941)) |
| Wikidata | [Q1072570](https://www.wikidata.org/wiki/Q1072570) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Stará Ľubovňa |
| Inception | 1400 |
| Designations | Cultural Heritage Monuments of Slovakia |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |
| OSM `website` | https://www.hradlubovna.sk/sk/home-sk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, marker 4, building 22, road 44, wall 10).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59242227 historic=castle Q1072570 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.31522/20.69941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q1072570 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/lubovna-castle-q1072570.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
