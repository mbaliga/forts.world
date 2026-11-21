# Ponferrada Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ponferrada-castle-q1049270` |
| Coordinates | 42.54417, -6.59361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.54417/-6.59361)) |
| Wikidata | [Q1049270](https://www.wikidata.org/wiki/Q1049270) (CC0) |
| Wikidata class | castle |
| Types | castle\|commandry\|monument |
| Administrative area | Ponferrada |
| Inception | 1178 |
| Designations | bien de interés cultural |
| UNESCO WHC id | 669-1806 |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 5, road 110, building 335, waterway 3, wall 17, zone 3).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/47131623 historic=castle Q1049270 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 335 mapped (trace size budget); the rest of the town is not drawn
- origin moved 42 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.54417/-6.59361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|commandry\|monument; sitelinks=15; wikidata:Q1049270 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/ponferrada-castle-q1049270.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
