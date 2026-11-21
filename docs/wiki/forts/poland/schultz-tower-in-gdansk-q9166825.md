# Schultz Tower in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schultz-tower-in-gdansk-q9166825` |
| Coordinates | 54.3483, 18.6478 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.3483/18.6478)) |
| Wikidata | [Q9166825](https://www.wikidata.org/wiki/Q9166825) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Gdańsk |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 9, road 379, building 199, zone 42, waterway 1, wall 25, retaining-wall 8).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 105, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/435276493 historic=fortification 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 199 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 379 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.3483/18.6478) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q9166825 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/schultz-tower-in-gdansk-q9166825.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
