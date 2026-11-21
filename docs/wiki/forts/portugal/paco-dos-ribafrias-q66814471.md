# Paço dos Ribafrias

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paco-dos-ribafrias-q66814471` |
| Coordinates | 38.79611, -9.39114 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.79611/-9.39114)) |
| Wikidata | [Q66814471](https://www.wikidata.org/wiki/Q66814471) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|urban ensemble |
| Administrative area | Sintra (Santa Maria e São Miguel, São Martinho e São Pedro de Penaferrim) |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 6, road 148, building 154, retaining-wall 68, wall 37, zone 4, water 28, waterway 3).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 3, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172996787 historic=castle Q66814471 2 m from ledger point
- pruned to the outline plus 150 m: 449 -> 327 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 115 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.79611/-9.39114) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|urban ensemble; sitelinks=1; wikidata:Q66814471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/paco-dos-ribafrias-q66814471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
