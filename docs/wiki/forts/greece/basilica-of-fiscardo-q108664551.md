# Basilica of Fiscardo

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `basilica-of-fiscardo-q108664551` |
| Coordinates | 38.46244, 20.58055 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.46244/20.58055)) |
| Wikidata | [Q108664551](https://www.wikidata.org/wiki/Q108664551) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortification\|castle\|early Christian basilica |
| Administrative area | Kefalonia Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortification |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, coastline 1, road 12, building 6, wall 6, water 3).

Evidence: documented 0, mapped 29, inferred 0, derived 3; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/288043378 historic=castle Q108664551 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":53,"medianInside":0,"medianOutside":12.3}
- sea-1: DEM check ok {"cells":1,"medianInside":-0.3,"medianOutside":11.1}
- sea-2: DEM check ok {"cells":18,"medianInside":0.2,"medianOutside":11.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.46244/20.58055) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortification\|castle\|early Christian basilica; sitelinks=1; wikidata:Q108664551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/basilica-of-fiscardo-q108664551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
