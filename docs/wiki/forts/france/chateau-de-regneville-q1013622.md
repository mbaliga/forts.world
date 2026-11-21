# Château de Regnéville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-regneville-q1013622` |
| Coordinates | 49.0075, -1.55306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0075/-1.55306)) |
| Wikidata | [Q1013622](https://www.wikidata.org/wiki/Q1013622) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Regnéville-sur-Mer |
| Inception | 1400 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, marker 3, coastline 2, road 24, zone 3, building 147, waterway 2, wall 1, water 2).

Evidence: documented 0, mapped 185, inferred 0, derived 2; heights documented 0, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48836426 historic=castle Q1013622 29 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":122,"medianInside":4.3,"medianOutside":11.6}
- sea-1: DEM check failed {"cells":329,"medianInside":10.4,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0075/-1.55306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1013622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 185 elements); data/traces/chateau-de-regneville-q1013622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
