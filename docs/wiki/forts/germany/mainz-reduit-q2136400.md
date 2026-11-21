# Mainz Reduit

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mainz-reduit-q2136400` |
| Coordinates | 50.0065, 8.28133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0065/8.28133)) |
| Wikidata | [Q2136400](https://www.wikidata.org/wiki/Q2136400) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Wiesbaden |
| Inception | 1830 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 4, road 276, building 152, zone 8, retaining-wall 11, wall 12, waterway 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 56, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/942729771 historic=fort Q2136400 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 276 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0065/8.28133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q2136400 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/mainz-reduit-q2136400.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
