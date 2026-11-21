# Tour du Loup (Étampes)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-du-loup-etampes-q22976068` |
| Coordinates | 48.43056, 2.15389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.43056/2.15389)) |
| Wikidata | [Q22976068](https://www.wikidata.org/wiki/Q22976068) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Étampes |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, road 45, building 348, waterway 6, wall 6).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80470997 historic=castle Q22924188 627 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 348 mapped (trace size budget); the rest of the town is not drawn
- origin moved 627 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.43056/2.15389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22976068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/tour-du-loup-etampes-q22976068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
