# Schkölen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schkolen-castle-q1013884` |
| Coordinates | 51.04194, 11.81944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04194/11.81944)) |
| Wikidata | [Q1013884](https://www.wikidata.org/wiki/Q1013884) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Schkölen |
| Inception | 0900 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Das Burggelände ist ausschließlich zu den Öffnungszeiten des Burgcafes in großen Teilen öffentlich zugänglich (im Winterhalbjahr eventuell geschossen?). |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 1, road 126, building 261, water 1, wall 13, zone 3, retaining-wall 14, waterway 2).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 17, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204358044 historic=castle Q1013884 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04194/11.81944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q1013884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/schkolen-castle-q1013884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
