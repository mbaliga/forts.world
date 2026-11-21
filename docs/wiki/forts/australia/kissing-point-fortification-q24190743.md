# Kissing Point Fortification

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kissing-point-fortification-q24190743` |
| Coordinates | -19.2399, 146.8043 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-19.2399/146.8043)) |
| Wikidata | [Q24190743](https://www.wikidata.org/wiki/Q24190743) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Queensland |
| Designations | listed on the Queensland Heritage Register |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 3, road 118, coastline 2, zone 41, building 12, cliff 4, wall 2, retaining-wall 5, water 1).

Evidence: documented 0, mapped 189, inferred 0, derived 1; heights documented 1, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1112467669 historic=ruins 115 m from ledger point
- origin moved 115 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":158,"medianInside":5.1,"medianOutside":12.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-19.2399/146.8043) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q24190743 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/kissing-point-fortification-q24190743.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
