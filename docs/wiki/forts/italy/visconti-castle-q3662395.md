# Visconti Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `visconti-castle-q3662395` |
| Coordinates | 45.32796, 8.42593 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.32796/8.42593)) |
| Wikidata | [Q3662395](https://www.wikidata.org/wiki/Q3662395) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vercelli |
| Inception | 1290 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, marker 16, road 151, building 198, wall 61, zone 12, retaining-wall 1, waterway 2, water 1).

Evidence: documented 0, mapped 364, inferred 0, derived 0; heights documented 55, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/991527177 historic=castle Q3662395 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 198 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.32796/8.42593) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3662395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/visconti-castle-q3662395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
