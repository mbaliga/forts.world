# Castillo de San Fernando

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-fernando-q112147581` |
| Coordinates | 28.68939, -17.75992 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.68939/-17.75992)) |
| Wikidata | [Q112147581](https://www.wikidata.org/wiki/Q112147581) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Santa Cruz de La Palma |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, marker 6, road 97, building 85, waterway 1, retaining-wall 2, coastline 1, wall 1, zone 2, water 1).

Evidence: documented 0, mapped 197, inferred 0, derived 1; heights documented 0, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/743650613 historic=castle Q43091014 106 m from ledger point
- origin moved 105 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":32.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.68939/-17.75992) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q112147581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/castillo-de-san-fernando-q112147581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
