# Guia Fortress

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `guia-fortress-q3078465` |
| Coordinates | 22.1965, 113.55 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.1965/113.55)) |
| Wikidata | [Q3078465](https://www.wikidata.org/wiki/Q3078465) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Macau |
| Inception | 1865 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 13 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, road 101, zone 4, building 79, coastline 1, cliff 2, wall 7, retaining-wall 5).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 61, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/404669396 historic=fort Q3078465 38 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 37 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.1965/113.55) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=13; wikidata:Q3078465 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/guia-fortress-q3078465.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
