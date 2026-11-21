# Bäckertor (Landsberg am Lech)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `backertor-landsberg-am-lech-q18018912` |
| Coordinates | 48.05156, 10.87554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.05156/10.87554)) |
| Wikidata | [Q18018912](https://www.wikidata.org/wiki/Q18018912) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Landsberg am Lech |
| Inception | 1435 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 3, road 211, building 518, zone 15, waterway 12, wall 24, retaining-wall 12, water 17).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 15, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111733475 historic=citywalls Q1669435 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 518 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 43 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.05156/10.87554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=2; wikidata:Q18018912 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/backertor-landsberg-am-lech-q18018912.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
