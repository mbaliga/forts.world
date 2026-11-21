# Dömitz Fortress

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `domitz-fortress-q878560` |
| Coordinates | 53.1424, 11.2457 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1424/11.2457)) |
| Wikidata | [Q878560](https://www.wikidata.org/wiki/Q878560) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortress |
| Administrative area | Dömitz |
| Inception | 1559 |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://doemitz.de/sehenswuerdigkeiten/festung-doemitz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 6, waterway 3, road 109, building 289, zone 6, water 1, wall 10).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 11, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42318561 historic=castle Q878560 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1424/11.2457) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortress; sitelinks=6; wikidata:Q878560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/domitz-fortress-q878560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
