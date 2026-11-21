# City walls of Vernazza

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-vernazza-q113164406` |
| Coordinates | 44.13486, 9.68157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13486/9.68157)) |
| Wikidata | [Q113164406](https://www.wikidata.org/wiki/Q113164406) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Vernazza |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, road 72, building 135, coastline 1, zone 4, waterway 2, retaining-wall 5, cliff 2, wall 1, water 4).

Evidence: documented 0, mapped 227, inferred 0, derived 4; heights documented 14, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204991921 historic=castle Q3662947 59 m from ledger point
- origin moved 58 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":399,"medianInside":0,"medianOutside":24}
- sea-1: DEM check ok {"cells":400,"medianInside":0,"medianOutside":24}
- sea-2: DEM check ok {"cells":400,"medianInside":0,"medianOutside":24}
- sea-3: DEM check ok {"cells":289,"medianInside":0,"medianOutside":19.5}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13486/9.68157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113164406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/city-walls-of-vernazza-q113164406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
