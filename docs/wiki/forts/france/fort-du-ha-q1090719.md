# Fort du Hâ

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-ha-q1090719` |
| Coordinates | 44.8364, -0.5794 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8364/-0.5794)) |
| Wikidata | [Q1090719](https://www.wikidata.org/wiki/Q1090719) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Bordeaux |
| Designations | monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 1, road 183, building 489, wall 7, waterway 3, zone 25).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 2, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79981106 historic=yes Q18009262 244 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 489 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 245 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8364/-0.5794) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q1090719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/fort-du-ha-q1090719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
