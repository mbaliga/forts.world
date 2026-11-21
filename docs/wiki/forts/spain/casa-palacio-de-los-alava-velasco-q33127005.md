# Casa Palacio de los Álava-Velasco

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-palacio-de-los-alava-velasco-q33127005` |
| Coordinates | 42.85146, -2.6736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.85146/-2.6736)) |
| Wikidata | [Q33127005](https://www.wikidata.org/wiki/Q33127005) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Vitoria-Gasteiz |
| Designations | Basque government heritage site |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 8, road 194, building 237, zone 18, wall 13, water 1, retaining-wall 5).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 3, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166478738 historic=castle Q33127005 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.85146/-2.6736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=2; wikidata:Q33127005 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/casa-palacio-de-los-alava-velasco-q33127005.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
