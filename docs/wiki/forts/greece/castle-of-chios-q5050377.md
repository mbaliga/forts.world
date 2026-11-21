# Castle of Chios

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-chios-q5050377` |
| Coordinates | 38.37297, 26.13594 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.37297/26.13594)) |
| Wikidata | [Q5050377](https://www.wikidata.org/wiki/Q5050377) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Chios Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 10 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, marker 3, road 109, zone 1, building 156, wall 1, coastline 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 274, inferred 0, derived 1; heights documented 44, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/288099490 historic=monument 26 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":109,"medianInside":0.1,"medianOutside":10.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.37297/26.13594) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=10; wikidata:Q5050377 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/castle-of-chios-q5050377.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
