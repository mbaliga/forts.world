# Zwingli-Hochbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zwingli-hochbunker-q26108820` |
| Coordinates | 53.09389, 8.79056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.09389/8.79056)) |
| Wikidata | [Q26108820](https://www.wikidata.org/wiki/Q26108820) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Walle |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 185 elements (outline 1, marker 1, road 63, building 456).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 44, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202611732 historic=yes Q2551685 626 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- origin moved 626 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.09389/8.79056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=2; wikidata:Q26108820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 185 elements); data/traces/zwingli-hochbunker-q26108820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
