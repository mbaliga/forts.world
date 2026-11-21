# Newark Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `newark-castle-q2159678` |
| Coordinates | 55.93444, -4.6775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.93444/-4.6775)) |
| Wikidata | [Q2159678](https://www.wikidata.org/wiki/Q2159678) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Inverclyde |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 40, building 7, waterway 1, wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 53, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561844298 historic=castle Q2159678 28 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":676,"medianInside":8.3,"medianOutside":7.7}
- 121 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.93444/-4.6775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q2159678 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/newark-castle-q2159678.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
