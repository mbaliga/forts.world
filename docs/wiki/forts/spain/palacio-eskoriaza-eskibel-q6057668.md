# Palacio Eskoriaza-Eskibel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-eskoriaza-eskibel-q6057668` |
| Coordinates | 42.84948, -2.6732 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.84948/-2.6732)) |
| Wikidata | [Q6057668](https://www.wikidata.org/wiki/Q6057668) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Vitoria-Gasteiz |
| Inception | 1530 |
| Designations | Basque government heritage site |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 6, road 261, building 431, wall 30, zone 23, water 1, retaining-wall 9).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 2, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45783803 historic=castle Q6057668 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 431 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 261 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.84948/-2.6732) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=3; wikidata:Q6057668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/palacio-eskoriaza-eskibel-q6057668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
