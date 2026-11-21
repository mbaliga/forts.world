# Fort of Arrifana

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-arrifana-q10283602` |
| Coordinates | 37.29645, -8.87361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.29645/-8.87361)) |
| Wikidata | [Q10283602](https://www.wikidata.org/wiki/Q10283602) (CC0) |
| Wikidata class | fort |
| Types | fort\|historic building |
| Administrative area | Aljezur |
| Inception | 1635 |
| Designations | heritage without legal protection |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, road 17, cliff 3, wall 3, retaining-wall 2, building 7, waterway 1, coastline 1, zone 1, water 3).

Evidence: documented 0, mapped 39, inferred 0, derived 3; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7236795 historic=castle Q10283602 43 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":68,"medianInside":0,"medianOutside":0.1}
- sea-1: DEM check failed {"cells":32,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":79,"medianInside":0,"medianOutside":0}
- 83 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.29645/-8.87361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historic building; sitelinks=5; wikidata:Q10283602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/fort-of-arrifana-q10283602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
