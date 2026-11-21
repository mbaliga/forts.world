# Stallburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stallburg-q774259` |
| Coordinates | 48.2072, 16.3672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2072/16.3672)) |
| Wikidata | [Q774259](https://www.wikidata.org/wiki/Q774259) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Stables of the Spanish Riding School. Horses visible from street. |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 25, road 202, building 60, zone 19, wall 14).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 58, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1360517 historic=castle Q774259 22 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2072/16.3672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q774259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/stallburg-q774259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
