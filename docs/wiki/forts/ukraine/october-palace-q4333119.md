# October Palace

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `october-palace-q4333119` |
| Coordinates | 50.44987, 30.52784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.44987/30.52784)) |
| Wikidata | [Q4333119](https://www.wikidata.org/wiki/Q4333119) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|performing arts center\|architectural heritage monument\|house of culture |
| Administrative area | Kyiv |
| Designations | architectural heritage monument |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://icca.kiev.ua/ |

## What the model contains

Tier **T1**, status `outline+walls`, 372 elements (outline 1, marker 16, road 215, building 75, water 1, zone 51, wall 8, retaining-wall 4, waterway 1).

Evidence: documented 0, mapped 372, inferred 0, derived 0; heights documented 45, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62805186 historic=castle Q4333119 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.44987/30.52784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|performing arts center\|architectural heritage monument\|house of culture; sitelinks=11; wikidata:Q4333119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/october-palace-q4333119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
