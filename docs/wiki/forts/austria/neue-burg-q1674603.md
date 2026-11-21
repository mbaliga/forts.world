# Neue Burg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neue-burg-q1674603` |
| Coordinates | 48.2053, 16.3647 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2053/16.3647)) |
| Wikidata | [Q1674603](https://www.wikidata.org/wiki/Q1674603) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Former imperial residence: 1438 - 1583 and 1612 -1806, it was the seat of the kings and emperors of the Holy Roman Empire of the German Nation, thereafter the seat of the Emperor of Austria until 1918. Today it is the official seat of the Austrian Federal |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 62, road 919, building 183, zone 191, water 3, retaining-wall 10, wall 28).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 55, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3898175 historic=castle Q46242 148 m from ledger point
- pruned to the outline plus 150 m: 1397 -> 891 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 89 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 616 mapped (trace size budget); minor lanes are not drawn
- origin moved 148 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2053/16.3647) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=7; wikidata:Q1674603 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/neue-burg-q1674603.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
