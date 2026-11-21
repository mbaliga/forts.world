# Castello Doria (Angri)

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-doria-angri-q111513049` |
| Coordinates | 40.73817, 14.57173 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.73817/14.57173)) |
| Wikidata | [Q111513049](https://www.wikidata.org/wiki/Q111513049) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Angri |
| Inception | 1290 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://www.comune.angri.sa.it/castello-doria.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 2, road 61, wall 2, building 196).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 1, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/147455183 historic=castle Q111513049 12 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.73817/14.57173) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q111513049 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/castello-doria-angri-q111513049.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
