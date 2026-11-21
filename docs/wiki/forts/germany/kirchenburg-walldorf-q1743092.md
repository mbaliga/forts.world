# Kirchenburg Walldorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kirchenburg-walldorf-q1743092` |
| Coordinates | 50.61296, 10.38823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.61296/10.38823)) |
| Wikidata | [Q1743092](https://www.wikidata.org/wiki/Q1743092) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|church building |
| Administrative area | Meiningen |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `barrier` | wall |
| OSM `website` | https://www.kirchenburg-walldorf.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 88, waterway 4, zone 9, building 357, water 1, wall 3).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264586467 historic=castle Q1743092 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.61296/10.38823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|church building; sitelinks=2; wikidata:Q1743092 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/kirchenburg-walldorf-q1743092.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
