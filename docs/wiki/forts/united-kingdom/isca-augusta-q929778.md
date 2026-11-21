# Isca Augusta

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `isca-augusta-q929778` |
| Coordinates | 51.60986, -2.9565 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.60986/-2.9565)) |
| Wikidata | [Q929778](https://www.wikidata.org/wiki/Q929778) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Caerleon |
| Designations | scheduled monument |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Six properties which previously served as a fortified estate, built by a local industrialist during the Chartist Risings to protect against his workers. Consists of a large expanse of elevated grass land and a 5-6m tall stone wall. |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 1, coastline 3, road 134, zone 8, waterway 3, building 406, wall 19, water 2).

Evidence: documented 0, mapped 291, inferred 0, derived 2; heights documented 13, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1034948367 historic=castle Q65079839 337 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 406 mapped (trace size budget); the rest of the town is not drawn
- origin moved 338 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":274,"medianInside":5.1,"medianOutside":13.6}
- sea-1: DEM check failed {"cells":2777,"medianInside":12.8,"medianOutside":5.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.60986/-2.9565) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=15; wikidata:Q929778 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/isca-augusta-q929778.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
