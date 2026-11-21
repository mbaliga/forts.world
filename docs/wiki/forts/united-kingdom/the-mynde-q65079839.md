# The Mynde

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-mynde-q65079839` |
| Coordinates | 51.6098, -2.95153 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6098/-2.95153)) |
| Wikidata | [Q65079839](https://www.wikidata.org/wiki/Q65079839) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|building |
| Administrative area | Newport |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Six properties which previously served as a fortified estate, built by a local industrialist during the Chartist Risings to protect against his workers. Consists of a large expanse of elevated grass land and a 5-6m tall stone wall. |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 1, coastline 3, road 134, zone 8, waterway 3, building 406, wall 19, water 2).

Evidence: documented 0, mapped 291, inferred 0, derived 2; heights documented 13, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1034948367 historic=castle Q65079839 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":74,"medianInside":5.2,"medianOutside":13.5}
- sea-1: DEM check failed {"cells":719,"medianInside":12.8,"medianOutside":5.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6098/-2.95153) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|building; sitelinks=2; wikidata:Q65079839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/the-mynde-q65079839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
