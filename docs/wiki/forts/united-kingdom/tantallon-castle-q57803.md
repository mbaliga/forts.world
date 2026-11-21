# Tantallon Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tantallon-castle-q57803` |
| Coordinates | 56.05639, -2.65056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.05639/-2.65056)) |
| Wikidata | [Q57803](https://www.wikidata.org/wiki/Q57803) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | East Lothian |
| Inception | 1350 |
| Designations | scheduled monument |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/tantallon-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, marker 2, road 8, waterway 1, building 5, coastline 3, cliff 3, wall 5, zone 7, water 3).

Evidence: documented 0, mapped 38, inferred 0, derived 3; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59806740 historic=castle Q57803 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1598,"medianInside":8.1,"medianOutside":11}
- sea-1: DEM check ok {"cells":975,"medianInside":3.4,"medianOutside":22.1}
- sea-2: DEM check ok {"cells":1598,"medianInside":8.1,"medianOutside":11}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.05639/-2.65056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=19; wikidata:Q57803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/tantallon-castle-q57803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
