# Castle defensive walls - relics in Wieliczka

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-defensive-walls-relics-in-wieliczka-q122187929` |
| Coordinates | 49.98382, 20.05969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.98382/20.05969)) |
| Wikidata | [Q122187929](https://www.wikidata.org/wiki/Q122187929) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Wieliczka |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 1 |
| OSM `website` | https://muzeum.wieliczka.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 5, road 352, building 222, wall 24, zone 8, retaining-wall 3).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 2, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148464900 historic=castle Q9386781 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 222 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 352 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.98382/20.05969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q122187929 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/castle-defensive-walls-relics-in-wieliczka-q122187929.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
