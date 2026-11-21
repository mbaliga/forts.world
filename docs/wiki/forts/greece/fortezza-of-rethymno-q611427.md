# Fortezza of Rethymno

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-of-rethymno-q611427` |
| Coordinates | 35.37215, 24.47082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.37215/24.47082)) |
| Wikidata | [Q611427](https://www.wikidata.org/wiki/Q611427) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Rethymno Municipality |
| Inception | 1573 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 8, road 113, building 368, coastline 2, zone 6, wall 14, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 1; heights documented 4, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5241882 historic=castle Q611427 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 368 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1752,"medianInside":0,"medianOutside":9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.37215/24.47082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=13; wikidata:Q611427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/fortezza-of-rethymno-q611427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
