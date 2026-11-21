# Ehem. Stadtmauer an der Zehntscheune

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ehem-stadtmauer-an-der-zehntscheune-q47530284` |
| Coordinates | 50.56489, 8.15475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.56489/8.15475)) |
| Wikidata | [Q47530284](https://www.wikidata.org/wiki/Q47530284) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Mengerskirchen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 198 elements (outline 1, road 72, zone 1, building 338, wall 2, waterway 2).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/838220326 historic=castle Q1013110 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.56489/8.15475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q47530284 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 198 elements); data/traces/ehem-stadtmauer-an-der-zehntscheune-q47530284.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
