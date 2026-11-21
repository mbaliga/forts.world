# Zenon Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zenon-tower-q19781` |
| Coordinates | 44.60889, 33.495 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.60889/33.495)) |
| Wikidata | [Q19781](https://www.wikidata.org/wiki/Q19781) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Chersonesus |
| Designations | federal cultural heritage site in Russia\|State Register of Immovable Monuments of Ukraine |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 4, road 111, building 27, wall 56, zone 9, coastline 1, water 3).

Evidence: documented 0, mapped 212, inferred 0, derived 2; heights documented 1, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101682555 historic=archaeological_site 141 m from ledger point
- origin moved 141 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":38,"medianInside":1.8,"medianOutside":6}
- sea-1: DEM check failed {"cells":400,"medianInside":5.6,"medianOutside":3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.60889/33.495) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q19781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/zenon-tower-q19781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
