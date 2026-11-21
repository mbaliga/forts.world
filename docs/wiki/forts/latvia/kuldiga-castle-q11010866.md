# Kuldiga Castle

> Latvia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuldiga-castle-q11010866` |
| Coordinates | 56.96888, 21.97649 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.96888/21.97649)) |
| Wikidata | [Q11010866](https://www.wikidata.org/wiki/Q11010866) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Kuldīga |
| Designations | archaeological monument of state importance in Latvia |
| Wikipedia language editions | 5 |
| OSM `historic` | building |
| OSM `description` | 2. vecākā koka ēka Kuldīgā |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 3, waterway 10, road 268, building 218, water 4, retaining-wall 8, zone 14, wall 2, cliff 2).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 22, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236624625 historic=building Q51281916 328 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 327 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.96888/21.97649) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=5; wikidata:Q11010866 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/kuldiga-castle-q11010866.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/latvia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
