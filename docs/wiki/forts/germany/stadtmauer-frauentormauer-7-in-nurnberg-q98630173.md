# Stadtmauer Frauentormauer 7 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-frauentormauer-7-in-nurnberg-q98630173` |
| Coordinates | 49.44704, 11.07927 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44704/11.07927)) |
| Wikidata | [Q98630173](https://www.wikidata.org/wiki/Q98630173) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 4, zone 7, road 395, wall 40, building 158, retaining-wall 2).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 72, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32392343 historic=citywalls Q98630173 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 395 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44704/11.07927) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630173 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/stadtmauer-frauentormauer-7-in-nurnberg-q98630173.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
