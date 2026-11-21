# Hausneindorf Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hausneindorf-castle-q1012236` |
| Coordinates | 51.8401, 11.2706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8401/11.2706)) |
| Wikidata | [Q1012236](https://www.wikidata.org/wiki/Q1012236) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Selke-Aue |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, road 113, waterway 12, building 229, zone 35, wall 41, water 4).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 1, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33885024 historic=castle Q1012236 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 229 mapped (trace size budget); the rest of the town is not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8401/11.2706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1012236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/hausneindorf-castle-q1012236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
