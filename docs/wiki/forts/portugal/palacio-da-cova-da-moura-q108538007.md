# Palácio da Cova da Moura

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-cova-da-moura-q108538007` |
| Coordinates | 38.70561, -9.16824 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.70561/-9.16824)) |
| Wikidata | [Q108538007](https://www.wikidata.org/wiki/Q108538007) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Estrela |
| Designations | Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `description` | O restauro de um palácio setecentista, propriedade de João Ulrich, segundo projeto do arq. Tertuliano de Lacerda Marques, foi considerado pelos críticos da época como tendo sido executado "dentro de uma arquitetura tradicionalista portuguesa das mais |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, road 179, retaining-wall 8, building 295, zone 13, wall 36, cliff 1, water 1, waterway 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 2, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1123088659 historic=castle Q108538007 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 295 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 179 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.70561/-9.16824) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q108538007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/palacio-da-cova-da-moura-q108538007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
