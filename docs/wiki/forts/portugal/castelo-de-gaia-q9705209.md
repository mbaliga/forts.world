# Castelo de Gaia

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-gaia-q9705209` |
| Coordinates | 41.13986, -8.62445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.13986/-8.62445)) |
| Wikidata | [Q9705209](https://www.wikidata.org/wiki/Q9705209) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Santa Marinha e São Pedro da Afurada |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 3, road 155, building 215, retaining-wall 28, wall 99, water 4, zone 28, waterway 3).

Evidence: documented 0, mapped 263, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1503383206 historic=castle Q54475175 565 m from ledger point
- pruned to the outline plus 150 m: 536 -> 406 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 162 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 121 mapped (trace size budget); minor lanes are not drawn
- origin moved 564 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.13986/-8.62445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=2; wikidata:Q9705209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 263 elements); data/traces/castelo-de-gaia-q9705209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
