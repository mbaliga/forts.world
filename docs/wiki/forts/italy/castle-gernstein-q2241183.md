# Castle Gernstein

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-gernstein-q2241183` |
| Coordinates | 46.66453, 11.54108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.66453/11.54108)) |
| Wikidata | [Q2241183](https://www.wikidata.org/wiki/Q2241183) (CC0) |
| Wikidata class | castle |
| Types | château\|tower house |
| Administrative area | Klausen |
| Designations | cultural heritage monument in South Tyrol |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `description` | Privat |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, waterway 2, zone 8, road 19, building 6, wall 3, cliff 2).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224321779 historic=castle Q2241183 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.66453/11.54108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|tower house; sitelinks=4; wikidata:Q2241183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/castle-gernstein-q2241183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
