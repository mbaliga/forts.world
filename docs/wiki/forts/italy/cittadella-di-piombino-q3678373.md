# Cittadella di Piombino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cittadella-di-piombino-q3678373` |
| Coordinates | 42.92326, 10.52188 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.92326/10.52188)) |
| Wikidata | [Q3678373](https://www.wikidata.org/wiki/Q3678373) (CC0) |
| Wikidata class | fort |
| Types | citadel\|architectural ensemble |
| Administrative area | Piombino |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 1, road 119, building 105, zone 3, retaining-wall 18, wall 4, cliff 4, coastline 15, water 1).

Evidence: documented 0, mapped 271, inferred 0, derived 1; heights documented 20, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/163692704 historic=castle 395 m from ledger point
- origin moved 397 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":187,"medianInside":0,"medianOutside":14.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.92326/10.52188) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|architectural ensemble; sitelinks=3; wikidata:Q3678373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/cittadella-di-piombino-q3678373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
