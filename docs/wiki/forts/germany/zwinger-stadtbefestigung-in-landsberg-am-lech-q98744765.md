# Zwinger Stadtbefestigung in Landsberg am Lech

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zwinger-stadtbefestigung-in-landsberg-am-lech-q98744765` |
| Coordinates | 48.05037, 10.88106 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.05037/10.88106)) |
| Wikidata | [Q98744765](https://www.wikidata.org/wiki/Q98744765) (CC0) |
| Wikidata class | fortification |
| Types | zwinger |
| Administrative area | Landsberg am Lech |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 368 elements (outline 1, marker 4, road 472, wall 50, building 1163, zone 21, waterway 2, cliff 6, retaining-wall 12, water 1).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 8, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556442705 historic=citywalls Q1669435 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1163 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 472 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.05037/10.88106) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; zwinger; sitelinks=0; wikidata:Q98744765 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 368 elements); data/traces/zwinger-stadtbefestigung-in-landsberg-am-lech-q98744765.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
