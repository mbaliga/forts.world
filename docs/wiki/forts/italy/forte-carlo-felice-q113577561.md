# Forte Carlo Felice

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-carlo-felice-q113577561` |
| Coordinates | 41.2154, 9.42232 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.2154/9.42232)) |
| Wikidata | [Q113577561](https://www.wikidata.org/wiki/Q113577561) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, coastline 1, building 31, road 10, wall 5, zone 1, water 2).

Evidence: documented 0, mapped 51, inferred 0, derived 2; heights documented 4, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/277777322 historic=fort Q113577561 11 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":0,"medianOutside":14.3}
- sea-1: DEM check ok {"cells":13,"medianInside":-0.3,"medianOutside":14.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.2154/9.42232) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=0; wikidata:Q113577561 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/forte-carlo-felice-q113577561.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
