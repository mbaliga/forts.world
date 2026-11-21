# U Tří jetelových lístků

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `u-tri-jetelovych-listku-q31833867` |
| Coordinates | 50.08623, 14.4038 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08623/14.4038)) |
| Wikidata | [Q31833867](https://www.wikidata.org/wiki/Q31833867) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|house |
| Administrative area | Malá Strana |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 26, road 254, building 103, waterway 1, zone 5, wall 14, retaining-wall 6, water 3).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 82, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30325783 historic=castle Q31833867 2 m from ledger point
- roads capped: kept the 150 longest of 254 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08623/14.4038) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|house; sitelinks=0; wikidata:Q31833867 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/u-tri-jetelovych-listku-q31833867.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
