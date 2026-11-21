# Fast Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fast-castle-q2557884` |
| Coordinates | 55.93244, -2.22386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.93244/-2.22386)) |
| Wikidata | [Q2557884](https://www.wikidata.org/wiki/Q2557884) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Scottish Borders |
| Inception | 1522 |
| Designations | scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, cliff 3, road 3, wall 1, coastline 2, zone 2, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1033473289 historic=ruins Q2557884 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":245,"medianInside":21.6,"medianOutside":29}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.93244/-2.22386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=6; wikidata:Q2557884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/fast-castle-q2557884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
