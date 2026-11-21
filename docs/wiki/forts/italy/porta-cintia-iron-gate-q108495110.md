# Porta Cintia iron gate

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-cintia-iron-gate-q108495110` |
| Coordinates | 42.4044, 12.85634 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4044/12.85634)) |
| Wikidata | [Q108495110](https://www.wikidata.org/wiki/Q108495110) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rieti |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 3, road 181, water 1, building 245, wall 31, zone 13, waterway 2, retaining-wall 6).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 0, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1187648714 historic=archaeological_site 386 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 245 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 386 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4044/12.85634) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q108495110 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/porta-cintia-iron-gate-q108495110.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
