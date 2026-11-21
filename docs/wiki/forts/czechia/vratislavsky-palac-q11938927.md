# Vratislavský palác

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vratislavsky-palac-q11938927` |
| Coordinates | 50.087, 14.40205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.087/14.40205)) |
| Wikidata | [Q11938927](https://www.wikidata.org/wiki/Q11938927) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Malá Strana |
| Inception | 1671 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 27, road 252, building 105, waterway 1, zone 5, wall 15, retaining-wall 7, water 3).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 78, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/69193 historic=castle Q11938927 6 m from ledger point
- roads capped: kept the 150 longest of 252 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.087/14.40205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q11938927 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/vratislavsky-palac-q11938927.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
