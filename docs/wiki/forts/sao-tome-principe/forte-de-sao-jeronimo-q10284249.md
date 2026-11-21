# Forte de São Jerónimo

> São Tomé & Príncipe · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-jeronimo-q10284249` |
| Coordinates | 0.33181, 6.7422 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/0.33181/6.7422)) |
| Wikidata | [Q10284249](https://www.wikidata.org/wiki/Q10284249) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Água Grande |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 21, building 34, coastline 1, zone 11, wall 1, water 1).

Evidence: documented 0, mapped 70, inferred 0, derived 1; heights documented 2, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/450472117 historic=ruins 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":212,"medianInside":0,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/0.33181/6.7422) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q10284249 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/forte-de-sao-jeronimo-q10284249.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sao-tome-principe.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
