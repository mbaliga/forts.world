# Albertis Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `albertis-castle-q3662403` |
| Coordinates | 44.41842, 8.92461 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.41842/8.92461)) |
| Wikidata | [Q3662403](https://www.wikidata.org/wiki/Q3662403) (CC0) |
| Wikidata class | castle |
| Types | urban park\|castle |
| Administrative area | Genoa |
| Inception | 1892 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 2, road 187, building 212, zone 7, retaining-wall 8, wall 1, waterway 2).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 102, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154545927 historic=castle Q3662403 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.41842/8.92461) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; urban park\|castle; sitelinks=6; wikidata:Q3662403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/albertis-castle-q3662403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
