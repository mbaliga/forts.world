# Holbæk Slot

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `holb-k-slot-q12317014` |
| Coordinates | 55.71785, 11.70542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.71785/11.70542)) |
| Wikidata | [Q12317014](https://www.wikidata.org/wiki/Q12317014) (CC0) |
| Wikidata class | fort |
| Types | fortification\|hillfort |
| Administrative area | Holbæk Municipality |
| Inception | 1236 |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, coastline 1, road 187, building 138, wall 2, water 1, zone 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 3, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149033594 historic=yes 440 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 439 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.71785/11.70542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|hillfort; sitelinks=4; wikidata:Q12317014 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/holb-k-slot-q12317014.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
