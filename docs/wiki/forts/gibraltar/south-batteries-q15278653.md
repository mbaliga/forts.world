# South Batteries

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `south-batteries-q15278653` |
| Coordinates | 36.11308, -5.34474 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.11308/-5.34474)) |
| Wikidata | [Q15278653](https://www.wikidata.org/wiki/Q15278653) (CC0) |
| Wikidata class | fort |
| Types | fort\|artillery battery |
| Administrative area | Gibraltar |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 137 elements (outline 1, marker 2, road 47, cliff 4, building 58, retaining-wall 5, zone 6, water 1, waterway 1, coastline 1, wall 11).

Evidence: documented 0, mapped 137, inferred 0, derived 0; heights documented 0, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/967617734 historic=fort Q16838631 532 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 532 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.11308/-5.34474) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|artillery battery; sitelinks=1; wikidata:Q15278653 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 137 elements); data/traces/south-batteries-q15278653.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
