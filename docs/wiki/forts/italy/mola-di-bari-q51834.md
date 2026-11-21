# Mola di Bari

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mola-di-bari-q51834` |
| Coordinates | 41.06239, 17.09132 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.06239/17.09132)) |
| Wikidata | [Q51834](https://www.wikidata.org/wiki/Q51834) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|no\|comune of Italy |
| Administrative area | Metropolitan City of Bari |
| Wikipedia language editions | 56 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline-only`, 148 elements (outline 1, marker 3, road 81, coastline 2, building 57, waterway 1, water 3).

Evidence: documented 0, mapped 148, inferred 0, derived 3; heights documented 3, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/198816070 historic=castle Q51834 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":2.5,"medianOutside":6.3}
- sea-1: DEM check ok {"cells":64,"medianInside":0,"medianOutside":6.9}
- sea-2: DEM check failed {"cells":396,"medianInside":6.6,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.06239/17.09132) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|no\|comune of Italy; sitelinks=56; wikidata:Q51834 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 148 elements); data/traces/mola-di-bari-q51834.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
