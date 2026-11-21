# Bolków Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bolkow-castle-q891409` |
| Coordinates | 50.92158, 16.09782 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.92158/16.09782)) |
| Wikidata | [Q891409](https://www.wikidata.org/wiki/Q891409) (CC0) |
| Wikidata class | ruin |
| Types | architectural heritage monument\|castle ruin |
| Administrative area | Bolków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.zamek-bolkow.info.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 4, road 152, building 258, wall 18, zone 12, water 1, waterway 3).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 7, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166155705 historic=castle Q891409 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.92158/16.09782) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; architectural heritage monument\|castle ruin; sitelinks=13; wikidata:Q891409 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/bolkow-castle-q891409.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
