# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q98650651` |
| Coordinates | 48.0507, 10.87463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0507/10.87463)) |
| Wikidata | [Q98650651](https://www.wikidata.org/wiki/Q98650651) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Landsberg am Lech |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 3, road 215, building 525, waterway 20, zone 15, wall 25, retaining-wall 10, water 24, cliff 1).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 19, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/778850098 historic=citywalls Q1669435 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 525 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 215 mapped (trace size budget); minor lanes are not drawn
- origin moved 72 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0507/10.87463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98650651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/stadtmauer-q98650651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
