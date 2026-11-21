# Terezská brána

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `terezska-brana-q39481726` |
| Coordinates | 49.5911, 17.25059 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5911/17.25059)) |
| Wikidata | [Q39481726](https://www.wikidata.org/wiki/Q39481726) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Olomouc |
| Designations | part of cultural heritage site in the Czech Republic |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 39, road 389, building 368, zone 43, waterway 1, wall 53, water 1, retaining-wall 8).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 31, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52937342 historic=castle Q12019280 145 m from ledger point
- pruned to the outline plus 150 m: 903 -> 587 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 257 mapped (trace size budget); minor lanes are not drawn
- origin moved 144 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5911/17.25059) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q39481726 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/terezska-brana-q39481726.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
