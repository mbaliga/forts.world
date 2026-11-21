# Karowa Gate in Gdańsk

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karowa-gate-in-gdansk-q118313593` |
| Coordinates | 54.3476, 18.6466 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.3476/18.6466)) |
| Wikidata | [Q118313593](https://www.wikidata.org/wiki/Q118313593) (CC0) |
| Wikidata class | fort |
| Types | bastion\|city gate\|destroyed building or structure |
| Administrative area | Gdańsk |
| Wikipedia language editions | 2 |
| OSM `historic` | fortification |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 366 elements (outline 1, marker 10, road 433, building 165, zone 48, waterway 4, wall 25, retaining-wall 8).

Evidence: documented 0, mapped 366, inferred 0, derived 0; heights documented 104, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/372264341 historic=fortification Q9166809 115 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 165 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 433 mapped (trace size budget); minor lanes are not drawn
- origin moved 114 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.3476/18.6466) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bastion\|city gate\|destroyed building or structure; sitelinks=2; wikidata:Q118313593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 366 elements); data/traces/karowa-gate-in-gdansk-q118313593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
