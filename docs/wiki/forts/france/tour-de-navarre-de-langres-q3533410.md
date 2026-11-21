# Tour de Navarre de Langres

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-navarre-de-langres-q3533410` |
| Coordinates | 47.8602, 5.3283 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8602/5.3283)) |
| Wikidata | [Q3533410](https://www.wikidata.org/wiki/Q3533410) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Langres |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 5, road 171, building 570, wall 13, water 1, zone 1, retaining-wall 3).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63715414 historic=building Q22985208 478 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 570 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn
- origin moved 477 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8602/5.3283) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q3533410 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/tour-de-navarre-de-langres-q3533410.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
