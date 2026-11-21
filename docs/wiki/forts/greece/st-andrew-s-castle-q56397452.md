# St. Andrew's Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-andrew-s-castle-q56397452` |
| Coordinates | 38.96012, 20.7535 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.96012/20.7535)) |
| Wikidata | [Q56397452](https://www.wikidata.org/wiki/Q56397452) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Preveza municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 1, coastline 2, road 109, building 427, zone 7, water 3).

Evidence: documented 0, mapped 244, inferred 0, derived 3; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113980086 historic=castle Q56397452 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 427 mapped (trace size budget); the rest of the town is not drawn
- origin moved 43 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":143,"medianInside":0,"medianOutside":10.2}
- sea-1: DEM check failed {"cells":956,"medianInside":9.7,"medianOutside":0}
- sea-2: DEM check ok {"cells":6,"medianInside":0,"medianOutside":9.7}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.96012/20.7535) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=0; wikidata:Q56397452 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/st-andrew-s-castle-q56397452.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
