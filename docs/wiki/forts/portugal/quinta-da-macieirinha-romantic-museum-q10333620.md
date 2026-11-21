# Quinta da Macieirinha romantic museum

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `quinta-da-macieirinha-romantic-museum-q10333620` |
| Coordinates | 41.14762, -8.62845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.14762/-8.62845)) |
| Wikidata | [Q10333620](https://www.wikidata.org/wiki/Q10333620) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|manor house |
| Administrative area | Lordelo do Ouro e Massarelos |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 3, road 226, building 221, zone 95, wall 115, retaining-wall 20, water 11, waterway 5).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 5, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255778741 historic=castle Q10333620 3 m from ledger point
- pruned to the outline plus 150 m: 697 -> 324 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 65 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 147 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.14762/-8.62845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|manor house; sitelinks=2; wikidata:Q10333620 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/quinta-da-macieirinha-romantic-museum-q10333620.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
