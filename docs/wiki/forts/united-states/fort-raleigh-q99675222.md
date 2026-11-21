# Fort Raleigh

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-raleigh-q99675222` |
| Coordinates | 35.93818, -75.70888 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.93818/-75.70888)) |
| Wikidata | [Q99675222](https://www.wikidata.org/wiki/Q99675222) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dare County |
| Inception | 1680 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 3, road 33, building 10, coastline 1, water 1).

Evidence: documented 0, mapped 50, inferred 0, derived 1; heights documented 1, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295323225 historic=ruins 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":37,"medianInside":-1.1,"medianOutside":4.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.93818/-75.70888) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q99675222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/fort-raleigh-q99675222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
