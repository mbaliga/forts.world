# Sandown Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sandown-castle-q7416497` |
| Coordinates | 51.2384, 1.4022 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2384/1.4022)) |
| Wikidata | [Q7416497](https://www.wikidata.org/wiki/Q7416497) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|fort |
| Administrative area | Deal |
| Inception | 1539 |
| Designations | scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, road 30, zone 2, coastline 1, water 3, waterway 1, building 108, wall 1).

Evidence: documented 0, mapped 147, inferred 0, derived 1; heights documented 1, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1078278274 historic=ruins Q7416497 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":683,"medianInside":-0.1,"medianOutside":3.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2384/1.4022) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|fort; sitelinks=8; wikidata:Q7416497 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/sandown-castle-q7416497.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
