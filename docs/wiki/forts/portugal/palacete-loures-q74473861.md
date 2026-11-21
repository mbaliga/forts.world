# Palacete Loures

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacete-loures-q74473861` |
| Coordinates | 38.71002, -9.14004 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71002/-9.14004)) |
| Wikidata | [Q74473861](https://www.wikidata.org/wiki/Q74473861) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|cultural heritage\|mansion |
| Administrative area | Santa Maria Maior |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Conhecido por Palácio ou Palacete Loures, foi edificado provavelmente no séc. XIX, tendo sido residência dos Viscondes de Loures. Ficou também conhecido como Edifício do Grémio Literário, pois o mesmo aí esteve instalado desde 1875... |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 12, road 261, building 272, retaining-wall 13, wall 12, coastline 1, zone 4).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 64, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/97032418 historic=castle Q74473861 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 272 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 261 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71002/-9.14004) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|cultural heritage\|mansion; sitelinks=0; wikidata:Q74473861 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/palacete-loures-q74473861.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
