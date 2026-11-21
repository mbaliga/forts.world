# Kyrenia Castle

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kyrenia-castle-q1408931` |
| Coordinates | 35.34161, 33.32236 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.34161/33.32236)) |
| Wikidata | [Q1408931](https://www.wikidata.org/wiki/Q1408931) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kyrenia |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, marker 3, road 140, building 69, zone 2, coastline 5, wall 1, water 2).

Evidence: documented 0, mapped 223, inferred 0, derived 2; heights documented 45, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154898919 historic=castle Q1408931 12 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":291,"medianInside":0,"medianOutside":13.2}
- sea-1: DEM check failed {"cells":563,"medianInside":4.2,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.34161/33.32236) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=26; wikidata:Q1408931 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/kyrenia-castle-q1408931.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
