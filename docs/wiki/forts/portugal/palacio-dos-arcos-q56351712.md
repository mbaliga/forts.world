# Palácio dos Arcos

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-arcos-q56351712` |
| Coordinates | 38.69599, -9.28972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69599/-9.28972)) |
| Wikidata | [Q56351712](https://www.wikidata.org/wiki/Q56351712) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|cultural heritage |
| Administrative area | Oeiras e São Julião da Barra, Paço de Arcos e Caxias |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 243 elements (outline 1, marker 1, road 93, retaining-wall 3, building 137, zone 2, wall 1, water 2, coastline 1, waterway 2).

Evidence: documented 0, mapped 243, inferred 0, derived 1; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101012558 historic=castle Q56351712 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":107,"medianInside":0,"medianOutside":20.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69599/-9.28972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|cultural heritage; sitelinks=2; wikidata:Q56351712 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 243 elements); data/traces/palacio-dos-arcos-q56351712.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
