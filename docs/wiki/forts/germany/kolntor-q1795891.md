# Kölntor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kolntor-q1795891` |
| Coordinates | 50.7781, 6.09321 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7781/6.09321)) |
| Wikidata | [Q1795891](https://www.wikidata.org/wiki/Q1795891) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Aachen |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 3, road 157, zone 4, water 4, waterway 2, building 214, wall 15).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 96, inferred 0, unknown 133.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/732795312 historic=monument Q1772000 510 m from ledger point
- origin moved 510 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7781/6.09321) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=2; wikidata:Q1795891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/kolntor-q1795891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
