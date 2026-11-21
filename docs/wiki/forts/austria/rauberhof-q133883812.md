# Rauberhof

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rauberhof-q133883812` |
| Coordinates | 47.06889, 15.43861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.06889/15.43861)) |
| Wikidata | [Q133883812](https://www.wikidata.org/wiki/Q133883812) (CC0) |
| Wikidata class | castle |
| Types | castle\|building\|architectural landmark |
| Administrative area | Styria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `description` | Burg - Sitz der Landesregierung |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 22, road 634, water 7, building 100, waterway 3, wall 8, retaining-wall 5, zone 17).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 47, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/67773 historic=castle Q874547 536 m from ledger point
- roads capped: kept the 150 longest of 634 mapped (trace size budget); minor lanes are not drawn
- origin moved 532 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.06889/15.43861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building\|architectural landmark; sitelinks=1; wikidata:Q133883812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/rauberhof-q133883812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
