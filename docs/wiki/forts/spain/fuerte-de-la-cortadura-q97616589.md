# Fuerte de la Cortadura

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-la-cortadura-q97616589` |
| Coordinates | 36.49402, -6.27099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.49402/-6.27099)) |
| Wikidata | [Q97616589](https://www.wikidata.org/wiki/Q97616589) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Cádiz |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 4, road 87, coastline 3, zone 6, wall 8, building 23, retaining-wall 6, water 1).

Evidence: documented 0, mapped 139, inferred 0, derived 1; heights documented 7, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14149808 historic=castle 81 m from ledger point
- origin moved 80 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":176,"medianInside":0,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.49402/-6.27099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q97616589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/fuerte-de-la-cortadura-q97616589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
