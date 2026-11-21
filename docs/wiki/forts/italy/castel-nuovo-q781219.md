# Castel Nuovo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-nuovo-q781219` |
| Coordinates | 40.83838, 14.25381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.83838/14.25381)) |
| Wikidata | [Q781219](https://www.wikidata.org/wiki/Q781219) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Naples |
| Inception | 1282 |
| Designations | Italian national heritage |
| Wikipedia language editions | 35 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.comune.napoli.it/vivere-il-comune/luoghi/castel-nuovo-maschio-angioino/ |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 3, road 256, coastline 1, building 38, wall 19, zone 13, retaining-wall 12, water 2).

Evidence: documented 0, mapped 345, inferred 0, derived 2; heights documented 6, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15009683 historic=castle Q781219 42 m from ledger point
- origin moved 43 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":0.2,"medianOutside":13.6}
- sea-1: DEM check ok {"cells":46,"medianInside":0,"medianOutside":14}
- 42 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.83838/14.25381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=35; wikidata:Q781219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/castel-nuovo-q781219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
