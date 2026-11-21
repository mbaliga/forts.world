# Spanish walls

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spanish-walls-q42412289` |
| Coordinates | 45.45194, 9.18837 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45194/9.18837)) |
| Wikidata | [Q42412289](https://www.wikidata.org/wiki/Q42412289) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|defensive wall |
| Administrative area | Milan |
| Inception | 1548 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, road 249, building 121, wall 33, waterway 2, zone 2).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 26, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/519115758 historic=building Q28668086 146 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 121 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 146 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45194/9.18837) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|defensive wall; sitelinks=4; wikidata:Q42412289 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/spanish-walls-q42412289.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
