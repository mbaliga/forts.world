# Bunker 7 Büdingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-7-budingen-q123997598` |
| Coordinates | 50.29828, 9.11303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.29828/9.11303)) |
| Wikidata | [Q123997598](https://www.wikidata.org/wiki/Q123997598) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Büdingen |
| Inception | 1936 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 24, road 90, building 428, zone 1, waterway 2, wall 17, retaining-wall 1).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26209796 historic=yes 522 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 428 mapped (trace size budget); the rest of the town is not drawn
- origin moved 522 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.29828/9.11303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q123997598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/bunker-7-budingen-q123997598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
