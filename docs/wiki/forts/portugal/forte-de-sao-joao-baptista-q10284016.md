# Forte de São João Baptista

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-joao-baptista-q10284016` |
| Coordinates | 32.71822, -16.75865 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.71822/-16.75865)) |
| Wikidata | [Q10284016](https://www.wikidata.org/wiki/Q10284016) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage\|fort |
| Administrative area | Machico |
| Inception | 1708 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, marker 1, road 27, building 10, coastline 1, retaining-wall 1, wall 3, waterway 2, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 2, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/382696143 historic=fort Q10284016 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":237,"medianInside":0,"medianOutside":31.9}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.71822/-16.75865) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage\|fort; sitelinks=4; wikidata:Q10284016 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/forte-de-sao-joao-baptista-q10284016.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
