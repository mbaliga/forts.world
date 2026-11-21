# Bunker am Ludwigspark

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-am-ludwigspark-q105408422` |
| Coordinates | 49.24736, 6.98436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.24736/6.98436)) |
| Wikidata | [Q105408422](https://www.wikidata.org/wiki/Q105408422) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Saarbrücken |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | http://www.eurobahnhof-sb.de/mieten-und-kaufen/immobilien/wasserturm/ |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 3, road 308, building 64, zone 23, waterway 1, retaining-wall 6, wall 9).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 53, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/174735945 historic=yes Q107637233 477 m from ledger point
- roads capped: kept the 150 longest of 308 mapped (trace size budget); minor lanes are not drawn
- origin moved 476 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.24736/6.98436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q105408422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/bunker-am-ludwigspark-q105408422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
