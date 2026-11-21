# Château de Falaise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-falaise-q1011692` |
| Coordinates | 48.8932, -0.2039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8932/-0.2039)) |
| Wikidata | [Q1011692](https://www.wikidata.org/wiki/Q1011692) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Falaise |
| Inception | 1000 |
| Designations | classified historical monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.chateau-guillaume-leconquerant.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 5, road 186, building 352, wall 42, zone 17, waterway 5, cliff 1, retaining-wall 15, water 1).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 2, inferred 0, unknown 176.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45487091 historic=castle Q1011692 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 352 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 186 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8932/-0.2039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q1011692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/chateau-de-falaise-q1011692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
