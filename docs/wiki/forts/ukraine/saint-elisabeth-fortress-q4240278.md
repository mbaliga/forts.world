# Saint Elisabeth Fortress

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saint-elisabeth-fortress-q4240278` |
| Coordinates | 48.498, 32.254 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.498/32.254)) |
| Wikidata | [Q4240278](https://www.wikidata.org/wiki/Q4240278) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kropyvnytskyi |
| Wikipedia language editions | 34 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 14, road 265, building 242, wall 28, zone 21).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 42, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/355793873 historic=fort Q4240278 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 265 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.498/32.254) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=34; wikidata:Q4240278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/saint-elisabeth-fortress-q4240278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
