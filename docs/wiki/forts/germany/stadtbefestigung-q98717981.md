# Stadtbefestigung

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q98717981` |
| Coordinates | 48.87444, 10.72334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87444/10.72334)) |
| Wikidata | [Q98717981](https://www.wikidata.org/wiki/Q98717981) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Wemding |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 280 elements (road 154, building 611, wall 10).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 1, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 611 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87444/10.72334) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98717981 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 280 elements); data/traces/stadtbefestigung-q98717981.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
