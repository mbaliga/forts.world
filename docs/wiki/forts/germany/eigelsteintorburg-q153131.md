# Eigelsteintorburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eigelsteintorburg-q153131` |
| Coordinates | 50.9493, 6.95681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9493/6.95681)) |
| Wikidata | [Q153131](https://www.wikidata.org/wiki/Q153131) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Altstadt-Nord |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 1, road 80, wall 3, zone 4, building 63, retaining-wall 2).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 52, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/422164073 historic=citywalls Q108154793 750 m from ledger point
- origin moved 750 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9493/6.95681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q153131 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/eigelsteintorburg-q153131.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
