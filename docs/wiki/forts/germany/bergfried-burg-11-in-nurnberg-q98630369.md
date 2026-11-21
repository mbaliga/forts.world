# Bergfried Burg 11 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergfried-burg-11-in-nurnberg-q98630369` |
| Coordinates | 49.45781, 11.07658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45781/11.07658)) |
| Wikidata | [Q98630369](https://www.wikidata.org/wiki/Q98630369) (CC0) |
| Wikidata class | fortification |
| Types | tower\|Bergfried |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 7, road 203, building 249, zone 11, wall 27, retaining-wall 6, cliff 2, water 1).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 57, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136180828 historic=citywalls 96 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 203 mapped (trace size budget); minor lanes are not drawn
- origin moved 96 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45781/11.07658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|Bergfried; sitelinks=2; wikidata:Q98630369 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/bergfried-burg-11-in-nurnberg-q98630369.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
