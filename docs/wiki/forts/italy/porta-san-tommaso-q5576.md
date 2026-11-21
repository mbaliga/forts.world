# Porta San Tommaso

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-tommaso-q5576` |
| Coordinates | 45.66963, 12.25069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.66963/12.25069)) |
| Wikidata | [Q5576](https://www.wikidata.org/wiki/Q5576) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Treviso |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 1, road 173, wall 5, waterway 6, building 407, zone 5, water 4).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1868331 historic=yes 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 407 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 173 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.66963/12.25069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q5576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/porta-san-tommaso-q5576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
