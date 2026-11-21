# Slot Ostende

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `slot-ostende-q2034445` |
| Coordinates | 51.50347, 3.88933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.50347/3.88933)) |
| Wikidata | [Q2034445](https://www.wikidata.org/wiki/Q2034445) (CC0) |
| Wikidata class | castle |
| Types | castle\|restaurant\|château\|brewery |
| Administrative area | Goes |
| Inception | 1930 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Gebouw, waarin zich enkele overblijfselen bevinden van het voormalig Slot Oostende, met name een waarschijnlijk 14e eeuwse kelder. |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 6, road 161, water 1, zone 27, building 536, wall 24, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 8, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/286906191 historic=castle Q2034445 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 536 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.50347/3.88933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|restaurant\|château\|brewery; sitelinks=3; wikidata:Q2034445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/slot-ostende-q2034445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
