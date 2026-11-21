# Zwinger

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zwinger-q244823` |
| Coordinates | 51.9029, 10.4328 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9029/10.4328)) |
| Wikidata | [Q244823](https://www.wikidata.org/wiki/Q244823) (CC0) |
| Wikidata class | fortification |
| Types | battery tower |
| Administrative area | Goslar |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `website` | https://zwinger.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 2, road 94, waterway 2, water 3, building 186, wall 2, zone 1).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 9, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/76245436 historic=yes Q244823 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9029/10.4328) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; battery tower; sitelinks=3; wikidata:Q244823 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/zwinger-q244823.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
