# Jurakudai

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jurakudai-q910041` |
| Coordinates | 35.025, 135.74583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.025/135.74583)) |
| Wikidata | [Q910041](https://www.wikidata.org/wiki/Q910041) (CC0) |
| Wikidata class | fortification |
| Types | official residence\|hirajiro |
| Administrative area | Kyōto |
| Inception | 1587 |
| Wikipedia language editions | 10 |
| OSM `historic` | building |
| OSM `heritage` | 7 |

## What the model contains

Tier **T1**, status `outline-only`, 242 elements (outline 1, marker 7, road 103, building 602, waterway 2, retaining-wall 9).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 32, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/497958908 historic=building Q17230264 561 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 602 mapped (trace size budget); the rest of the town is not drawn
- origin moved 562 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.025/135.74583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; official residence\|hirajiro; sitelinks=10; wikidata:Q910041 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 242 elements); data/traces/jurakudai-q910041.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
