# Lunette Senarmont

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lunette-senarmont-q115547340` |
| Coordinates | 54.35626, 18.63616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.35626/18.63616)) |
| Wikidata | [Q115547340](https://www.wikidata.org/wiki/Q115547340) (CC0) |
| Wikidata class | fortification |
| Types | lunette |
| Administrative area | Gdańsk |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, marker 27, road 761, building 269, zone 48, water 1, retaining-wall 12, wall 24, cliff 1).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 58, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/648706930 historic=fort 234 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 761 mapped (trace size budget); minor lanes are not drawn
- origin moved 233 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.35626/18.63616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lunette; sitelinks=0; wikidata:Q115547340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/lunette-senarmont-q115547340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
