# Schloss Schwöbber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-schwobber-q2243438` |
| Coordinates | 52.06913, 9.25166 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.06913/9.25166)) |
| Wikidata | [Q2243438](https://www.wikidata.org/wiki/Q2243438) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Aerzen |
| Inception | 1570 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.schlosshotel-muenchhausen.com |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, road 52, wall 2, waterway 1, water 1, building 24, zone 5).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 3, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37800330 historic=castle Q2243438 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.06913/9.25166) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q2243438 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/schloss-schwobber-q2243438.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
