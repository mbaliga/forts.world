# Hochbunker Walter-Dodde-Straße

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-walter-dodde-stra-e-q115918659` |
| Coordinates | 51.16127, 7.07573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.16127/7.07573)) |
| Wikidata | [Q115918659](https://www.wikidata.org/wiki/Q115918659) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Solingen |
| Inception | 1941 |
| Designations | architectural heritage monument in North Rhine-Westphalia\|cultural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 1, road 122, building 274, wall 8, zone 12).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/894733430 historic=ruins 324 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- origin moved 324 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.16127/7.07573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=2; wikidata:Q115918659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/hochbunker-walter-dodde-stra-e-q115918659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
