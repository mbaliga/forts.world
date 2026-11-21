# Fort Tas-Silġ

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tas-silg-q5472163` |
| Coordinates | 35.84, 14.55694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.84/14.55694)) |
| Wikidata | [Q5472163](https://www.wikidata.org/wiki/Q5472163) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Marsaxlokk |
| Inception | 1879 |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `fortification_type` | ringfort |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, coastline 1, road 34, building 12, zone 3, wall 23, water 1).

Evidence: documented 0, mapped 75, inferred 0, derived 1; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/549408049 historic=castle Q5472163 30 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":52.2}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.84/14.55694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5472163 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/fort-tas-silg-q5472163.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
