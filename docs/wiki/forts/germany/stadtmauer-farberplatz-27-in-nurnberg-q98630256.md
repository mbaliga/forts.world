# Stadtmauer Färberplatz 27 in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-farberplatz-27-in-nurnberg-q98630256` |
| Coordinates | 49.44741, 11.07268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44741/11.07268)) |
| Wikidata | [Q98630256](https://www.wikidata.org/wiki/Q98630256) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 36, road 188, building 230, wall 33, zone 8).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 105, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32492653 historic=citywalls 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44741/11.07268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98630256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/stadtmauer-farberplatz-27-in-nurnberg-q98630256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
