# Wachturm Nähe Marientormauer in Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-nahe-marientormauer-in-nurnberg-q98630195` |
| Coordinates | 49.45053, 11.083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45053/11.083)) |
| Wikidata | [Q98630195](https://www.wikidata.org/wiki/Q98630195) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 1, waterway 1, road 198, water 1, building 178, wall 32, zone 6, retaining-wall 5).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 64, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261756436 historic=citywalls Q98630192 36 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 178 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 198 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45053/11.083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98630195 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/wachturm-nahe-marientormauer-in-nurnberg-q98630195.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
