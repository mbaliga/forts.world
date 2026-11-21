# Megali Porta and to par' aftin tzami

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `megali-porta-and-to-par-aftin-tzami-q38381368` |
| Coordinates | 35.36729, 24.47437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.36729/24.47437)) |
| Wikidata | [Q38381368](https://www.wikidata.org/wiki/Q38381368) (CC0) |
| Wikidata class | fortification |
| Types | mosque\|city gate |
| Administrative area | Rethymno Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 4, road 105, building 366, coastline 2, zone 3, wall 11, water 1).

Evidence: documented 0, mapped 247, inferred 0, derived 1; heights documented 3, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5241882 historic=castle Q611427 629 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 366 mapped (trace size budget); the rest of the town is not drawn
- origin moved 629 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":454,"medianInside":0,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.36729/24.47437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; mosque\|city gate; sitelinks=1; wikidata:Q38381368 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/megali-porta-and-to-par-aftin-tzami-q38381368.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
