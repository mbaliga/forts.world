# Batteria contraerea di Arbatax

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batteria-contraerea-di-arbatax-q113577244` |
| Coordinates | 39.93783, 9.71082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.93783/9.71082)) |
| Wikidata | [Q113577244](https://www.wikidata.org/wiki/Q113577244) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Tortolì |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 1, road 21, zone 2, cliff 1, coastline 2, building 12, wall 3, water 4).

Evidence: documented 0, mapped 47, inferred 0, derived 4; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1122110982 historic=ruins 15 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":-1.3,"medianOutside":10.1}
- sea-1: DEM check ok {"cells":44,"medianInside":0,"medianOutside":12.6}
- sea-2: DEM check ok {"cells":57,"medianInside":0,"medianOutside":13.2}
- sea-3: DEM check ok {"cells":2,"medianInside":-0.1,"medianOutside":9.9}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.93783/9.71082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113577244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 47 elements); data/traces/batteria-contraerea-di-arbatax-q113577244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
