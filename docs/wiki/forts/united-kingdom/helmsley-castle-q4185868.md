# Helmsley Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `helmsley-castle-q4185868` |
| Coordinates | 54.2447, -1.06389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.2447/-1.06389)) |
| Wikidata | [Q4185868](https://www.wikidata.org/wiki/Q4185868) (CC0) |
| Wikidata class | castle |
| Types | castle\|history museum |
| Administrative area | Helmsley |
| Inception | 1988 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/helmsley-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 3, road 108, building 95, waterway 4, wall 91, zone 4).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 12, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/148758487 historic=castle Q4185868 18 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- 34 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.2447/-1.06389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|history museum; sitelinks=8; wikidata:Q4185868 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/helmsley-castle-q4185868.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
