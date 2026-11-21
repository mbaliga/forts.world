# Aalhofbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aalhofbunker-q300899` |
| Coordinates | 53.865, 10.6933 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.865/10.6933)) |
| Wikidata | [Q300899](https://www.wikidata.org/wiki/Q300899) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Lübeck's Old City |
| Inception | 1940 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 28, road 160, building 365, waterway 2, wall 5, water 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 49, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/139886757 historic=castle Q2243060 569 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 365 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 568 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.865/10.6933) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q300899 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/aalhofbunker-q300899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
