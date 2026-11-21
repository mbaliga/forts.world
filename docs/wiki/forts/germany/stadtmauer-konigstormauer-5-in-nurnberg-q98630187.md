# Stadtmauer Königstormauer 5 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-konigstormauer-5-in-nurnberg-q98630187` |
| Coordinates | 49.44905, 11.08212 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44905/11.08212)) |
| Wikidata | [Q98630187](https://www.wikidata.org/wiki/Q98630187) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 2, road 255, wall 27, building 176, zone 5, retaining-wall 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 73, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/314043604 historic=citywalls Q98630187 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 176 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44905/11.08212) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630187 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/stadtmauer-konigstormauer-5-in-nurnberg-q98630187.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
