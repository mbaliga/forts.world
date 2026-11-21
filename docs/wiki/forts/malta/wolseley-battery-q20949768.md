# Wolseley Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wolseley-battery-q20949768` |
| Coordinates | 35.8355, 14.55775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8355/14.55775)) |
| Wikidata | [Q20949768](https://www.wikidata.org/wiki/Q20949768) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Marsaxlokk |
| Inception | 1897 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `fortification_type` | ringfort |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, coastline 1, road 30, building 9, zone 2, wall 18, water 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/549408049 historic=castle Q5472163 515 m from ledger point
- origin moved 505 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":52.2}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8355/14.55775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q20949768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/wolseley-battery-q20949768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
