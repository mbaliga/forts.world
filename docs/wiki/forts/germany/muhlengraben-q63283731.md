# Mühlengraben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muhlengraben-q63283731` |
| Coordinates | 52.53846, 13.20166 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.53846/13.20166)) |
| Wikidata | [Q63283731](https://www.wikidata.org/wiki/Q63283731) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Spandau |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 4 |
| OSM `description` | Festung, bis zum 19. Jahrhundert auch Gefängnis für preußische Staatsgefangene |

## What the model contains

Tier **T1**, status `outline+walls`, 140 elements (outline 1, marker 1, road 81, water 5, building 33, waterway 8, wall 8, zone 3).

Evidence: documented 0, mapped 140, inferred 0, derived 0; heights documented 3, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4902365 historic=castle Q206211 803 m from ledger point
- origin moved 803 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.53846/13.20166) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=1; wikidata:Q63283731 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 140 elements); data/traces/muhlengraben-q63283731.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
