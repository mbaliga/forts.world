# Janaburg Mautern

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `janaburg-mautern-q38129573` |
| Coordinates | 48.39267, 15.57932 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39267/15.57932)) |
| Wikidata | [Q38129573](https://www.wikidata.org/wiki/Q38129573) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mautern an der Donau |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, road 135, waterway 1, building 254, zone 14, wall 20).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 30, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/139981940 historic=castle Q38129573 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 254 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39267/15.57932) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q38129573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/janaburg-mautern-q38129573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
