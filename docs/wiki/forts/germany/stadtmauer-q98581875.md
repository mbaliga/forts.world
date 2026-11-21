# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q98581875` |
| Coordinates | 49.89308, 10.88846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.89308/10.88846)) |
| Wikidata | [Q98581875](https://www.wikidata.org/wiki/Q98581875) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bamberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 41, road 313, waterway 7, building 545, water 5, wall 30, retaining-wall 2, zone 2).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 110, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27009786 historic=yes Q439335 207 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 545 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 207 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.89308/10.88846) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98581875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/stadtmauer-q98581875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
