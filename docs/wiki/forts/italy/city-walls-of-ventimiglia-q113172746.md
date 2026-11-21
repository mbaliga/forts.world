# City walls of Ventimiglia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-ventimiglia-q113172746` |
| Coordinates | 43.79428, 7.58698 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.79428/7.58698)) |
| Wikidata | [Q113172746](https://www.wikidata.org/wiki/Q113172746) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ventimiglia |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 66 elements (outline 1, road 15, cliff 1, building 41, zone 4, coastline 1, retaining-wall 2, water 1).

Evidence: documented 0, mapped 66, inferred 0, derived 1; heights documented 0, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/688321382 historic=fort Q3748617 685 m from ledger point
- origin moved 686 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":19,"medianInside":0.3,"medianOutside":98.3}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.79428/7.58698) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113172746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 66 elements); data/traces/city-walls-of-ventimiglia-q113172746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
