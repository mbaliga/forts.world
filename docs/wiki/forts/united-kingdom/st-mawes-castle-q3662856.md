# St Mawes Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-mawes-castle-q3662856` |
| Coordinates | 50.1554, -5.02394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1554/-5.02394)) |
| Wikidata | [Q3662856](https://www.wikidata.org/wiki/Q3662856) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | St Just in Roseland |
| Inception | 1539 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, marker 6, road 26, building 38, wall 8, coastline 2, zone 7, waterway 1, water 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 0, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161753107 historic=castle 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":712,"medianInside":-2.8,"medianOutside":14.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1554/-5.02394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=10; wikidata:Q3662856 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/st-mawes-castle-q3662856.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
