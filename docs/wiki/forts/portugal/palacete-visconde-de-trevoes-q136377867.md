# Palacete Visconde de Trevões

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-visconde-de-trevoes-q136377867` |
| Coordinates | 41.18347, -8.68291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18347/-8.68291)) |
| Wikidata | [Q136377867](https://www.wikidata.org/wiki/Q136377867) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|mansion |
| Administrative area | Matosinhos e Leça da Palmeira |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 2, road 223, building 139, waterway 1, water 4, wall 50, zone 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 20, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168970778 historic=castle Q136377867 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 139 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18347/-8.68291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|mansion; sitelinks=1; wikidata:Q136377867 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/palacete-visconde-de-trevoes-q136377867.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
