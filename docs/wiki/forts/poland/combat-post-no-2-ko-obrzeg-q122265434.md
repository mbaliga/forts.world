# Combat post No. 2, Kołobrzeg

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `combat-post-no-2-ko-obrzeg-q122265434` |
| Coordinates | 54.18239, 15.54576 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.18239/15.54576)) |
| Wikidata | [Q122265434](https://www.wikidata.org/wiki/Q122265434) (CC0) |
| Wikidata class | fortification |
| Types | gun position |
| Administrative area | Kołobrzeg |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, marker 3, road 58, building 37, retaining-wall 2, coastline 14, zone 22, wall 2, waterway 1, water 2).

Evidence: documented 0, mapped 142, inferred 0, derived 2; heights documented 31, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/294823599 historic=yes 708 m from ledger point
- origin moved 708 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":294,"medianInside":1.5,"medianOutside":-2}
- sea-1: DEM check failed {"cells":360,"medianInside":1.3,"medianOutside":-5}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.18239/15.54576) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gun position; sitelinks=0; wikidata:Q122265434 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/combat-post-no-2-ko-obrzeg-q122265434.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
