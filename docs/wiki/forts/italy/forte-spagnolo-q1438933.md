# Forte Spagnolo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-spagnolo-q1438933` |
| Coordinates | 42.35395, 13.40494 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.35395/13.40494)) |
| Wikidata | [Q1438933](https://www.wikidata.org/wiki/Q1438933) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | L'Aquila |
| Inception | 1534 |
| Designations | Italian national heritage |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 3, road 218, wall 56, building 34, zone 8, retaining-wall 10).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 0, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1450244 historic=castle Q1438933 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.35395/13.40494) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1438933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/forte-spagnolo-q1438933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
