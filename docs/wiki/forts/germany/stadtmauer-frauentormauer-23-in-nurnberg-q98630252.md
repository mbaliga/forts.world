# Stadtmauer Frauentormauer 23 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-frauentormauer-23-in-nurnberg-q98630252` |
| Coordinates | 49.44734, 11.07407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44734/11.07407)) |
| Wikidata | [Q98630252](https://www.wikidata.org/wiki/Q98630252) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `website` | https://mittelfranken.dgb.de/dgb-jugend-nrnberg-mittelfranken/anne-frank-turm |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 37, road 213, zone 9, building 161, wall 38).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 92, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32492658 historic=citywalls Q98630252 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44734/11.07407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/stadtmauer-frauentormauer-23-in-nurnberg-q98630252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
