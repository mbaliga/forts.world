# Donjon de Pertuis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-pertuis-q22986517` |
| Coordinates | 43.69416, 5.50176 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.69416/5.50176)) |
| Wikidata | [Q22986517](https://www.wikidata.org/wiki/Q22986517) (CC0) |
| Wikidata class | fortification |
| Types | keep\|bell chamber\|tourism office |
| Administrative area | Pertuis |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://pop.culture.gouv.fr/notice/merimee/PA00082134 |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 3, road 200, waterway 1, building 1030, wall 11, zone 1, retaining-wall 3).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 9, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84785353 historic=building 86 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1030 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 88 m from the ledger point to the centre of the mapped site
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.69416/5.50176) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep\|bell chamber\|tourism office; sitelinks=1; wikidata:Q22986517 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/donjon-de-pertuis-q22986517.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
