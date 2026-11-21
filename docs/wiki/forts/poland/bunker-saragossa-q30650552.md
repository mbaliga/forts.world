# Bunker Saragossa

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-saragossa-q30650552` |
| Coordinates | 54.71719, 18.63682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.71719/18.63682)) |
| Wikidata | [Q30650552](https://www.wikidata.org/wiki/Q30650552) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Jastarnia |
| Inception | 1939 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | bunker |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, coastline 2, road 21, building 2, waterway 5, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/342129022 historic=ruins 1 m from ledger point
- sea-0: DEM check ok {"cells":110,"medianInside":-3.5,"medianOutside":3.1}
- 302 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.71719/18.63682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q30650552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/bunker-saragossa-q30650552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
