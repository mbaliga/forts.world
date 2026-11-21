# Stadtmauer Frauentormauer 9 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-frauentormauer-9-in-nurnberg-q98630174` |
| Coordinates | 49.44699, 11.07868 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44699/11.07868)) |
| Wikidata | [Q98630174](https://www.wikidata.org/wiki/Q98630174) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 4, zone 8, road 260, wall 37, building 152, retaining-wall 2).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 71, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32392344 historic=citywalls Q98630174 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 260 mapped (trace size budget); minor lanes are not drawn
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44699/11.07868) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/stadtmauer-frauentormauer-9-in-nurnberg-q98630174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
