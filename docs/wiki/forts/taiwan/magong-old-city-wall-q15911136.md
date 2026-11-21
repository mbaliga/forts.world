# Magong Old City Wall

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `magong-old-city-wall-q15911136` |
| Coordinates | 23.56304, 119.5622 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.56304/119.5622)) |
| Wikidata | [Q15911136](https://www.wikidata.org/wiki/Q15911136) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Magong City |
| Inception | 1889 |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, marker 2, coastline 3, road 47, zone 1, wall 2, building 17, water 3).

Evidence: documented 0, mapped 76, inferred 0, derived 3; heights documented 4, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/687283761 historic=yes Q107418614 177 m from ledger point
- origin moved 178 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":11,"medianInside":4.3,"medianOutside":11.5}
- sea-1: DEM check ok {"cells":57,"medianInside":4.6,"medianOutside":12}
- sea-2: DEM check ok {"cells":25,"medianInside":3.4,"medianOutside":11.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.56304/119.5622) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q15911136 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/magong-old-city-wall-q15911136.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
