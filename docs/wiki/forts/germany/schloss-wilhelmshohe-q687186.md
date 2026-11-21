# Schloss Wilhelmshöhe

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-wilhelmshohe-q687186` |
| Coordinates | 51.315, 9.41611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.315/9.41611)) |
| Wikidata | [Q687186](https://www.wikidata.org/wiki/Q687186) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Kassel |
| Inception | 1786 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 18, road 218, building 8, waterway 9, water 7, zone 137, wall 11).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 12, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183224852 historic=castle Q687186 16 m from ledger point
- roads capped: kept the 150 longest of 218 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the outline centroid
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.315/9.41611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=20; wikidata:Q687186 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/schloss-wilhelmshohe-q687186.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
