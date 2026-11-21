# Tower of Roland

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-roland-q128377942` |
| Coordinates | 43.67603, 4.62976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67603/4.62976)) |
| Wikidata | [Q128377942](https://www.wikidata.org/wiki/Q128377942) (CC0) |
| Wikidata class | fort |
| Types | tower\|fortification |
| Administrative area | Arles |
| Inception | 0500 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 372 elements (outline 1, marker 9, road 217, building 583, wall 47, waterway 3, retaining-wall 23, zone 19).

Evidence: documented 0, mapped 372, inferred 0, derived 0; heights documented 30, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102108475 historic=citywalls 213 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 583 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 217 mapped (trace size budget); minor lanes are not drawn
- origin moved 213 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67603/4.62976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|fortification; sitelinks=1; wikidata:Q128377942 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/tower-of-roland-q128377942.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
