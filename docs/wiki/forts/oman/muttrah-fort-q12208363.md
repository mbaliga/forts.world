# Muttrah Fort

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muttrah-fort-q12208363` |
| Coordinates | 23.61687, 58.59778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.61687/58.59778)) |
| Wikidata | [Q12208363](https://www.wikidata.org/wiki/Q12208363) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Muscat |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, marker 2, coastline 3, wall 1, road 4, zone 3, building 4, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2690780 historic=fort 15 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":161,"medianInside":4.9,"medianOutside":9.1}
- sea-1: DEM check ok {"cells":40,"medianInside":4.8,"medianOutside":8.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.61687/58.59778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q12208363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/muttrah-fort-q12208363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
