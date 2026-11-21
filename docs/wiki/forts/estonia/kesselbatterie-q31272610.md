# Kesselbatterie

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kesselbatterie-q31272610` |
| Coordinates | 59.45088, 24.75185 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.45088/24.75185)) |
| Wikidata | [Q31272610](https://www.wikidata.org/wiki/Q31272610) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Tallinn |
| Designations | architectural monument |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `website` | https://merekindlus.ee/ |

## What the model contains

Tier **T1**, status `outline+walls`, 135 elements (outline 1, road 61, building 28, coastline 1, wall 14, retaining-wall 2, zone 27, water 1).

Evidence: documented 0, mapped 135, inferred 0, derived 1; heights documented 20, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5192770 historic=fort Q14954945 546 m from ledger point
- origin moved 543 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":279,"medianInside":3.9,"medianOutside":10.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.45088/24.75185) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q31272610 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 135 elements); data/traces/kesselbatterie-q31272610.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
