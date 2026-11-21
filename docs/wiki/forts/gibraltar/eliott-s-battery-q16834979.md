# Eliott's Battery

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eliott-s-battery-q16834979` |
| Coordinates | 36.11162, -5.3501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.11162/-5.3501)) |
| Wikidata | [Q16834979](https://www.wikidata.org/wiki/Q16834979) (CC0) |
| Wikidata class | fort |
| Types | fort\|artillery battery |
| Administrative area | Gibraltar |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, marker 2, road 26, cliff 5, building 33, retaining-wall 4, zone 5, water 1, waterway 1, coastline 1, wall 4).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/967617734 historic=fort Q16838631 671 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 670 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.11162/-5.3501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|artillery battery; sitelinks=1; wikidata:Q16834979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 83 elements); data/traces/eliott-s-battery-q16834979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
