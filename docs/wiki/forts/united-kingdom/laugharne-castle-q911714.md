# Laugharne Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `laugharne-castle-q911714` |
| Coordinates | 51.7696, -4.46205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.7696/-4.46205)) |
| Wikidata | [Q911714](https://www.wikidata.org/wiki/Q911714) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Laugharne Township |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 1, coastline 1, road 94, building 170, zone 8, waterway 4, wall 55, retaining-wall 4, water 4).

Evidence: documented 0, mapped 342, inferred 0, derived 4; heights documented 1, inferred 0, unknown 228.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/904217034 historic=castle Q911714 3 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1847,"medianInside":11.3,"medianOutside":2.4}
- sea-1: DEM check failed {"cells":1849,"medianInside":11.3,"medianOutside":null}
- sea-2: DEM check ok {"cells":46,"medianInside":5.4,"medianOutside":11.4}
- sea-3: DEM check ok {"cells":184,"medianInside":2.5,"medianOutside":12}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.7696/-4.46205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=14; wikidata:Q911714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/laugharne-castle-q911714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
