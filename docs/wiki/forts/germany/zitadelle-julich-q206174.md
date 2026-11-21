# Zitadelle Jülich

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zitadelle-julich-q206174` |
| Coordinates | 50.9255, 6.36006 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9255/6.36006)) |
| Wikidata | [Q206174](https://www.wikidata.org/wiki/Q206174) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Jülich |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 8, road 286, building 416, wall 6, zone 13, waterway 5, retaining-wall 14).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 65, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/988127917 historic=castle Q206174 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 416 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9255/6.36006) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=4; wikidata:Q206174 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/zitadelle-julich-q206174.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
