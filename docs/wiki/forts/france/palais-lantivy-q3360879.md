# Palais Lantivy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-lantivy-q3360879` |
| Coordinates | 41.91956, 8.73617 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.91956/8.73617)) |
| Wikidata | [Q3360879](https://www.wikidata.org/wiki/Q3360879) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|administrative building |
| Administrative area | Ajaccio |
| Inception | C19 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 222 elements (outline 1, marker 1, road 94, building 334, water 1, coastline 1, wall 3, zone 1).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4489137 historic=castle Q3360879 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 334 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.91956/8.73617) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|administrative building; sitelinks=4; wikidata:Q3360879 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 222 elements); data/traces/palais-lantivy-q3360879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
