# St Nicholas Curtain – Cottonera Lines

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-nicholas-curtain-cottonera-lines-q38608081` |
| Coordinates | 35.87665, 14.52256 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.87665/14.52256)) |
| Wikidata | [Q38608081](https://www.wikidata.org/wiki/Q38608081) (CC0) |
| Wikidata class | fortification |
| Types | curtain wall |
| Administrative area | Cospicua |
| Designations | Grade 1 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 2, road 192, wall 184, building 478, retaining-wall 2, water 1, coastline 1, zone 6).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 59, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548755011 historic=fort 490 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 867 -> 674 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 141 mapped (trace size budget); minor lanes are not drawn
- origin moved 490 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.87665/14.52256) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; curtain wall; sitelinks=1; wikidata:Q38608081 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/st-nicholas-curtain-cottonera-lines-q38608081.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
