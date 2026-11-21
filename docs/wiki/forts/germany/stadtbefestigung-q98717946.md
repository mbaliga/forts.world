# Stadtbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q98717946` |
| Coordinates | 47.98485, 10.18116 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.98485/10.18116)) |
| Wikidata | [Q98717946](https://www.wikidata.org/wiki/Q98717946) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Memmingen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 320 elements (outline 1, marker 11, road 159, building 256, waterway 17, wall 20, retaining-wall 1).

Evidence: documented 0, mapped 320, inferred 0, derived 0; heights documented 7, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34177549 historic=yes Q1616843 240 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 256 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 240 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.98485/10.18116) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98717946 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 320 elements); data/traces/stadtbefestigung-q98717946.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
