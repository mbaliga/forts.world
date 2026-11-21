# Château de Gannat

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gannat-q530673` |
| Coordinates | 46.10139, 3.19667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.10139/3.19667)) |
| Wikidata | [Q530673](https://www.wikidata.org/wiki/Q530673) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gannat |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |
| OSM `website` | https://pop.culture.gouv.fr/notice/merimee/PA00093106 |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 2, road 211, waterway 4, building 534, wall 86, zone 26, retaining-wall 3).

Evidence: documented 0, mapped 392, inferred 0, derived 0; heights documented 36, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1454172153 historic=castle Q530673 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 534 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.10139/3.19667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q530673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/chateau-de-gannat-q530673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
