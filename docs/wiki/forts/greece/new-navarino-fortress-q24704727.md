# New Navarino Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `new-navarino-fortress-q24704727` |
| Coordinates | 36.91218, 21.6912 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.91218/21.6912)) |
| Wikidata | [Q24704727](https://www.wikidata.org/wiki/Q24704727) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Municipality of Pylos-Nestor |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, marker 1, road 68, wall 10, building 36, zone 1, retaining-wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 121, inferred 0, derived 1; heights documented 28, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5241210 historic=castle Q24704727 40 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1538,"medianInside":0,"medianOutside":22.8}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.91218/21.6912) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=13; wikidata:Q24704727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/new-navarino-fortress-q24704727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
