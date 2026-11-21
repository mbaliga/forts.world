# Battery Worth

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-worth-q139906312` |
| Coordinates | 48.15691, -122.67849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.15691/-122.67849)) |
| Wikidata | [Q139906312](https://www.wikidata.org/wiki/Q139906312) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Fort Casey |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, marker 3, road 63, coastline 2, building 19, cliff 5, retaining-wall 12, wall 1, water 1).

Evidence: documented 0, mapped 107, inferred 0, derived 1; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/837502108 historic=yes 20 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":27,"medianInside":1.8,"medianOutside":19.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.15691/-122.67849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q139906312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/battery-worth-q139906312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
