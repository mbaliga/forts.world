# Jordan's Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jordan-s-castle-q1703717` |
| Coordinates | 54.26, -5.609 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.26/-5.609)) |
| Wikidata | [Q1703717](https://www.wikidata.org/wiki/Q1703717) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `ruins` | castle |
| OSM `website` | https://www.communities-ni.gov.uk/heritage-sites/jordans-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 2, coastline 3, road 114, building 179, wall 21, zone 13, retaining-wall 2, water 2).

Evidence: documented 0, mapped 337, inferred 0, derived 2; heights documented 0, inferred 0, unknown 202.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561818296 historic=castle Q1703717 180 m from ledger point
- origin moved 180 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":3,"medianOutside":12.6}
- sea-1: DEM check ok {"cells":57,"medianInside":2,"medianOutside":14.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.26/-5.609) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q1703717 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/jordan-s-castle-q1703717.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
