# Castillo de Huétor

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-huetor-q6150918` |
| Coordinates | 37.19404, -4.04714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.19404/-4.04714)) |
| Wikidata | [Q6150918](https://www.wikidata.org/wiki/Q6150918) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle |
| Administrative area | Huétor Tájar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 1, road 77, waterway 4, building 817, water 3, wall 30, zone 4, retaining-wall 2).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 109, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/246221896 historic=building 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 817 mapped (trace size budget); the rest of the town is not drawn
- origin moved 25 m from the ledger point to the centre of the mapped site
- 51 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.19404/-4.04714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle; sitelinks=2; wikidata:Q6150918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/castillo-de-huetor-q6150918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
