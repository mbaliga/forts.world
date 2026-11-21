# Upton Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upton-castle-q21999745` |
| Coordinates | 51.70602, -4.86645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.70602/-4.86645)) |
| Wikidata | [Q21999745](https://www.wikidata.org/wiki/Q21999745) (CC0) |
| Wikidata class | castle |
| Types | castle\|garden |
| Administrative area | Cosheston |
| Designations | National Monument of Wales\|Grade II listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, marker 1, coastline 1, road 6, wall 4, building 10).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1001808582 historic=castle Q21999745 9 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.70602/-4.86645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|garden; sitelinks=3; wikidata:Q21999745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/upton-castle-q21999745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
