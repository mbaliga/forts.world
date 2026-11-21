# Vestingwerken Brielle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestingwerken-brielle-q17344566` |
| Coordinates | 51.90388, 4.16483 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.90388/4.16483)) |
| Wikidata | [Q17344566](https://www.wikidata.org/wiki/Q17344566) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortification |
| Administrative area | Voorne aan Zee |
| Designations | Rijksmonument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 79, road 423, building 2493, zone 50, water 16, waterway 4, wall 2, retaining-wall 12).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 4, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/954217740 historic=castle Q17344566 52 m from ledger point
- pruned to the outline plus 150 m: 3080 -> 3076 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 2493 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 423 mapped (trace size budget); minor lanes are not drawn
- origin moved 52 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.90388/4.16483) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortification; sitelinks=1; wikidata:Q17344566 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/vestingwerken-brielle-q17344566.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
