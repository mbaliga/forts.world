# Mølleporten

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `m-lleporten-q16324175` |
| Coordinates | 54.98719, 12.28928 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.98719/12.28928)) |
| Wikidata | [Q16324175](https://www.wikidata.org/wiki/Q16324175) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vordingborg Municipality |
| Designations | monument on Kulturstyrelsen register |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 391 elements (outline 1, road 125, coastline 2, building 257, wall 4, zone 2).

Evidence: documented 0, mapped 391, inferred 0, derived 0; heights documented 26, inferred 0, unknown 235.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/377024578 historic=yes Q16324175 1 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.98719/12.28928) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q16324175 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 391 elements); data/traces/m-lleporten-q16324175.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
