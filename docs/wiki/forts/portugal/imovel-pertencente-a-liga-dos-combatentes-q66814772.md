# Imóvel pertencente à Liga dos Combatentes

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `imovel-pertencente-a-liga-dos-combatentes-q66814772` |
| Coordinates | 41.14757, -8.60416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14757/-8.60416)) |
| Wikidata | [Q66814772](https://www.wikidata.org/wiki/Q66814772) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|building |
| Administrative area | Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória |
| Designations | heritage without legal protection |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 3, road 156, retaining-wall 3, building 554, wall 207, water 2, zone 5, waterway 2).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 0, inferred 0, unknown 221.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223194882 historic=castle Q66814772 7 m from ledger point
- pruned to the outline plus 150 m: 933 -> 564 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 325 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14757/-8.60416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|building; sitelinks=0; wikidata:Q66814772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/imovel-pertencente-a-liga-dos-combatentes-q66814772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
