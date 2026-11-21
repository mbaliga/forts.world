# Forte de Burgau

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-burgau-q17390194` |
| Coordinates | 37.07203, -8.77273 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.07203/-8.77273)) |
| Wikidata | [Q17390194](https://www.wikidata.org/wiki/Q17390194) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Budens |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | watchtower |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, road 58, building 12, wall 2, zone 2, cliff 1, coastline 1, water 1).

Evidence: documented 0, mapped 78, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13595046 historic=archaeological_site Q17390194 2 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":158,"medianInside":0,"medianOutside":31}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.07203/-8.77273) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=2; wikidata:Q17390194 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/forte-de-burgau-q17390194.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
