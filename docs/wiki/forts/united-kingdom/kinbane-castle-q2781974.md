# Kinbane Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kinbane-castle-q2781974` |
| Coordinates | 55.2292, -6.29139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.2292/-6.29139)) |
| Wikidata | [Q2781974](https://www.wikidata.org/wiki/Q2781974) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | County Antrim |
| Inception | 1547 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, coastline 2, road 6, building 1, wall 1, cliff 2, zone 3, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/434341280 historic=castle Q2781974 23 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":945,"medianInside":5.3,"medianOutside":28.3}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.2292/-6.29139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=11; wikidata:Q2781974 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/kinbane-castle-q2781974.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
