# Air-raid shelter am Weinberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `air-raid-shelter-am-weinberg-q4697629` |
| Coordinates | 51.30861, 9.48917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.30861/9.48917)) |
| Wikidata | [Q4697629](https://www.wikidata.org/wiki/Q4697629) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Kassel |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 3, road 288, waterway 2, zone 11, building 123, retaining-wall 3, wall 7, water 2).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 74, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1215037592 historic=building 285 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 123 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 285 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.30861/9.48917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=2; wikidata:Q4697629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/air-raid-shelter-am-weinberg-q4697629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
