# Château du Marché (Châlons-en-Champagne)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-du-marche-chalons-en-champagne-q20871736` |
| Coordinates | 48.95411, 4.36198 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.95411/4.36198)) |
| Wikidata | [Q20871736](https://www.wikidata.org/wiki/Q20871736) (CC0) |
| Wikidata class | castle |
| Types | bridge castle |
| Administrative area | Châlons-en-Champagne |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 2, road 110, building 474, water 3, zone 8, waterway 4, wall 7).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 11, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/679271244 historic=castle Q20871736 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 474 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.95411/4.36198) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; bridge castle; sitelinks=2; wikidata:Q20871736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/chateau-du-marche-chalons-en-champagne-q20871736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
