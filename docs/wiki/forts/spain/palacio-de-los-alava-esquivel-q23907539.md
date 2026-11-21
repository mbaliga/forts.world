# Palacio de los Álava Esquivel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-los-alava-esquivel-q23907539` |
| Coordinates | 42.84758, -2.67412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.84758/-2.67412)) |
| Wikidata | [Q23907539](https://www.wikidata.org/wiki/Q23907539) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Vitoria-Gasteiz |
| Inception | 1488 |
| Designations | Basque government heritage site |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 3, road 288, building 337, wall 26, zone 19, retaining-wall 5).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 1, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166478766 historic=castle Q23907539 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.84758/-2.67412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=3; wikidata:Q23907539 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/palacio-de-los-alava-esquivel-q23907539.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
