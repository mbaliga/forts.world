# Lyngbyfortet

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lyngbyfortet-q12325251` |
| Coordinates | 55.76111, 12.49094 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.76111/12.49094)) |
| Wikidata | [Q12325251](https://www.wikidata.org/wiki/Q12325251) (CC0) |
| Wikidata class | fort |
| Types | fort\|ancient monument |
| Administrative area | Lyngby-Taarbæk Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 184 elements (outline 1, road 63, building 374).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4475619 historic=fort Q12325251 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 374 mapped (trace size budget); the rest of the town is not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.76111/12.49094) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|ancient monument; sitelinks=3; wikidata:Q12325251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 184 elements); data/traces/lyngbyfortet-q12325251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
