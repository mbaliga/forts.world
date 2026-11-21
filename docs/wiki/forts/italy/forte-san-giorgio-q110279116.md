# Forte San Giorgio

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-san-giorgio-q110279116` |
| Coordinates | 44.41946, 8.92124 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.41946/8.92124)) |
| Wikidata | [Q110279116](https://www.wikidata.org/wiki/Q110279116) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Genoa |
| Inception | 1818 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 2, road 187, building 212, zone 7, retaining-wall 8, wall 1, waterway 2).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 102, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/154545927 historic=castle Q3662403 306 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 307 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.41946/8.92124) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q110279116 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/forte-san-giorgio-q110279116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
