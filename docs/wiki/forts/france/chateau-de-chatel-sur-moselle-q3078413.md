# Château de Châtel-sur-Moselle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chatel-sur-moselle-q3078413` |
| Coordinates | 48.3124, 6.395 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3124/6.395)) |
| Wikidata | [Q3078413](https://www.wikidata.org/wiki/Q3078413) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fort |
| Administrative area | Châtel-sur-Moselle |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://chatel-medieval.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, marker 4, road 68, zone 3, building 363, retaining-wall 7, waterway 1, wall 20).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241169501 historic=castle Q3078413 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3124/6.395) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fort; sitelinks=2; wikidata:Q3078413 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/chateau-de-chatel-sur-moselle-q3078413.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
