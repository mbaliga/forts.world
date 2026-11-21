# Porta Volta

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-volta-q3879055` |
| Coordinates | 45.48182, 9.18194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.48182/9.18194)) |
| Wikidata | [Q3879055](https://www.wikidata.org/wiki/Q3879055) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|tollbooth |
| Administrative area | Milan |
| Inception | 1880 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 5, road 155, zone 22, building 8, wall 6, waterway 1, retaining-wall 6).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 1, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1136835614 historic=tomb 558 m from ledger point
- origin moved 558 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.48182/9.18194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|tollbooth; sitelinks=4; wikidata:Q3879055 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/porta-volta-q3879055.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
