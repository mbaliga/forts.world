# Frauentorgraben (Stadtgraben Nürnberg)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frauentorgraben-stadtgraben-nurnberg-q135156448` |
| Coordinates | 49.44718, 11.07284 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.44718/11.07284)) |
| Wikidata | [Q135156448](https://www.wikidata.org/wiki/Q135156448) (CC0) |
| Wikidata class | fortification |
| Administrative area | Nuremberg |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 36, road 188, building 230, wall 33, zone 8).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 105, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32492653 historic=citywalls 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.44718/11.07284) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; ; sitelinks=1; wikidata:Q135156448 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/frauentorgraben-stadtgraben-nurnberg-q135156448.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
