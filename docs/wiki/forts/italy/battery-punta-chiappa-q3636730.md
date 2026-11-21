# Battery Punta Chiappa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-punta-chiappa-q3636730` |
| Coordinates | 44.3224, 9.15175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.3224/9.15175)) |
| Wikidata | [Q3636730](https://www.wikidata.org/wiki/Q3636730) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Camogli |
| Inception | 1930 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 52 elements (outline 1, road 24, building 16, waterway 6, coastline 1, zone 2, water 2).

Evidence: documented 0, mapped 52, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/309462029 historic=building Q3636730 78 m from ledger point
- origin moved 77 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":0.3,"medianOutside":153.9}
- sea-1: DEM check ok {"cells":3,"medianInside":-0.6,"medianOutside":154.9}
- 46 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.3224/9.15175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=3; wikidata:Q3636730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 52 elements); data/traces/battery-punta-chiappa-q3636730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
