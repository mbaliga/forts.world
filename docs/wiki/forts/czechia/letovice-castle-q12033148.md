# Letovice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `letovice-castle-q12033148` |
| Coordinates | 49.5431, 16.5753 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5431/16.5753)) |
| Wikidata | [Q12033148](https://www.wikidata.org/wiki/Q12033148) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://zamekletovice.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, marker 2, road 147, water 2, building 208, waterway 4, zone 6, retaining-wall 9, wall 12).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 95, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10900576 historic=castle Q12033148 90 m from ledger point
- origin moved 87 m from the ledger point to the centre of the mapped site
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5431/16.5753) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q12033148 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/letovice-castle-q12033148.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
