# Pointe du Hoc

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pointe-du-hoc-q140912039` |
| Coordinates | 49.39636, -0.98894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.39636/-0.98894)) |
| Wikidata | [Q140912039](https://www.wikidata.org/wiki/Q140912039) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Cricqueville-en-Bessin |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 116 elements (outline 1, marker 3, zone 58, road 21, cliff 1, building 23, retaining-wall 5, coastline 2, water 2).

Evidence: documented 0, mapped 116, inferred 0, derived 2; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/265671593 historic=yes 66 m from ledger point
- origin moved 66 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":22.6}
- sea-1: DEM check ok {"cells":16,"medianInside":0,"medianOutside":19.5}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.39636/-0.98894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=1; wikidata:Q140912039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 116 elements); data/traces/pointe-du-hoc-q140912039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
