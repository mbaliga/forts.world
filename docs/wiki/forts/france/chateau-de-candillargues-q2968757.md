# Château de Candillargues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-candillargues-q2968757` |
| Coordinates | 43.61997, 4.06918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.61997/4.06918)) |
| Wikidata | [Q2968757](https://www.wikidata.org/wiki/Q2968757) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Candillargues |
| Inception | C17 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee/IA00028284 |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 3, road 84, zone 7, building 409, water 5, waterway 15, retaining-wall 5, wall 1).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117352237 historic=castle Q2968757 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 409 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.61997/4.06918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q2968757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/chateau-de-candillargues-q2968757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
