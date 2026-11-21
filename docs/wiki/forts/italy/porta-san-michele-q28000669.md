# Porta San Michele

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-michele-q28000669` |
| Coordinates | 45.88618, 10.84204 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.88618/10.84204)) |
| Wikidata | [Q28000669](https://www.wikidata.org/wiki/Q28000669) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Riva del Garda |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `website` | https://www.cultura.trentino.it/Luoghi/Tutti-i-luoghi-della-cultura/Castelli/Rocca-di-Riva |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 5, road 208, building 137, wall 23, water 2, zone 73, retaining-wall 5, waterway 1).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 25, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/939915 historic=castle Q18288981 200 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 137 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 208 mapped (trace size budget); minor lanes are not drawn
- origin moved 200 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.88618/10.84204) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000669 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/porta-san-michele-q28000669.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
