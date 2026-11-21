# Palace of the Dukes of Burgundy

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-dukes-of-burgundy-q2111621` |
| Coordinates | 47.32177, 5.04156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.32177/5.04156)) |
| Wikidata | [Q2111621](https://www.wikidata.org/wiki/Q2111621) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Dijon |
| Inception | 1737 |
| Designations | classified historical monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 25, road 372, building 468, wall 9, zone 6, waterway 3, water 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 23, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2345676 historic=castle Q2111621 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 468 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 372 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.32177/5.04156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=18; wikidata:Q2111621 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/palace-of-the-dukes-of-burgundy-q2111621.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
